const { fakerDE } = require('@faker-js/faker');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const userCountTarget = 10;
const trackCountTarget = 50;
const watchlistCountTarget = 25;
const watchlistFillRange = 15;
async function seed() {
    // create users
    const userCountActual = await prisma.benutzer.count();
    for (let i = 1; i <= userCountTarget - userCountActual; i++) {
        const user = {
            Fullname: fakerDE.person.fullName(),
            Email: fakerDE.internet.email(),
        };
        console.log('seeding');
        const createBenutzer = await prisma.benutzer.create({
            data: user,
        });
    }
    console.log(`${await prisma.benutzer.count()} Benutzer in DB`);
    // create tracks
    const trackCountActual = await prisma.track.count();
    for (let i = 1; i <= trackCountTarget - trackCountActual; i++) {
        const Track = {
            name: fakerDE.music.songName(),
            duration: Math.floor(Math.random() * 300),
            genre: fakerDE.music.genre(),
            artist: fakerDE.person.fullName(),
        };
        console.log('seeding');
        const createTrack = await prisma.track.create({
            data: Track,
        });
    }
    console.log(`${await prisma.track.count()} Tracks in DB`);
    // create watchlists
    const userIds = (
        await prisma.benutzer.findMany({ select: { id: true } })
    ).map((_) => _.id);
    const watchlistCountActual = await prisma.watchlist.count();
    for (let i = 1; i <= watchlistCountTarget - watchlistCountActual; i++) {
        await prisma.watchlist.create({
            data: {
                name: fakerDE.word.noun(),
                createdAt: fakerDE.date.recent(),
                User: {
                    connect: {
                        id: userIds[Math.floor(Math.random() * userIds.length)],
                    },
                },
            },
        });
    }
    console.log(`${await prisma.watchlist.count()} Watchlists in DB`);
    // fill watchlists
    const watchlists = await prisma.watchlist.findMany({
        select: { id: true },
    });
    const watchlistIds = watchlists.map((_) => _.id);
    const tracklist = await prisma.track.findMany({ select: { id: true } });
    for (let i = 0; i < watchlistIds.length; i++) {
        const rndTracklist = Array.from(
            new Array(Math.floor(Math.random() * watchlistFillRange))
        ).map((_) => tracklist[Math.floor(Math.random() * tracklist.length)]);
        await prisma.watchlist.update({
            where: {
                id: watchlistIds[
                    Math.floor(Math.random() * watchlistIds.length)
                ],
            },
            data: {
                Track: { connect: rndTracklist },
            },
        });
    }
}
function handleError(e) {
    console.error(`FEHLER: ${e.message}`);
}
seed()
    .then(() => console.log('done seeding'))
    .catch(handleError);

const { fakerDE } = require('@faker-js/faker');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const userCountTarget = 10;
const trackCountTarget = 50;
const watchlistCountTarget = 25;
const watchlistFillTarget = 15;
async function seed() {
    // create users
    const userCountActual = await prisma.benutzer.count();
    for (let i = 1; i <= userCountTarget - userCountActual; i++) {
        const user = {
            fullname: fakerDE.person.fullName(),
            email: fakerDE.internet.email(),
        };
        const createBenutzer = await prisma.benutzer.create({
            data: user,
        });
    }
    console.log(
        `Created ${
            userCountTarget - userCountActual
        } Benutzer, now are ${await prisma.benutzer.count()} Benutzer in DB`
    );
    // create tracks
    const trackCountActual = await prisma.track.count();
    for (let i = 1; i <= trackCountTarget - trackCountActual; i++) {
        const Track = {
            name: fakerDE.music.songName(),
            duration: Math.floor(Math.random() * 300),
            genre: fakerDE.music.genre(),
            artist: fakerDE.person.fullName(),
        };
        const createTrack = await prisma.track.create({
            data: Track,
        });
    }
    console.log(
        `Created ${
            trackCountTarget - trackCountActual
        } tracks, now are ${await prisma.track.count()} Tracks in DB`
    );
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
                benutzer: {
                    connect: {
                        id: userIds[Math.floor(Math.random() * userIds.length)],
                    },
                },
            },
        });
    }
    console.log(
        `created ${
            watchlistCountTarget - watchlistCountActual
        } watchlists, now are ${await prisma.watchlist.count()} Watchlists in DB`
    );
    // fill watchlists
    const watchlistIds = (
        await prisma.watchlist.findMany({
            select: { id: true },
        })
    ).map((_) => _.id);
    const allTracks = await prisma.track.findMany({ select: { id: true } });
    // iterate over all watchlists:
    for (let watchListCuid of watchlistIds) {
        const trackCountInWatchlistI = await prisma.track.count({
            where: {
                watchLists: { some: { id: watchListCuid } },
            },
        });
        console.log(
            `${trackCountInWatchlistI} tracks in Watchlist ${watchListCuid}`
        );
        if (trackCountInWatchlistI >= watchlistFillTarget) {
            console.log('continuing ..');
            continue;
        }
        const createCount =
            Math.floor(Math.random() * watchlistFillTarget) -
            trackCountInWatchlistI;
        if (createCount <= 0) {
            continue;
        }
        const rndTracklist = Array.from(new Array(createCount)).map(
            (_) => allTracks[Math.floor(Math.random() * allTracks.length)]
        ); // duplicates are possible but obviously OK for prisma
        await prisma.watchlist.update({
            where: {
                id: watchListCuid,
            },
            data: {
                tracks: { connect: rndTracklist },
            },
        });
        console.log(
            `created ${createCount} tracks in watchlist ${watchListCuid}`
        );
    }
}
function handleError(e) {
    console.error(`FEHLER: ${e.message}`);
}
seed()
    .then(() => console.log('done seeding'))
    .catch(handleError);

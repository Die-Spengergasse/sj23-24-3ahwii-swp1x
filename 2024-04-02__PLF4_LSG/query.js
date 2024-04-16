const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });

if (process.argv.length != 3) {
    console.log('no user provided, exiting');
    process.exit(1);
}
const userName = process.argv.at(-1).trim();
if (!userName) {
    console.log('empty username provided, exiting');
    process.exit(1);
}
console.log(`finding watchlist names for ${userName}`);
async function getWatchlistNamesForUser(userName) {
    return await prisma.watchlist.findMany({
        select: {
            id: true,
            name: true,
        },
        where: {
            benutzer: {
                fullname: userName,
            },
        },
    });
}
async function tracksFromWatchlist(id) {
    return await prisma.track.findMany({
        where: {
            watchLists: {
                some: { id: id },
            },
        },
    });
}
async function main() {
    const lists = await getWatchlistNamesForUser(userName);
    for (let wl of lists) {
        const tracks = await tracksFromWatchlist(wl.id);
        console.log(
            `${userName}'s Watchlist ${wl.name} ... ${tracks.length} tracks`
        );
        for (let t of tracks) {
            console.log(`    ${t.name} by ${t.artist} (${t.duration} secs)`);
        }
    }
}
main();

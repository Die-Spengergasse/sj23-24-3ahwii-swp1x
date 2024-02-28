const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { fakerDE } = require('@faker-js/faker');
const maxUsers = 3;
const maxAccounts = 7;
const maxTransactions = 21;
fakerDE.finance.accountName();
fakerDE.finance.amount();
async function main() {
    let createUsers = maxUsers - (await prisma.user.count());
    if (createUsers < 0) createUsers = 0;
    for (let i = 0; i < createUsers; i++) {
        try {
            await prisma.user.create({
                data: {
                    email: fakerDE.internet.email(),
                    name: fakerDE.person.fullName(),
                    password: fakerDE.internet.password(),
                },
            });
        } catch (e) {
            console.log(e.message.split('\n').pop());
        }
    }
    const uids = (
        await prisma.user.findMany({
            select: {
                id: true,
            },
        })
    ).map((user) => user.id);
    console.log(
        `${uids.length} Users are in the database. (${createUsers} created)`
    );
    let createAccounts = maxAccounts - (await prisma.account.count());
    if (createAccounts < 0) createAccounts = 0;
    for (let i = 0; i < createAccounts; i++) {
        try {
            await prisma.account.create({
                data: {
                    title: fakerDE.finance.accountName(),
                    balance: Math.floor(fakerDE.finance.amount()),
                    user: {
                        connect: {
                            id: uids[Math.floor(Math.random() * uids.length)],
                        },
                    },
                },
            });
        } catch (e) {
            console.log(e.message);
        }
    }
    const aids = (
        await prisma.account.findMany({
            select: {
                id: true,
            },
        })
    ).map((account) => account.id);
    console.log(
        `${aids.length} Accounts are in the database. (${createAccounts} created)`
    );
    let createTransactions =
        maxTransactions - (await prisma.transaction.count());
    if (createTransactions < 0) createTransactions = 0;
    for (let i = 0; i < createTransactions; i++) {
        try {
            await prisma.transaction.create({
                data: {
                    amount: Math.floor(fakerDE.finance.amount()),
                    currency: fakerDE.finance.currency()['name'],
                    initiator: {
                        connect: {
                            id: uids[Math.floor(Math.random() * uids.length)],
                        },
                    },
                    accountFrom: {
                        connect: {
                            id: aids[Math.floor(Math.random() * aids.length)],
                        },
                    },
                    accountTo: {
                        connect: {
                            id: aids[Math.floor(Math.random() * aids.length)],
                        },
                    },
                },
            });
        } catch (e) {
            console.log(e.message);
        }
    }
    const tidsCount = await prisma.transaction.count();
    console.log(
        `${tidsCount} Transactions are in the database. (${createTransactions} created)`
    );
    await prisma.$disconnect();
}
main()
    .then(() => {
        console.log('Seeding done.');
    })
    .catch((e) => {
        console.error(e.message);
    });

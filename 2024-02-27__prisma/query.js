const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Account {
    #balance;
    #userName;

    constructor(obj) {
        this.title = obj.title;
        this.#userName = obj.user.name;
        this.userEmail = obj.user.email;
        this.#balance =
            obj.transactionsTo.reduce((acc, t) => acc + t.amount, 0) -
            obj.transactionsFrom.reduce((acc, t) => acc + t.amount, 0);
    }
    toString() {
        return `${this.#userName} <${this.title}>: ${this.#balance}`;
    }
    get balance() {
        return this.#balance;
    }
    get userName() {
        return this.#userName;
    }
}

async function main() {
    const accounts = (
        await prisma.account.findMany({
            include: {
                user: true,
                transactionsFrom: true,
                transactionsTo: true,
            },
        })
    )
        .map((_) => new Account(_))
        .sort((a, b) => a.userName.localeCompare(b.userName));
    accounts.forEach((a) => console.log(a.toString()));
    const total = accounts.reduce((acc, a) => acc + a.balance, 0);
    console.log(`Total: ${total}`);
    prisma.$disconnect();
}
main().catch((e) => {
    console.error(e.message);
});

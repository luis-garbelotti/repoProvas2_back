import { prisma } from "../src/database.js";
import bcrypt from "bcrypt";

async function main() {
    await prisma.user.upsert({
        where: {
            email: "usertest@email.com"
        },
        update: {},
        create: {
            email: "usertest@email.com",
            password: bcrypt.hashSync("123", 10)
        }
    });

    await prisma.category.createMany({
        data: [
            {name: "P1"},
            {name: "P2"},
            {name: "P3"},
            {name: "P2ch"},
            {name: "Outras"}
        ]
    });

    await prisma.term.createMany({
        data: [
            {number: 1},
            {number: 2},
            {number: 3},
            {number: 4},
        ]
    })

    await prisma.discipline.createMany({
        data: [
            {name: 'HTML', termId: 1},
            {name: 'CSS', termId: 1},
            {name: 'Javascript', termId: 2},
            {name: 'React', termId: 3},
            {name: 'Aprendendo a aprender', termId: 1},
            {name: 'CNV', termId: 4},
        ]
    });

    await prisma.teacher.createMany({
        data: [
            {name: "Dina"},
            {name: "Bruna"},
        ]
    });

}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
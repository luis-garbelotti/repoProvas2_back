import { prisma } from "../../src/database.js";

export async function teacherDisciplineFactory() {
    await prisma.teacherDiscipline.createMany({
        data: [
            { teacherId: 1, disciplineId: 1 },
            { teacherId: 1, disciplineId: 2 },
            { teacherId: 2, disciplineId: 5 },
            { teacherId: 2, disciplineId: 6 },
        ]
    })
}
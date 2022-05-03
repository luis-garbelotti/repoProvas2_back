import { faker } from "@faker-js/faker";

export async function testBodyFactory(teacherDisciplineId: number) {

    return {
        name: faker.lorem.words(4),
        pdfUrl: faker.internet.url(),
        categoryId: 1,
        teacherDisciplineId,
        views: 0
    }
}
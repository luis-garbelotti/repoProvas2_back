import app from "../src/app.js";
import supertest from 'supertest';
import userBodyFactory from "./Factories/userBodyFactory.js";
import userFactory from "./Factories/userFactory.js";
import { prisma } from "../src/database.js";
import { testBodyFactory } from "./Factories/testBodyFactory.js";
import { testFactory } from "./Factories/testFactory.js";
import { teacherDisciplineFactory } from "./Factories/teacherDisciplineFactory.js";

describe('Search tests by teacher controller', () => {

    describe("GET /tests/teacher/:teacherId", () => {

        it('should return status 401 given invalid credentials', async () => {

            const response = await supertest(app).get(`/tests/teachers/:teacherId`);
            
            expect(response.status).toEqual(401);
        });
        
        it('should return status 200 given valid credentials', async () => {
            
            const teachers = await prisma.teacher.findFirst({});
            const user = userBodyFactory();
            await userFactory(user);

            const responseSignIn = await supertest(app).post('/sign-in').send(user);
            
            expect(responseSignIn.status).toEqual(200);
            expect(typeof(responseSignIn.body.token)).toEqual('string');
            expect(responseSignIn.body.token.length).toBeGreaterThan(1);

            const result = await supertest(app).get(`/tests/teachers/${teachers.id}`).set('Authorization', `Bearer ${responseSignIn.body.token}`);

            expect(result.status).toEqual(200);
            
        });
    });
})

describe('Search test by discipline controller', () => {

    describe("GET  /tests/disciplines/:disciplineId", () => {

        it('should return status 401 given invalid credentials', async () => {

            const response = await supertest(app).get(`/tests/disciplines/:disciplineId`);

            expect(response.status).toEqual(401);
        });

        it('should return status 200 given valid credentials', async () => {

            const discipline = await prisma.discipline.findFirst({})
            const user = userBodyFactory();
            await userFactory(user);

            const responseSignIn = await supertest(app).post('/sign-in').send(user);

            expect(responseSignIn.status).toEqual(200);
            expect(typeof (responseSignIn.body.token)).toEqual('string');
            expect(responseSignIn.body.token.length).toBeGreaterThan(1);

            const result = await supertest(app).get(`/tests/teachers/${discipline.id}`).set('Authorization', `Bearer ${responseSignIn.body.token}`);

            expect(result.status).toEqual(200);

        });
    });
})

describe('Update test view', () => {

    describe("PUT  /tests/:testId/update-view", () => {

        it('should return status 200 given valid credentials', async () => {
            await teacherDisciplineFactory();
            const response = await prisma.teacherDiscipline.findFirst({});

            const test = await testBodyFactory(response.id);
            await testFactory(test);
            const res = await prisma.test.findFirst({})

            const result = await supertest(app).put(`/tests/${res.id}/update-view`)

            expect(result.status).toEqual(200);

        });
    });
})
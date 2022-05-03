import { Test } from "@prisma/client";
import { prisma } from "../../src/database.js";

export async function testFactory(test: Omit<Test, "id">) {
    await prisma.test.create({
        data: {
            ...test
        }
    })
}
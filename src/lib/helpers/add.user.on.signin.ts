"use server"

import prisma from "../db";
import { Role } from "@prisma/client"; // Adjust the import path if necessary

export async function insertUserOnSignIn(clerkId: string, name: string, email: string, role: Role = Role.USER) {
    try {
        const existingUser = await prisma.user.findUnique({
            where: { clerkId },
        });

        if (existingUser) {
            console.log(`User with clerkId ${clerkId} already exists.`);
            return existingUser;
        }

        const newUser = await prisma.user.create({
            data: {
                clerkId,
                name,
                email,
                role,
            },
        });

        console.log(`Inserted new user with clerkId ${clerkId}.`);
        return newUser;
    } catch (error) {
        console.error('Error inserting user:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}


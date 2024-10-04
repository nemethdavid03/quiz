"use server"

import prisma from "../db";

export const getUserByClerkId = async (clerkId: string) => {
    return await prisma.user.findUnique({
        where: { clerkId },
    });
};

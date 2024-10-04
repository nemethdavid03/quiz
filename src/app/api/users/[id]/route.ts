import { NextResponse } from "next/server";
import { NextApiRequest } from 'next'; // Import Next.js types
import prisma from "@/lib/db";

interface Params {
    id: string; // Assuming id is passed as a string
}

export async function DELETE(req: NextApiRequest, { params }: { params: Params }) {
    const userId = parseInt(params.id); // Ensure userId is a number

    try {
        // First, delete all dependent records (if applicable)
        await prisma.quiz.deleteMany({
            where: {
                creatorId: userId,
            },
        });

        // Now, delete the user
        const deletedUser = await prisma.user.delete({
            where: {
                id: userId,
            },
        });

        return NextResponse.json(deletedUser);
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
    }
}

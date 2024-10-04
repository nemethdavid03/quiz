import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

export async function GET() {
    try {
        const products = await prisma.product.findMany();
        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        return NextResponse.json({ error: 'Error fetching quizzes' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { name, description, price, categoryId } = await req.json();

        // Get the authenticated user
        const { userId: clerkId } = auth(); // This retrieves the Clerk ID

        if (!clerkId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Fetch the user ID from your database using the Clerk ID
        const user = await prisma.user.findUnique({
            where: {
                clerkId: clerkId, // Assuming you have clerkId field in User table
            },
        });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const creatorId = user.id; // Get the user ID to use as creatorId

        // Create a new Quiz entry in the database
        const newQuiz = await prisma.product.create({
            data: {
                name,
                description,
                price,
                categoryId,
            },
        });

        return NextResponse.json(newQuiz, { status: 201 });
    } catch (error) {
        console.error('Error creating quiz:', error);
        return NextResponse.json({ error: 'Error creating quiz' }, { status: 500 });
    }
}
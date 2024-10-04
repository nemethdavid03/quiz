import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const quiz = await prisma.test.findUnique({
            where: { id: Number(id) },
        });

        if (!quiz) {
            return NextResponse.json({ error: 'Quiz not found' }, { status: 404 });
        }

        return NextResponse.json(quiz);
    } catch (error) {
        console.error('Error fetching quiz:', error);
        return NextResponse.json({ error: 'Error fetching quiz' }, { status: 500 });
    }
}
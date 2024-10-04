"use server"

import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const quizzes = await prisma.transaction.findMany();
        return NextResponse.json(quizzes);
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        return NextResponse.json({ error: 'Error fetching quizzes' }, { status: 500 });
    }
}


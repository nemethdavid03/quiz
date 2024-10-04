"use client";

import QuizForm from '@/components/forms/QuizForm';
import { quizSchema } from '@/lib/schemas/quiz.scema';
import React from 'react';
import { z } from 'zod';

type QuizFormData = z.infer<typeof quizSchema>;

const CreateQuiz: React.FC = () => {
    const handleSubmit = async (data: QuizFormData) => {
        const response = await fetch('/api/tests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const createdQuiz = await response.json();
            console.log('Quiz created:', createdQuiz);
        } else {
            console.error('Error creating quiz:', response.statusText);
        }
    };

    return (
        <div>
            <h2>Hozz létre új kvízt!</h2>
            <div className="flex justify-center">
                <QuizForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default CreateQuiz;

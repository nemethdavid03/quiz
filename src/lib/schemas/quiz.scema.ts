import { z } from 'zod';

export const quizSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    categoryId: z.number().min(1, "Category ID must be a positive number"),
    timeLimit: z.number().min(1, "Time limit must be a positive number"),
});

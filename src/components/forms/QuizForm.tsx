"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { quizSchema } from '@/lib/schemas/quiz.scema';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

// Define the type for the fetched categories
interface Category {
    id: number;
    name: string;
}

type QuizFormData = z.infer<typeof quizSchema>;

interface QuizFormProps {
    onSubmit: (data: QuizFormData) => Promise<void>;
}

const QuizForm: React.FC<QuizFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<QuizFormData>({
        resolver: zodResolver(quizSchema),
    });

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch categories on component mount
        const fetchCategories = async () => {
            try {
                const response = await fetch('/api/categories'); // Adjust API endpoint as necessary
                const data = await response.json();
                setCategories(data); // Assume the data is an array of categories
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl w-full">
            <div>
                <Label htmlFor="title">
                    Név:
                    <Input id="title" type="text" {...register('title')} />
                </Label>
                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
            </div>
            <div>
                <Label htmlFor="description">
                    Leírás:
                    <Textarea id="description" {...register('description')} />
                </Label>
                {errors.description && <span className="text-red-500">{errors.description.message}</span>}
            </div>
            <div>
                <Label>
                    Kategória:
                    <select {...register('categoryId', { valueAsNumber: true })} disabled={loading}>
                        <option value="">Válassz egy kategóriát</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </Label>
                {errors.categoryId && <span className="text-red-500">{errors.categoryId.message}</span>}
            </div>
            <div>
                <Label>
                    Időkorlát (másodperc):
                    <Input type="number" {...register('timeLimit', { valueAsNumber: true })} />
                </Label>
                {errors.timeLimit && <span className="text-red-500">{errors.timeLimit.message}</span>}
            </div>
            <button type="submit">Kvíz hozzáadása</button>
        </form>
    );
};

export default QuizForm;

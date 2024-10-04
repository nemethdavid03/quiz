"use client"

import { GoogleGenerativeAI } from '@google/generative-ai';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Marked } from 'marked';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_AI!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const GymRecommendation = () => {
    const [workoutPlan, setWorkoutPlan] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fitnessLevel: '',
        goal: '',
        daysPerWeek: '',
        equipment: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const prompt = `Generate a workout plan for someone with ${formData.fitnessLevel} fitness level, aiming to ${formData.goal}. Include ${formData.daysPerWeek} workouts per week using ${formData.equipment}.`;

        try {
            const result = await model.generateContent(prompt);
            setWorkoutPlan(result.response.text());
        } catch (error) {
            console.error('Error generating workout plan:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="">
            <h1 className="text-4xl font-bold mb-8 text-center">Generate Your Personalized Workout Plan</h1>
            <form onSubmit={handleSubmit} className="shadow rounded px-8 pt-6 pb-8 mb-4">
                {/* Form fields remain the same */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Generate Workout Plan</button>
            </form>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded p-4 mt-6 max-w-3xl"
            >
                {isLoading && <div className="text-center">Loading...</div>}
                {workoutPlan && (
                    <div dangerouslySetInnerHTML={{ __html: Marked.parse(workoutPlan) }} className="overflow-auto" />
                )}
            </motion.div>
        </div>
    );
};

export default GymRecommendation;
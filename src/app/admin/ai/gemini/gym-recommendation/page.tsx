"use client"

import { GoogleGenerativeAI } from '@google/generative-ai';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_AI!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const GymRecommendation = () => {
    const [workoutPlan, setWorkoutPlan] = useState('');
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

        const prompt = `Generate a workout plan for someone with ${formData.fitnessLevel} fitness level, aiming to ${formData.goal}. Include ${formData.daysPerWeek} workouts per week using ${formData.equipment}.`;

        try {
            const result = await model.generateContent(prompt);
            setWorkoutPlan(result.response.text());
        } catch (error) {
            console.error('Error generating workout plan:', error);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1>Generate Your Personalized Workout Plan</h1>
            <form onSubmit={handleSubmit} className="shadow rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="fitnessLevel" className="block text-sm font-bold mb-2">Fitness Level:</label>
                    <select id="fitnessLevel" name="fitnessLevel" value={formData.fitnessLevel} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">Select Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="goal" className="block text-sm font-bold mb-2">Goal:</label>
                    <select id="goal" name="goal" value={formData.goal} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">Select Goal</option>
                        <option value="Build Muscle">Build Muscle</option>
                        <option value="Lose Weight">Lose Weight</option>
                        <option value="Improve Endurance">Improve Endurance</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="daysPerWeek" className="block text-sm font-bold mb-2">Days Per Week:</label>
                    <select id="daysPerWeek" name="daysPerWeek" value={formData.daysPerWeek} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">Select Days</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="equipment" className="block text-sm font-bold mb-2">Equipment:</label>
                    <select id="equipment" name="equipment" value={formData.equipment} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">Select Equipment</option>
                        <option value="Gym Equipment">Gym Equipment</option>
                        <option value="Bodyweight">Bodyweight</option>
                        <option value="Home Equipment">Home Equipment</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Generate Workout Plan</button>
            </form>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded p-4 mt-6"
            >
                {workoutPlan && <pre>{workoutPlan}</pre>}
            </motion.div>
        </div>
    );
};

export default GymRecommendation;
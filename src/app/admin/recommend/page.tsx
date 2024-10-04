"use client"
import React, { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "@/components/ui/button";
import { marked } from 'marked';
import { motion } from 'framer-motion';

const page = () => {
    const [cuisine, setCuisine] = useState('');
    const [diet, setDiet] = useState('');
    const [intolerances, setIntolerances] = useState('');
    const [recommendation, setRecommendation] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_AI!);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Suggest a dish that is ${cuisine ? cuisine : 'any cuisine'} and is ${diet ? diet : 'any diet'} and is ${intolerances ? 'free of ' + intolerances : 'no dietary restrictions'}.`;
        const result = await model.generateContent(prompt);
        setRecommendation(result.response.text());
    };

    return (
        <div className="container mx-auto">
            <motion.h1 
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                Gemini Food Recommender
            </motion.h1>

            <motion.form 
                onSubmit={handleSubmit} 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="mb-4">
                    <label htmlFor="cuisine" className="block text-gray-700 font-bold mb-2">Cuisine:</label>
                    <select id="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">Any</option>
                        <option value="italian">Italian</option>
                        <option value="mexican">Mexican</option>
                        <option value="indian">Indian</option>
                        {/* Add more cuisines here */}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="diet" className="block text-gray-700 font-bold mb-2">Diet:</label>
                    <select id="diet" value={diet} onChange={(e) => setDiet(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">Any</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        {/* Add more diets here */}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="intolerances" className="block text-gray-700 font-bold mb-2">Intolerances:</label>
                    <select id="intolerances" value={intolerances} onChange={(e) => setIntolerances(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">None</option>
                        <option value="gluten">Gluten</option>
                        <option value="dairy">Dairy</option>
                        <option value="nuts">Nuts</option>
                        {/* Add more intolerances here */}
                    </select>
                </div>

                <motion.button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                >
                    Recommend
                </motion.button>
            </motion.form>

            {recommendation && (
                <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <h2 className="text-2xl font-bold mb-4">Recommendation:</h2>
                    <div className="p-4 rounded-md shadow-md" dangerouslySetInnerHTML={{ __html: marked(recommendation) }} />
                </motion.div>
            )}
        </div>
    );
};

export default page
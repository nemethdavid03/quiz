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

        const prompt = `Javasolj egy ételt, amely ${cuisine ? cuisine : 'bármely konyha'} és ${diet ? diet : 'bármely diéta'} és ${intolerances ? 'mentes ' + intolerances : 'diétás korlátozás nélkül'}.`;
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
                Gemini Ételjavasló
            </motion.h1>

            <motion.form 
                onSubmit={handleSubmit} 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="mb-4">
                    <label htmlFor="cuisine" className="block font-bold mb-2">Konyha:</label>
                    <div className="flex flex-wrap gap-2">
                        <button 
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            onClick={() => setCuisine('')}
                        >
                            Bármely
                        </button>
                        <button 
                            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${cuisine === 'olasz' ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setCuisine('olasz')}
                        >
                            Olasz
                        </button>
                        <button 
                            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${cuisine === 'mexikói' ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setCuisine('mexikói')}
                        >
                            Mexikói
                        </button>
                        <button 
                            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${cuisine === 'indiai' ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setCuisine('indiai')}
                        >
                            Indiai
                        </button>
                        {/* Add more cuisines here */}
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="diet" className="block font-bold mb-2">Diéta:</label>
                    <div className="flex flex-wrap gap-2">
                        <button 
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            onClick={() => setDiet('')}
                        >
                            Bármely
                        </button>
                        <button 
                            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${diet === 'vegetáriánus' ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setDiet('vegetáriánus')}
                        >
                            Vegetáriánus
                        </button>
                        <button 
                            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${diet === 'vegán' ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setDiet('vegán')}
                        >
                            Vegán
                        </button>
                        {/* Add more diets here */}
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="intolerances" className="block font-bold mb-2">Tűrések:</label>
                    <select id="intolerances" value={intolerances} onChange={(e) => setIntolerances(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">Nincs</option>
                        <option value="glutén">Glutén</option>
                        <option value="tej">Tej</option>
                        <option value="dió">Dió</option>
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
                    Javasolj
                </motion.button>
            </motion.form>

            {recommendation && (
                <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <h2 className="text-2xl font-bold mb-4">Javaslat:</h2>
                    <div className="p-4 rounded-md shadow-md" dangerouslySetInnerHTML={{ __html: marked(recommendation) }} />
                    <Button className="mt-4">Rendelés</Button>
                </motion.div>
            )}
        </div>
    );
};

export default page
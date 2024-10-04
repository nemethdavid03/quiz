"use client"
import React, { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "@/components/ui/button";
import { marked } from 'marked';
import { motion } from 'framer-motion';

const page = () => {
    const [cuisine, setCuisine] = useState('');
    const [diet, setDiet] = useState('');
    const [intolerances, setIntolerances] = useState([]); // Changed to array
    const [recommendation, setRecommendation] = useState(null);
    const [selectedIntolerances, setSelectedIntolerances] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const predefinedIntolerances = ["Glutén", "Laktóz", "Tojás", "Szójabab", "Dió", "Mogyoró", "Szezámmag"];

    const handleIntoleranceChange = (e) => {
        setInputValue(e.target.value);
        const newIntolerance = e.target.value;
        if (predefinedIntolerances.includes(newIntolerance)) {
            setSelectedIntolerances([...selectedIntolerances, newIntolerance]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (inputValue && !selectedIntolerances.includes(inputValue)) {
                setSelectedIntolerances([...selectedIntolerances, inputValue]);
                setInputValue('');
            }
        }
    };

    const handleFocus = () => {
        const filteredSuggestions = predefinedIntolerances.filter(
            (suggestion) => !selectedIntolerances.includes(suggestion) && suggestion.toLowerCase().startsWith(inputValue.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        setShowSuggestions(true);
    };

    const handleBlur = () => {
        setShowSuggestions(false);
    };

    const handleSuggestionClick = (suggestion) => {
        setSelectedIntolerances([...selectedIntolerances, suggestion]);
        setInputValue('');
        setShowSuggestions(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_AI!);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Javasolj egy ételt, amely ${cuisine ? cuisine : 'bármely konyha'} és ${diet ? diet : 'bármely diéta'} és ${selectedIntolerances.length > 0 ? 'mentes ' + selectedIntolerances.join(', ') : 'diétás korlátozás nélkül'}.`;
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
                    <select
                        id="cuisine"
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Válassz konyhát</option>
                        <option value="Magyar">Magyar</option>
                        <option value="Olasz">Olasz</option>
                        <option value="Kínai">Kínai</option>
                        {/* Add more cuisine options here */}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="diet" className="block font-bold mb-2">Diéta:</label>
                    <select
                        id="diet"
                        value={diet}
                        onChange={(e) => setDiet(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Válassz diétát</option>
                        <option value="Vegetáriánus">Vegetáriánus</option>
                        <option value="Vegán">Vegán</option>
                        <option value="Paleo">Paleo</option>
                        {/* Add more diet options here */}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="intolerances" className="block font-bold mb-2">Tűrések:</label>
                    <div className="flex flex-wrap gap-2">
                        {selectedIntolerances.map((intolerance, index) => (
                            <span key={index} className="bg-gray-200 px-3 py-1 rounded text-gray-700 mr-2 mb-2">
                                {intolerance}
                                <button onClick={() => setSelectedIntolerances(selectedIntolerances.filter(i => i !== intolerance))} className="ml-2 text-gray-500">x</button>
                            </span>
                        ))}
                        <input
                            type="text"
                            id="intolerances"
                            value={inputValue}
                            onChange={handleIntoleranceChange}
                            onKeyDown={handleKeyDown}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {showSuggestions && (
                            <ul className="absolute bg-white shadow-md rounded mt-1 z-10">
                                {suggestions.map((suggestion) => (
                                    <li
                                        key={suggestion}
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
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
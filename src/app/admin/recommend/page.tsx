
"use client"
import React, { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "@/components/ui/button";

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
    const response = await model.generateText(prompt);
    setRecommendation(response.text);
  };

  return (
    <div>
      <h1>Gemini Food Recommender</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cuisine">Cuisine:</label>
        <select id="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
          <option value="">Any</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="indian">Indian</option>
          {/* Add more cuisines here */}
        </select>

        <label htmlFor="diet">Diet:</label>
        <select id="diet" value={diet} onChange={(e) => setDiet(e.target.value)}>
          <option value="">Any</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          {/* Add more diets here */}
        </select>

        <label htmlFor="intolerances">Intolerances:</label>
        <select id="intolerances" value={intolerances} onChange={(e) => setIntolerances(e.target.value)}>
          <option value="">None</option>
          <option value="gluten">Gluten</option>
          <option value="dairy">Dairy</option>
          <option value="nuts">Nuts</option>
          {/* Add more intolerances here */}
        </select>

        <Button type="submit">Recommend</Button>
      </form>

      {recommendation && (
        <div>
          <h2>Recommendation:</h2>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default page

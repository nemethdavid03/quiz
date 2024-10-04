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
      const response = await model.generateText(prompt);
      setWorkoutPlan(response.text);
    } catch (error) {
      console.error('Error generating workout plan:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fitnessLevel">Fitness Level:</label>
          <select id="fitnessLevel" name="fitnessLevel" value={formData.fitnessLevel} onChange={handleChange}>
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div>
          <label htmlFor="goal">Goal:</label>
          <select id="goal" name="goal" value={formData.goal} onChange={handleChange}>
            <option value="">Select Goal</option>
            <option value="Build Muscle">Build Muscle</option>
            <option value="Lose Weight">Lose Weight</option>
            <option value="Improve Endurance">Improve Endurance</option>
          </select>
        </div>
        <div>
          <label htmlFor="daysPerWeek">Days Per Week:</label>
          <select id="daysPerWeek" name="daysPerWeek" value={formData.daysPerWeek} onChange={handleChange}>
            <option value="">Select Days</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="equipment">Equipment:</label>
          <select id="equipment" name="equipment" value={formData.equipment} onChange={handleChange}>
            <option value="">Select Equipment</option>
            <option value="Gym Equipment">Gym Equipment</option>
            <option value="Bodyweight">Bodyweight</option>
            <option value="Home Equipment">Home Equipment</option>
          </select>
        </div>
        <button type="submit">Generate Workout Plan</button>
      </form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: '20px' }}
      >
        {workoutPlan && <pre>{workoutPlan}</pre>}
      </motion.div>
    </div>
  );
};

export default GymRecommendation;
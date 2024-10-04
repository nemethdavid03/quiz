"use client"

import React from 'react'
import { useState } from 'react';

interface Step {
  id: number;
  task: string;
  nextStep: string;
}

const page = () => {
  const [flowMap, setFlowMap] = useState<Step[]>([]);

  const addStep = () => {
    setFlowMap([...flowMap, { id: Date.now(), task: '', nextStep: '' }]);
  };

  const updateStep = (index: number, field: keyof Step, value: string) => {
    setFlowMap(
      flowMap.map((step, i) =>
        i === index ? { ...step, [field]: value } : step
      )
    );
  };

  const removeStep = (index: number) => {
    setFlowMap(flowMap.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Automation Flow Map</h1>
      <button onClick={addStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Step
      </button>
      <ul className="mt-4">
        {flowMap.map((step, index) => (
          <li key={step.id} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Task"
                value={step.task}
                onChange={(e) => updateStep(index, 'task', e.target.value)}
                className="border rounded px-3 py-2 mr-2"
              />
              <input
                type="text"
                placeholder="Next Step"
                value={step.nextStep}
                onChange={(e) => updateStep(index, 'nextStep', e.target.value)}
                className="border rounded px-3 py-2"
              />
            </div>
            <button onClick={() => removeStep(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;

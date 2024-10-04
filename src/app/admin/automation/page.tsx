import React from 'react'
import { useState } from 'react';

const page = () => {
  const [flowMap, setFlowMap] = useState([]);

  const addStep = () => {
    setFlowMap([...flowMap, { id: Date.now(), task: '', nextStep: '' }]);
  };

  const updateStep = (index, field, value) => {
    setFlowMap(
      flowMap.map((step, i) =>
        i === index ? { ...step, [field]: value } : step
      )
    );
  };

  const removeStep = (index) => {
    setFlowMap(flowMap.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Automation Flow Map</h1>
      <button onClick={addStep}>Add Step</button>
      <ul>
        {flowMap.map((step, index) => (
          <li key={step.id}>
            <input
              type="text"
              placeholder="Task"
              value={step.task}
              onChange={(e) => updateStep(index, 'task', e.target.value)}
            />
            <input
              type="text"
              placeholder="Next Step"
              value={step.nextStep}
              onChange={(e) => updateStep(index, 'nextStep', e.target.value)}
            />
            <button onClick={() => removeStep(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page
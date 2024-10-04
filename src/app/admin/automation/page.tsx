
"use client"

import React from 'react'
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface Step {
  id: number;
  task: string;
  nextStep: string;
  x: number;
  y: number;
}

const page = () => {
  const [flowMap, setFlowMap] = useState<Step[]>([]);
  const [connections, setConnections] = useState<{ from: number; to: number }[]>([]);

  const addStep = () => {
    setFlowMap([...flowMap, { id: Date.now(), task: '', nextStep: '', x: 0, y: 0 }]);
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
    setConnections(connections.filter(c => c.from !== index && c.to !== index));
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(flowMap);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFlowMap(items);
  };

  const handleStepClick = (index: number) => {
    // You might want to handle the click to set a "selected" state for the step,
    // so you can connect lines from it.
    // ...
  };

  const handleConnect = (from: number, to: number) => {
    setConnections([...connections, { from, to }]);
  };

  const drawConnection = (from: number, to: number) => {
    if (from === to) return null; // Don't draw self-connection

    const fromStep = flowMap[from];
    const toStep = flowMap[to];
    if (!fromStep || !toStep) return null;

    return (
      <line
        x1={fromStep.x}
        y1={fromStep.y}
        x2={toStep.x}
        y2={toStep.y}
        stroke="black"
        strokeWidth="2"
      />
    );
  };

  return (
    <div className="p-4 relative" style={{ width: '800px', height: '600px' }}>
      <h1 className="text-2xl font-bold mb-4">Automation Flow Map</h1>
      <button onClick={addStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Step
      </button>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="steps">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="mt-4"
            >
              {flowMap.map((step, index) => (
                <Draggable key={step.id} draggableId={step.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="absolute"
                      style={{
                        top: `${step.y}px`,
                        left: `${step.x}px`,
                        backgroundColor: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid gray',
                        cursor: 'move',
                      }}
                      onClick={() => handleStepClick(index)}
                    >
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
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <svg className="absolute top-0 left-0" width="800" height="600">
        {connections.map(({ from, to }) => drawConnection(from, to))}
      </svg>
    </div>
  );
};

export default page;

// src/App.tsx
"use client";

import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Ensure this package is installed
import { Button } from "@/components/ui/button";

// Initialize the generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_AI!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

interface Message {
    text: string;
    sender: "user" | "bot";
}

const GeminiPage: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");

    const handleSend = async () => {
        if (input.trim() === "") return;

        // Add user message
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: input, sender: "user" },
        ]);

        // Generate a bot response using Google Generative AI
        const prompt = input; // Use user input as the prompt
        const result = await model.generateContent(prompt);

        // Add bot response
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: result.response.text(), sender: "bot" },
        ]);

        // Clear the input
        setInput("");
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 relative">
            <header className="bg-blue-600 text-white p-4 text-center">
                <h1 className="text-2xl font-bold">Gemini Chatbot</h1>
            </header>
            <main className="flex-1 p-4 pb-16"> {/* Add padding to accommodate the input */}
                <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-4 h-[500px] overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`my-2 p-2 rounded-lg ${msg.sender === "user"
                                    ? "bg-blue-100 text-right ml-auto"
                                    : "bg-gray-200 text-left mr-auto"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    {/* Absolute positioned input */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center border-t p-2 bg-white">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Type a message..."
                            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <Button
                            onClick={handleSend}
                            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default GeminiPage;

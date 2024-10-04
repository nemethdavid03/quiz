"use client"

import React, { useEffect, useState } from 'react';

const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        // Start timer if isLoading is true
        if (isLoading) {
            timer = setTimeout(() => {
                setShowLoading(true); // Show loading after 1 second
            }, 1000);
        } else {
            setShowLoading(false); // Hide loading if not loading
        }

        return () => clearTimeout(timer); // Cleanup on unmount or when loading state changes
    }, [isLoading]);

    if (!showLoading) return null; // Don't render anything if showLoading is false

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative w-32 h-32">
                {/* Outer Circle */}
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-yellow-400 border-t-transparent animate-spin" />
                {/* Inner Circle */}
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-yellow-600 opacity-75 animate-ping" />
                {/* Center Dot */}
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
    );
};

export default Loading;

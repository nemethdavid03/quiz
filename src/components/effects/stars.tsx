import React, { useEffect, useState } from 'react';

// Define the Star interface
interface Star {
    id: number;
    top: number;   // Percentage for top position
    left: number;  // Percentage for left position
    size: number;  // Size in pixels
    delay: number; // Animation delay in seconds
}

const Stars: React.FC = () => {
    const [stars, setStars] = useState<Star[]>([]); // Use the Star type
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }); // Cursor position

    useEffect(() => {
        const generatedStars: Star[] = [];
        const numberOfStars = 10;
        const minDistance = 15; // Minimum distance in pixels between stars

        while (generatedStars.length < numberOfStars) {
            // Generate a random position
            const top = Math.random() * 100; // Random top position (percentage)
            const left = Math.random() * 100; // Random left position (percentage)
            const size = Math.random() * 2 + 1; // Random size (1-3px)
            const delay = Math.random() * 3; // Random delay for twinkling

            // Check if this star is too close to existing stars
            const isTooClose = generatedStars.some((star) => {
                const distance = Math.sqrt(
                    Math.pow(star.top - top, 2) + Math.pow(star.left - left, 2)
                );
                return distance < minDistance; // Check if distance is less than minDistance
            });

            // Only add the star if it's not too close to any existing star
            if (!isTooClose) {
                generatedStars.push({ id: Math.random(), top, left, size, delay });
            }
        }

        setStars(generatedStars);
    }, []);

    // Update cursor position
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => {
                // Calculate the offset based on cursor position
                const offsetX = ((cursorPosition.x / window.innerWidth) - 0.5) * 30; // Increase multiplier for more movement
                const offsetY = ((cursorPosition.y / window.innerHeight) - 0.5) * 30; // Increase multiplier for more movement

                return (
                    <div
                        key={star.id}
                        className={`absolute bg-white rounded-full opacity-75`}
                        style={{
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            transform: `translate(${offsetX}px, ${offsetY}px)`, // Apply the offset
                            transition: 'transform 0.1s ease-out', // Smooth transition
                            animationDelay: `${star.delay}s`,
                            animationDuration: '1.5s',
                            animationIterationCount: 'infinite',
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default Stars;

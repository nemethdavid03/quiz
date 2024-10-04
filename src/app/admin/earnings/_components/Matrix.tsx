// MatrixEffect.tsx
import React, { useEffect, useState } from 'react';

interface MatrixEffectProps {
    input: number | string; // Accept either number or string
}

const MatrixEffect: React.FC<MatrixEffectProps> = ({ input }) => {
    // Determine if input is a number and format it as HUF
    const formattedDigits =
        typeof input === 'number'
            ? new Intl.NumberFormat('hu-HU', {
                style: 'currency',
                currency: 'HUF',
                minimumFractionDigits: 0,
            }).format(input).split('')
            : input.split(''); // Split string into characters

    // State to control the visibility of the digits
    const [isVisible, setIsVisible] = useState(false);

    // Use an effect to set visibility to true after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); // Delay before making the digits visible (adjust as needed)

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <h5 className="text-3xl font-bold mt-4">
            {formattedDigits.map((digit, index) => (
                <span
                    key={index}
                    className={`matrix-digit ${isVisible ? 'fade-in' : ''} animate-fall-${index % 5}`}
                    style={{ opacity: isVisible ? 1 : 0 }} // Keep digits displayed after animation
                >
                    {digit}
                </span>
            ))}
        </h5>
    );
};

export default MatrixEffect;

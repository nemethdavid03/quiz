import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

const GridLayout: React.FC<LayoutProps> = ({ children, className = '' }) => {
    return (
        <div className={`grid gap-4 ${className}`}>
            {children}
        </div>
    );
};

export default GridLayout;

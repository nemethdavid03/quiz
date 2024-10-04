// components/MainContent.tsx
const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-12">
            {children}
        </main>
    );
};

export default MainContent;

import React, { useState } from 'react'

const SettingsPage = () => {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div>
            <h2>Admin Settings</h2>
            <div>
                <label htmlFor="theme">Theme:</label>
                <select id="theme" value={theme} onChange={handleThemeChange}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <div>
                <label htmlFor="language">Language:</label>
                <select id="language" value={language} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    {/* Add more languages as needed */}
                </select>
            </div>
            {/* Add other settings as needed */}
        </div>
    );
};

export default SettingsPage

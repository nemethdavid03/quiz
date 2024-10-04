"use client"

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'shadcn-ui'

const SettingsPage = () => {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');
    const [tab, setTab] = useState('general');

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleTabChange = (event) => {
        setTab(event.target.value);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>
            <Tabs value={tab} onValueChange={handleTabChange}>
                <TabsList className="mb-4">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                    <div className="mb-4">
                        <label htmlFor="theme" className="block text-gray-700 font-bold mb-2">Theme:</label>
                        <select id="theme" value={theme} onChange={handleThemeChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="language" className="block text-gray-700 font-bold mb-2">Language:</label>
                        <select id="language" value={language} onChange={handleLanguageChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                        </select>
                    </div>
                </TabsContent>
                <TabsContent value="security">
                    <div>
                        {/* Add security settings here */}
                        <p>Security settings content</p>
                    </div>
                </TabsContent>
                <TabsContent value="other">
                    <div>
                        {/* Add other settings here */}
                        <p>Other settings content</p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default SettingsPage 
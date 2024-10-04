"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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

    const handleTabChange = (value) => {
        setTab(value);
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
                    <Card>
                        <CardHeader>
                            <CardTitle>Security</CardTitle>
                            <CardDescription>
                                Manage your account security settings here.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Enter your password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <Input id="confirm-password" type="password" placeholder="Confirm your password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="other">
                    <Card>
                        <CardHeader>
                            <CardTitle>Other</CardTitle>
                            <CardDescription>
                                Miscellaneous settings.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="notifications">Notifications</Label>
                                <Input id="notifications" type="checkbox" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email address" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default SettingsPage 
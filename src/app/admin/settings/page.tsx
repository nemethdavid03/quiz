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
import { Checkbox } from "@/components/ui/checkbox"

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
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced</TabsTrigger>
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
                            <div className="flex items-center space-x-2">
                                <Checkbox id="two-factor-authentication" />
                                <label htmlFor="two-factor-authentication" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Two-factor Authentication</label>
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
                            <div className="flex items-center space-x-2">
                                <Checkbox id="notifications" />
                                <label htmlFor="notifications" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Notifications</label>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email address" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="timezone">Timezone</Label>
                                <select id="timezone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <option value="UTC">UTC</option>
                                    <option value="EST">EST</option>
                                    <option value="PST">PST</option>
                                </select>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="notifications">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>
                                Manage your notification settings.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="email-notifications" />
                                <label htmlFor="email-notifications" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email Notifications</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="push-notifications" />
                                <label htmlFor="push-notifications" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Push Notifications</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="in-app-notifications" />
                                <label htmlFor="in-app-notifications" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">In-App Notifications</label>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="advanced">
                    <Card>
                        <CardHeader>
                            <CardTitle>Advanced</CardTitle>
                            <CardDescription>
                                Access more advanced settings.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="api-key">API Key</Label>
                                <Input id="api-key" type="text" placeholder="Enter your API key" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="debug-mode" />
                                <label htmlFor="debug-mode" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Debug Mode</label>
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

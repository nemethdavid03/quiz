"use client";

import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import GridLayout from "@/components/ui/gridLayout";
import { User } from "@prisma/client";
import useSWR from "swr";
import GeminiCard from "./_components/GeminiCard";
import HuggingfaceCard from "./_components/HuggingfaceCard";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import CustomizationCard from "./_components/CustomizationCard";
import Link from "next/link";
import { Settings, Settings2 } from "lucide-react";
import AchievementsCard from "./_components/AchievementsCard";


// Fetcher function to get data from the API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Dashboard() {
    const { data, error } = useSWR<User[]>("/api/users", fetcher, { revalidateOnFocus: false });

    if (error) return <div>Error loading users.</div>;
    if (!data) return <Loading isLoading={!data} />;

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold md:text-2xl">AI beállítások</h1>
                <div className="flex items-center space-x-2">
                    <Switch id="status" />
                    <Label htmlFor="status">Offline</Label>
                </div>
            </div>
            {data.length === 0 ? (
                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">Készítsd el a saját AI-od</h3>
                        <p className="text-sm text-muted-foreground">
                            Minden AI funkciót itt tudsz beállítani az oldallal kapcsolatban.
                        </p>
                        <Button className="mt-4">Kezdjünk bele</Button>
                    </div>
                </div>
            ) : (
                <GridLayout className="grid-cols-12 grid-rows-auto">
                    <Card className="col-span-12 md:col-span-6 row-start-1 col-start-1 border-none shadow-none">
                        <CardHeader className="text-3xl font-bold">
                            <CardTitle>Phoibe</CardTitle>
                            <CardDescription>Állítsd be Phoibet, hogy a lehető legjobban szolgálja ki vállalkozásodat.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex gap-3">
                            <Button>Memória törlése</Button>
                            <Button className="flex" variant="outline">
                                <span className="hidden lg:block">Beállítások</span>
                                <Settings size={13} className="ml-0 lg:ml-2 block lg:hidden" />
                            </Button>
                        </CardContent>

                    </Card>

                    <GeminiCard />
                    <HuggingfaceCard />
                    <AchievementsCard />
                    {/*            <HuggingfaceCard /> */}

                </GridLayout>
            )}
        </>
    );
}

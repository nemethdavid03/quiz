import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default function CustomizationCard() {

    return (
        <Card className="col-span-6 row-start-2 border shadow-md">
            <CardHeader>
                <CardTitle>Kinézet</CardTitle>
                <CardDescription>Hozz létre chatbotot, egyedi AI funkciókat és megoldásokat.</CardDescription>
            </CardHeader>
        </Card>
    );
}

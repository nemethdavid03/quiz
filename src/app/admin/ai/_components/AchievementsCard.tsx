import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Settings2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AchievementsCard = () => {
    return (
        <Card className="col-span-12 sm:col-span-6 lg:col-span-8 row-start-5 sm:row-start-3">
            <CardHeader className="flex flex-col">
                <div className="flex items-center space-x-2">
                    <CardTitle className="text-lg font-bold">Teljesítmény</CardTitle>
                </div>
                <CardDescription className="mt-2 text-sm line-clamp-2">
                    Teljesíts célokat.
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-between items-center mt-4">

            </CardFooter>

        </Card>
    )
}

export default AchievementsCard

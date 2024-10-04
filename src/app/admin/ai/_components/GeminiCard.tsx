import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Settings2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const GeminiCard = () => {
    return (
        <>
        <Card className="col-span-12 md:col-span-6 row-start-2 md:row-start-1 col-start-1 md:col-start-7 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black transition-all duration-300">
            <CardHeader className="flex flex-col">
                <div className="flex items-center space-x-2">

                    <CardTitle className="text-lg font-bold">Gemini AI</CardTitle>
                </div>
                <CardDescription className="mt-2 text-sm text-gray-900">
                    Hozz létre chatbotot, egyedi AI funkciókat és megoldásokat.
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-between items-center mt-4 dark:text-white">
                <Link href="ai/gemini" passHref>
                    <Button variant="outline">Konfigurálás <Settings2 size={13} className="ms-3" /></Button>
                </Link>
            </CardFooter>
        </Card>
        <Card className="col-span-12 md:col-span-6 row-start-2 md:row-start-1 col-start-1 md:col-start-1 bg-gradient-to-r from-blue-400 to-blue-600 text-black transition-all duration-300">
            <CardHeader className="flex flex-col">
                <div className="flex items-center space-x-2">

                    <CardTitle className="text-lg font-bold">Bard AI</CardTitle>
                </div>
                <CardDescription className="mt-2 text-sm text-gray-900">
                    A Bard egy nagyméretű nyelvi modell, amelyet a Google fejlesztett ki.
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-between items-center mt-4 dark:text-white">
                <Link href="ai/bard" passHref>
                    <Button variant="outline">Konfigurálás <Settings2 size={13} className="ms-3" /></Button>
                </Link>
            </CardFooter>
        </Card>
        </>
    )
}

export default GeminiCard

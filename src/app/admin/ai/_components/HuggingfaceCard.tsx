import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Settings2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HuggingfaceCard = () => {
    return (
        <Card className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4  row-start-3">
            <CardHeader className="flex flex-col">
                <div className="flex items-center space-x-2">
                    <CardTitle className="text-lg font-bold">Huggingface</CardTitle>
                </div>
                <CardDescription className="mt-2 text-sm line-clamp-2">
                    Generálj magas felbontású képeket és használd a Huggingface modelleket.
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-between items-center mt-4">
                <Link href="ai/huggingface" passHref>
                    <Button variant="outline">Konfigurálás <Settings2 size={13} className="ms-3" /></Button>
                </Link>
            </CardFooter>

        </Card>
    )
}

export default HuggingfaceCard

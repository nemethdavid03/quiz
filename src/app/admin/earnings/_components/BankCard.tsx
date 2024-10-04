import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'

const BankCard = () => {
    return (
        <Card className="hidden md:block col-span-4 row-span-1 hover:blur-[1px] bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-yellow-500/60 hover:rotate-1 hover:opacity-90">
            <CardHeader className="flex-row justify-between items-center">
                <img width={35} src="https://satoshi.webpixels.io/img/cards/mastercard.svg" alt="" />
                <Badge>aktív</Badge>
            </CardHeader>
            <CardContent>
                <h5 className="uppercase text-sm">kártyaszám</h5>
                <p className="text-2xl font-bold">4920 **** **** 0938</p>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <h5 className="uppercase text-sm">Név</h5>
                    <p className="text-sm font-bold">Németh Dávid Péter</p>
                </div>
                <div className="flex flex-col">
                    <h5 className="uppercase text-sm">Lejárati dátum</h5>
                    <p className="text-sm font-bold">04/29</p>
                </div>
            </CardFooter>
        </Card>
    )
}

export default BankCard

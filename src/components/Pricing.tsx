```javascript
"use client"

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import React from 'react';

export const Pricing = () => {
    const plans = [
        {
            name: 'Free',
            price: 0,
            annualPrice: 0,
            features: [
                'Basic features',
                'Limited storage',
                '1 user',
                'No support',
            ],
        },
        {
            name: 'Pro',
            price: 29,
            annualPrice: 290,
            features: [
                'All basic features',
                'Unlimited storage',
                '5 users',
                'Priority support',
                'Custom branding',
            ],
        },
        {
            name: 'Enterprise',
            price: 99,
            annualPrice: 990,
            features: [
                'All pro features',
                'Dedicated account manager',
                'Custom API access',
                'Advanced analytics',
            ],
        },
    ];

    const [isAnnual, setIsAnnual] = React.useState(false);

    return (
        <section className="py-16 max-w-7xl mx-auto">
            <motion.h2
                className="text-3xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                Pricing Plans
            </motion.h2>
            <div className="flex items-center space-x-2 mb-8">
                <Switch
                    id="annual-billing"
                    checked={isAnnual}
                    onChange={() => setIsAnnual(!isAnnual)} // This is the fix - make sure to toggle the state on change
                />
                <label htmlFor="annual-billing" className="text-gray-600 font-medium">
                    {isAnnual ? 'Annual' : 'Monthly'} Billing
                </label>
            </div>
            <motion.div
                className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        className="rounded-lg shadow-md border p-6 hover:shadow-yellow-500 duration-300"
                        transition={{ duration: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                        <div className="text-4xl font-bold mb-4">
                            ${isAnnual ? plan.annualPrice : plan.price}/
                            {isAnnual ? 'year' : 'month'}
                            {isAnnual && plan.annualPrice > 0 && (
                                <span className="text-gray-500 font-medium ml-2">
                                    (Save {Math.round(((plan.annualPrice - plan.price * 12) / plan.annualPrice) * 100)}%)
                                </span>
                            )}
                        </div>
                        <ul>
                            {plan.features.map((feature, i) => (
                                <li key={i}>
                                    <span className="inline-block mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-4 w-full">Choose Plan</Button>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
```
"use client";

import Stars from '@/components/effects/stars';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import UserInsertHandler from '@/lib/helpers/user.insert.handler';
import { SignedIn } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SignedIn>
        <UserInsertHandler /> {/* Include the UserInsertHandler here */}
      </SignedIn>

      <Navbar />
      <div className='relative flex flex-col items-center justify-start h-fit'>
        <Stars />
        <Badge className='mb-5 p-1.5 text-xs rounded-full mt-24 relative z-10'>
          Get your 5% discount today
        </Badge>
        <h1 className={`text-6xl lg:text-[84px] font-bold transition-opacity duration-700 relative z-10 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          TYPE <span className='text-rose-500'>VIII</span>
        </h1>
        <div className="relative z-10 text-center">Kickstart your application with TYPE VIII SAAS builder boilerplate.</div>
        <Button className='mt-8 relative z-10'>Get started for free</Button>
      </div>
      <Pricing />
    </>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: 0,
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
      features: [
        'All pro features',
        'Dedicated account manager',
        'Custom API access',
        'Advanced analytics',
      ],
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="rounded-lg shadow-md bg-white p-6">
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
            <div className="text-4xl font-bold mb-4">${plan.price}/month</div>
            <ul className="list-disc pl-6">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Button className="mt-4 w-full">Choose Plan</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;

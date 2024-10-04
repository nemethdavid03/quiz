"use client";

import Stars from '@/components/effects/stars';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import UserInsertHandler from '@/lib/helpers/user.insert.handler';
import { SignedIn } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
        <motion.h1
          className={`text-6xl lg:text-[84px] font-bold transition-opacity duration-700 relative z-10 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          TYPE <span className='text-rose-500'>VIII</span>
        </motion.h1>
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
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Pricing Plans
      </motion.h2>
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="rounded-lg shadow-md bg-white p-6"
            // whileHover={{ scale: 1.05 }} // Removed scaling from the card
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
            <div className="text-4xl font-bold mb-4">${plan.price}/month</div>
            <ul className="list-disc pl-6">
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

export default HomePage;
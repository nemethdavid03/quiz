"use client";

import Stars from '@/components/effects/stars';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import UserInsertHandler from '@/lib/helpers/user.insert.handler';
import { SignedIn } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Pricing } from '@/components/Pricing';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SignedIn>
        <UserInsertHandler />
      </SignedIn>

      <Navbar />
      <div className='relative flex flex-col items-center justify-start h-fit py-24'>
        <Stars />
        <motion.h1
          className={`text-6xl lg:text-[84px] font-bold transition-opacity duration-700 relative z-10 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          TYPE <span className='text-rose-500'>VIII</span>
        </motion.h1>
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Kickstart your application with TYPE VIII SAAS builder boilerplate.
        </motion.div>
        <motion.div
          className='mt-8 relative z-10'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button>Get started for free</Button>
        </motion.div>
      </div>
      <div className='bg-gray-100 py-24'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center justify-center gap-8'>
            <h2 className='text-3xl font-bold text-gray-800'>Website Preview</h2>
            <img src='/images/website-preview.png' alt='Website Preview' className='rounded-lg shadow-lg' />
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-gray-800'>Start Building Your Dream Website Today</h3>
              <p className='text-gray-600'>Get access to all the tools you need to create a stunning and functional website.</p>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
    </>
  );
};

export default HomePage;
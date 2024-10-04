"use client";

import Stars from '@/components/effects/stars';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
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
          TYPE <span className='text-rose-500'>khgkh</span>
        </h1>
        <div className="relative z-10 text-center">Kickstart your application with TYPEX SAAS builder boilerplate.</div>
        <Button className='mt-8 relative z-10'>Get started for free</Button>
      </div>
      {/* <Pricing /> */}
    </>
  );
};

export default HomePage;

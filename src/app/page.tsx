"use client";

import Stars from '@/components/effects/stars';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import UserInsertHandler from '@/lib/helpers/user.insert.handler';
import { SignedIn } from '@clerk/nextjs';
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pricing } from '@/components/Pricing';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsContainerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonialVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const testimonialItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleTestimonialsScroll = () => {
    const containerTop = testimonialsContainerRef.current.offsetTop;
    const windowScroll = window.scrollY;

    if (windowScroll > containerTop - 500) {
      // Trigger the testimonial animation when user is near the section
      testimonialsContainerRef.current.classList.add("animate-in");
    } else {
      testimonialsContainerRef.current.classList.remove("animate-in");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleTestimonialsScroll);

    return () => {
      window.removeEventListener("scroll", handleTestimonialsScroll);
    };
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

      <section ref={testimonialsContainerRef} className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What people are saying</h2>
        <AnimatePresence>
          <motion.div
            variants={testimonialVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in" // Add animate-in class for scroll-based animation
          >
            <div className="flex flex-col items-center justify-center">
              <motion.div
                variants={testimonialItemVariants}
                className="bg-white rounded-lg shadow-md p-6 w-full"
              >
                <p className="text-lg mb-4">"TYPE VIII has been a game-changer for our business. It's incredibly easy to use and has helped us build our SaaS application faster than ever before."</p>
                <p className="text-gray-500 font-bold">- John Doe, CEO of Acme Corp.</p>
              </motion.div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <motion.div
                variants={testimonialItemVariants}
                className="bg-white rounded-lg shadow-md p-6 w-full"
              >
                <p className="text-lg mb-4">"The flexibility and scalability of TYPE VIII are unmatched. We've been able to easily adapt our application to meet our evolving needs."</p>
                <p className="text-gray-500 font-bold">- Jane Smith, Founder of XYZ Technologies.</p>
              </motion.div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <motion.div
                variants={testimonialItemVariants}
                className="bg-white rounded-lg shadow-md p-6 w-full"
              >
                <p className="text-lg mb-4">"We've seen a significant increase in user engagement since we switched to TYPE VIII. It's truly a user-friendly platform."</p>
                <p className="text-gray-500 font-bold">- Mark Johnson, Marketing Manager at ABC Solutions.</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
      <Pricing />
    </>
  );
};

export default HomePage;
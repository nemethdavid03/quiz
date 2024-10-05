import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const StartupTemplate = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="relative w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-md"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.h1
          className="text-3xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to Our Startup
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Revolutionizing the way we [your industry/solution].
        </motion.p>
        <motion.button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default StartupTemplate;
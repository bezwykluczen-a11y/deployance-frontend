"use client";
import React from 'react';
import { company_logos } from '../assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';

const TrustedBy = () => {
  const logoVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }} 
      className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80 mt-10'
    >
      <motion.h3 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        viewport={{ once: true }} 
        className='font-semibold text-center'
      >
        Używamy technologii takiej jak:
      </motion.h3>
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        transition={{ staggerChildren: 0.1 }} 
        viewport={{ once: true }} 
        className='flex items-center justify-center flex-wrap gap-8 sm:gap-12 m-4 w-full max-w-5xl'
      >
        {company_logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={logoVariants} 
            transition={{ duration: 0.4 }}
          >
            {/* Swapped to Next.js Image */}
            <Image 
              src={logo} 
              alt={`Client logo ${index + 1}`} 
              width={120} // Approximate width of a standard logo
              height={32}  // Matches the h-8 (32px) you had in your classes
              className='object-contain dark:drop-shadow-xl opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0' 
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default TrustedBy;

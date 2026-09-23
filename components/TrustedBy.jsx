"use client";
import React from 'react';
import { company_logos } from '../assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';


const logoNames = [
  'Node.js',
  'Next.js',
  'React',
  'Tailwind CSS',
  'Flutter',
  'Supabase',
];


const TrustedBy = () => {
  const logoVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const logoClasses = [
    'h-8 sm:h-10',  // Node.js
    'h-9 sm:h-10',   // Next.js
    'h-10 sm:h-12',  // React — większy margines wewnątrz logo
    'h-12 sm:h-13',   // Tailwind CSS
    'h-5 sm:h-7',  // Flutter
    'h-6 sm:h-8',  // Supabase
  ];


  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='mt-10 flex flex-col items-center gap-10 px-4 text-gray-700 sm:px-12 lg:px-24 xl:px-40 dark:text-white/80'
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center font-semibold'
      >
        Używamy technologii takich jak:
      </motion.h3>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className='m-4 flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-5 sm:gap-x-6 md:flex-nowrap md:gap-x-3 lg:gap-x-6'
      >
        {company_logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={logoVariants}
            transition={{ duration: 0.4 }}
            className='flex h-12 w-36 shrink-0 items-center justify-center sm:h-14 sm:w-40'
          >
            <Image
              src={logo}
              alt={logoNames[index] ?? `Technologia ${index + 1}`}
              className={`${logoClasses[index] ?? 'h-8 sm:h-10'} w-auto object-contain grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100 dark:drop-shadow-xl`}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};


export default TrustedBy;
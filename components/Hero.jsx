"use client";
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import assets from '../assets/assets';

// Create a motion-enabled version of the Next.js Image component
const MotionImage = motion.create(Image);

const Hero = () => {
  return (
    <section id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white relative'>
      
    

      <motion.h1 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.8 }} 
        viewport={{ once: true }} 
        className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'
      >
        Technologia, która przyspiesza <span className='bg-gradient-to-r from-[#5044E5] to-[#48CEEA] bg-clip-text text-transparent'>rozwój Twojej</span> firmy.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 1 }} 
        viewport={{ once: true }} 
        className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-[80%] sm:max-w-lg pb-3'
      >
        Usprawniamy procesy, by budować trwałą przewagę rynkową.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 1 }} 
        viewport={{ once: true }} 
        className='relative w-full flex justify-center mt-10'
      >
        {/* Swapped to standard Image */}
        <Image 
          src={assets.hero_img} 
          alt="Hero" 
          width={1152}
          height={600}
          className='w-full max-w-6xl relative z-10 object-contain' 
          priority 
        />
        <Image 
          src={assets.bgImage1} 
          alt="Background" 
          width={800}
          height={800}
          className='absolute -top-40 -right-40 sm:-top-[100px] sm:-right-[70px] -z-[1] dark:hidden pointer-events-none object-contain' 
          priority
        />
      </motion.div>
    </section>
  )
}

export default Hero;

"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';


const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const divRef = useRef(null);


  const handleMouseMove = (e) => {
    const bounds = divRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };


  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: index * 0.2 }} 
      viewport={{ once: true }} 
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 cursor-default" 
      onMouseEnter={() => setVisible(true)} 
      onMouseLeave={() => setVisible(false)} 
      onMouseMove={handleMouseMove} 
      ref={divRef}
    >
      <div 
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} 
        style={{ top: position.y - 150, left: position.x - 150 }} 
      />
      
      <div className="flex items-center gap-10 p-8 hover:p-7 hover:m-1 transition-all duration-300 rounded-[10px] bg-white dark:bg-gray-900 z-10 relative h-full">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full shrink-0 relative w-20 h-20 sm:w-24 sm:h-24 m-2 overflow-hidden">
          {/* Swapped to Next.js Image component */}
          <Image 
            src={service.icon} 
            alt={service.title} 
            fill
            sizes="96px"
            className="object-contain bg-white dark:bg-gray-900 p-4" // Added padding so the icon doesn't touch the edges of the circle
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-lg">{service.title}</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};


export default ServiceCard;

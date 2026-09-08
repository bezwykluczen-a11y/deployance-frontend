"use client";
import React from 'react';
import Title from './Title';
import assets from '../assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image'; // Import Next.js Image

const OurWork = () => {
  const workData = [
    { title: 'System rozliczania kierowców Bolt', description: 'Profesjonalna aplikacja webowa usprawniająca zarządzanie flotami pojazdów, rozliczanie kierowców w aplikacjach.', image: assets.work_mobile_app },
    { title: 'Carrent', description: 'Innowacyjna platforma do obsługi wypożyczalni pojazdów. System pozwala na łatwe zarządzanie rezerwacjami, kontem klienta. ', image: assets.work_dashboard_management },
    { title: 'Platforma SEO', description: 'Platforma SEO służąca do optymalizacji stron internetowych pod kątem wyświetleń w organicznych wynikach wyszukiwania.', image: assets.work_fitness_app }
  ];

  return (
    <motion.section 
      id='our-work' 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5, staggerChildren: 0.2 }} 
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title title='Projekty, które świadczą o naszym profesjonalizmie' />
      
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {workData.map((work, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.4, delay: index * 0.1 }} 
            className='hover:scale-105 duration-500 transition-all cursor-pointer flex flex-col' // added flex flex-col to keep heights consistent
          >
            {/* Replaced <img> with Next.js <Image /> */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-3">
              <Image 
                src={work.image} 
                alt={work.title} 
                fill
                className='object-cover'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Helps Next.js serve the right image size
              />
            </div>
            
            <h3 className='mb-2 text-lg font-semibold'>{work.title}</h3>
            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default OurWork;



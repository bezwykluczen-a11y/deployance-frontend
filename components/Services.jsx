"use client";
import React from 'react';
import Title from './Title';
import ServiceCard from './ServiceCard';
import { serviceData } from '../assets/assets';
import { motion } from 'motion/react';

const Services = () => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-7">
        <Title
          title="Nasza Oferta"
          desc="Tworzymy i wdrażamy oprogramowanie na wiele platform — od aplikacji mobilnych na Androida i iOS, przez rozwiązania webowe, aż po systemy desktopowe. Łączymy nowoczesne technologie z wnikliwą analizą rynku i potrzeb użytkowników."
        />

        <div className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-6">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
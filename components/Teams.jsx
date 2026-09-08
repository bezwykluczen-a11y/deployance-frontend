"use client";
import React from 'react';
import Title from './Title';
import { motion } from 'motion/react';

const Teams = () => {
  return (
    <motion.section
      id="team"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-gray-800 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl border border-gray-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm shadow-sm px-6 py-10 sm:px-10 md:px-14 md:py-14">
          <Title
            title="Tworzymy cyfrowe rozwiązania, które realnie rozwijają Twój biznes."
            desc=""
          />

          <div className="mt-6 max-w-3xl mx-auto text-center text-base sm:text-lg leading-8 sm:leading-9 text-gray-600 dark:text-gray-300 space-y-5">
            <p>
              Każdy projekt rozpoczynamy od dokładnego poznania procesów, celów oraz wyzwań biznesowych klienta.
              Analizujemy dostępne możliwości i rekomendujemy rozwiązania, które najlepiej odpowiadają konkretnym potrzebom organizacji.
            </p>

            <p>
              Kierujemy się pragmatycznym podejściem – jeśli istnieje bardziej efektywna lub ekonomiczna alternatywa
              niż tworzenie dedykowanego systemu, otwarcie ją rekomendujemy.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Teams;
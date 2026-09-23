'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

// Wspólny szablon podstron usługowych — treść przychodzi z propsów
export default function ServiceView({ kicker, title, highlight, lead, features, cta }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          {kicker}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          {title}{' '}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#48CEEA] bg-clip-text text-transparent">
            {highlight}
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{lead}</p>
      </motion.header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
            className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/5"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-14 rounded-2xl bg-gradient-to-r from-[#5044E5] to-[#48CEEA] p-8 text-center sm:p-12"
      >
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{cta.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">{cta.text}</p>
        <Link
          href="/#contact-us"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-transform hover:scale-105"
        >
          Skontaktuj się z nami
        </Link>
      </motion.div>
    </section>
  );
}

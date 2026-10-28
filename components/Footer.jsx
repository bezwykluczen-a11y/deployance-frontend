"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import assets from '../assets/assets';
import { motion } from 'motion/react';

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-12 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-12 lg:items-start">
        {/* Logo + krótki opis */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <Link href="/">
            {mounted && (
              <img
                src={(resolvedTheme === 'dark' ? assets.logo_dark : assets.logo).src}
                className="w-32 sm:w-44"
                alt="Deployance Logo"
              />
            )}
          </Link>
          <p className="max-w-md text-sm text-gray-700 dark:text-gray-400">
            Tworzymy nowoczesne aplikacje webowe i mobilne, które pomagają firmom rosnąć.
          </p>
        </motion.div>

        {/* Kontakt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-3 text-sm text-gray-700 dark:text-gray-400"
        >
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Kontakt
          </h3>
          <p>ul. Św. Mikołaja 8/11, 50-125 Wrocław</p>
          <p>
            <a href="tel:+48536062842" className="hover:text-primary">
              +48 536 062 842
            </a>
          </p>
          <p>
            <a href="mailto:kontakt@deployance.pl" className="hover:text-primary">
              kontakt@deployance.pl
            </a>
          </p>
        </motion.div>

        {/* Nawigacja */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-3 text-sm text-gray-700 dark:text-gray-400"
        >
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Menu
          </h3>
          <ul className="space-y-2">
            <li><Link className="hover:text-primary" href="/#hero">O Nas</Link></li>
            <li><Link className="hover:text-primary" href="/#services">Oferta</Link></li>
            <li><Link className="hover:text-primary" href="/blog">Blog</Link></li>
            <li><Link className="hover:text-primary" href="/#contact-us">Kontakt</Link></li>
          </ul>
        </motion.div>
      </div>

      {/* Social media + copyright */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col sm:flex-row items-center sm:justify-between gap-4 border-t border-gray-200 dark:border-white/10 pt-6 pb-6 text-sm text-gray-500"
      >
        <p>Copyright 2026 Deployance - All Rights Reserved</p>
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src={assets.facebook_icon.src} alt="" className="h-5 w-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src={assets.twitter_icon.src} alt="" className="h-5 w-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={assets.instagram_icon.src} alt="" className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={assets.linkedin_icon.src} alt="" className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
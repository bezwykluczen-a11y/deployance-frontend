"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import assets from '../assets/assets';
import { motion } from 'motion/react';

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we know it's safe to show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          viewport={{ once: true }} 
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <Link href="/">
            {/* If not mounted, show nothing (or a default logo) to prevent hydration error */}
            {mounted && (
              <img 
              src={(resolvedTheme === 'dark' ? assets.logo_dark : assets.logo).src}
                className="w-32 sm:w-44" 
                alt="Deployance Logo" 
              />
            )}
          </Link>
          <p className="max-w-md">Skontaktuj się z nami:
            +48 536 062 842
            ul. Św. Mikołaja 8/11 50-125 Wrocław
          </p>
          <ul className="flex gap-8">
            <li><Link className="hover:text-primary" href="/#hero">O Nas</Link></li>
            <li><Link className="hover:text-primary" href="/#services">Oferta</Link></li>
            <li><Link className="hover:text-primary" href="/blog">Blog</Link></li>
            <li><Link className="hover:text-primary" href="/#contact-us">Kontakt</Link></li>
          </ul>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 30 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }} 
        viewport={{ once: true }} 
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap mt-8"
      >
        <p>Copyright 2026 Deployance - All Rights Reserved</p>
        <div className="flex items-center justify-between gap-4">
          <img src={assets.facebook_icon.src} alt="Facebook" />
          <img src={assets.twitter_icon.src} alt="Twitter" />
          <img src={assets.instagram_icon.src} alt="Instagram" />
          <img src={assets.linkedin_icon.src} alt="LinkedIn" />
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

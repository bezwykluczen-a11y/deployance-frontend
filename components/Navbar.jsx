"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from 'motion/react';


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  // Zapobiega błędowi hydratacji — logo i ikona menu zależą od motywu
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-24 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'
    >
      <Link href="/">
        {mounted && (
          <img
            src={(resolvedTheme === 'dark' ? assets.logo_dark : assets.logo).src}
            className='w-32 sm:w-40'
            alt='Deployance Logo'
          />
        )}
      </Link>

      <div className={`text-gray-700 dark:text-white sm:text-sm max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all ${!sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"}`}>
        <img
          src={assets.close_icon.src}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />
        <Link href="/#hero" className='sm:hover:border-b border-primary' onClick={() => setSidebarOpen(false)}>O Nas</Link>
        <Link href="/#services" className='sm:hover:border-b border-primary' onClick={() => setSidebarOpen(false)}>Oferta</Link>
        <Link href="/blog" className='sm:hover:border-b border-primary' onClick={() => setSidebarOpen(false)}>Blog</Link>
        <Link href="/#contact-us" className='sm:hover:border-b border-primary' onClick={() => setSidebarOpen(false)}>Kontakt</Link>
      </div>


      <div className='flex items-center gap-2 sm:gap-4'>
        <ThemeToggleBtn />

        {mounted && (
          <img
            src={(resolvedTheme === 'dark' ? assets.menu_icon_dark : assets.menu_icon).src}
            alt="Menu"
            onClick={() => setSidebarOpen(true)}
            className='w-8 sm:hidden cursor-pointer'
          />
        )}

        <Link href="/#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all'>
          Skontaktuj się z nami <img src={assets.arrow_icon.src} width={14} alt="Arrow" />
        </Link>
      </div>
    </motion.nav>
  );
}


export default Navbar;

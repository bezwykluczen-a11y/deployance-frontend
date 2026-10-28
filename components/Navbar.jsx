"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from 'motion/react';


const offerLinks = [
  { href: '/aplikacje-webowe', label: 'Aplikacje webowe' },
  { href: '/aplikacje-mobilne', label: 'Aplikacje mobilne' },
  { href: '/saas', label: 'SaaS' },
  { href: '/dedykowane-oprogramowanie', label: 'Dedykowane oprogramowanie' },
  { href: '/mvp', label: 'Tworzenie MVP' },
];

// Strzałka rozwijanego menu (obraca się przy otwarciu)
const Chevron = ({ open }) => (
  <svg
    className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
    viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
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

      <div className={`text-gray-700 dark:text-white sm:text-sm max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all ${!sidebarOpen ? "max-sm:w-0 max-sm:overflow-hidden" : "max-sm:w-60 max-sm:pl-10"}`}>
        <img
          src={assets.close_icon.src}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Oferta — rozwijane menu; desktop: hover, mobile: kliknięcie */}
        <div
          className="sm:relative"
          onMouseEnter={() => setOfferOpen(true)}
          onMouseLeave={() => setOfferOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOfferOpen(!offerOpen)}
            className='flex items-center gap-1 sm:hover:border-b border-primary cursor-pointer'
          >
            Oferta
            <Chevron open={offerOpen} />
          </button>

          <div className={`${offerOpen ? 'flex' : 'hidden'} flex-col gap-2 max-sm:mt-3 max-sm:pl-4 max-sm:text-white/80
            sm:absolute sm:top-full sm:left-0 sm:pt-2 sm:w-64 sm:gap-1 sm:z-30`}>
            <div className='flex flex-col gap-1 sm:rounded-xl sm:border sm:border-gray-200 sm:bg-white sm:p-3 sm:shadow-lg sm:dark:border-white/10 sm:dark:bg-gray-900'>
              {offerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => { setOfferOpen(false); setSidebarOpen(false); }}
                  className='sm:rounded-lg sm:px-3 sm:py-2 sm:hover:bg-indigo-50 sm:dark:hover:bg-white/10 sm:hover:text-indigo-700 sm:dark:hover:text-indigo-300 transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link href="/#hero" className='sm:hover:border-b border-primary' onClick={() => setSidebarOpen(false)}>O Nas</Link>
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

"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image'; // Optional, but good practice since we used it everywhere else
import assets from '../assets/assets';

const ThemeToggleBtn = () => {
  // Grab the theme states directly from next-themes
  const { theme, setTheme, systemTheme } = useTheme();
  
  // Mounted state to prevent hydration errors (just like Footer and Navbar)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a skeleton/placeholder while server rendering to prevent layout shift
  if (!mounted) {
    return <div className="w-11 h-11 p-1.5 border border-transparent rounded-full" />;
  }

  // Determine if we should show the dark or light icon
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-1.5 border border-gray-500 rounded-full hover:scale-105 transition-all flex items-center justify-center" 
    >
      <Image 
        src={currentTheme === 'dark' ? assets.sun_icon : assets.moon_icon}
        className="w-8 h-8 object-contain"
        width={32}
        height={32}
        alt="Theme Toggle button" 
        priority
      />
    </button> 
  );
}

export default ThemeToggleBtn;

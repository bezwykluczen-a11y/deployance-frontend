"use client";
import React, { useRef, useEffect, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  
  // Track if we are on a desktop device
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable the cursor if the screen is wider than 768px
    if (window.innerWidth < 768) {
      return;
    }
    
    // We are on desktop, so render the cursor!
    setIsDesktop(true);

    const handleMouseMove = (e) => { 
      mouse.current.x = e.clientX; 
      mouse.current.y = e.clientY; 
    };
    
    document.addEventListener('mousemove', handleMouseMove);
  
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;    
      
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
      if (outlineRef.current) outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // If it's a mobile device (or still server-rendering), render nothing.
  if (!isDesktop) return null;

  return (
    <div className="hidden md:block">
      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]' style={{ transition: 'transform 0.1s ease-out' }} />
      <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]' />
    </div>
  );
};

export default CustomCursor;

"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Title from './Title';
import assets from '../assets/assets';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "7af87fb3-36d7-4d02-8d87-5541d59967d1");
    try {
      const response = await fetch("https://api.w3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        toast.success('Thank you for your submission!');      
        event.target.reset();
      } else {
        toast.error(data.message);
      } 
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }} id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Wypełnij formularz i porozmawiajmy' desc='Porozmawiajmy o twoim projekcie i zacznijnmy go razem budować.' />
      <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div>
           <p className='mb-2 text-sm font-medium'>Imię i nazwisko</p>
           <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
             <img src={assets.person_icon} alt="Person" />
             <input name='Imię i nazwisko' type="text" placeholder='Wypełnij pole' className='w-full p-3 text-sm outline-none bg-transparent' required/>
           </div>
        </div>
        <div>
           <p className='mb-2 text-sm font-medium'>Adres e-mail</p>
           <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
             <img src={assets.email_icon} alt="Email" />
             <input name="email" type="email" placeholder='Wypełnij pole' className='w-full p-3 text-sm outline-none bg-transparent' required/>
           </div> 
        </div>
        <div className='sm:col-span-2'>
           <p className='mb-2 text-sm font-medium'>Wiadomość</p>
           <textarea name="message" rows={8} placeholder='Wypełnij pole' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent' required />
        </div>
        <button type="submit" className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all sm:col-span-2'>
           Wyślij <img src={assets.arrow_icon} alt="Arrow" className='w-4' />
        </button>
      </motion.form>
    </motion.section>
  );
}
export default ContactUs;

"use client"
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { FaGithubSquare } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { sendMail } from '@/actions/sendMail';
import SubmitBtn from './submitBtn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView("Contact",0.75);
  return (
    <motion.section 
      ref={ref}
      id="contact" 
      className='mb-20 scroll-mt-28 sm:mb-24 w-[min(100%,38rem)] text-center'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      viewport={{once:true}}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a className='underline' href="mailto:krishnpratap975@gmail.com">krishnpratap975@gmail.com</a> .</p>
      {/* <form className='mt-10 flex flex-col dark:text-black' action={async (formData)=>{
        const {data,error} = await sendMail(formData);
        if(error){
          toast.error('Error sending email!');
          return;
        }
        toast.success("Email sent successfully!")
      }}>
        <input 
          type="email" 
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
          placeholder='Your email'
          name='senderEmail' 
          required
          maxLength={500}
        />
        <textarea 
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
          placeholder='Your message' 
          name='senderMessage'
          required
        />
        <SubmitBtn />
      </form> */}


<a href=" https://www.linkedin.com/in/krishn-pratap-singh" target='_blank' className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition border border-black/10 dark:bg-white/10 dark:text-white/60'>
          <BsLinkedin/>
        </a>
        <a href="https://t.me/thakur_kp9" target='_blank' className='bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition border border-black/10 dark:bg-white/10 dark:text-white/60'>
          <FaTelegram/>
        </a>
    </motion.section>
  )
  
 
}

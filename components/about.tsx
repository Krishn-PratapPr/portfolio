"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView("About",0.75);

  return (
    <motion.section 
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.175}}
      id='about'
    >
      <SectionHeading >About Me</SectionHeading>
      <p className='mb-3'>
        After completing Intermediate in <span className="font-medium">PCM</span>. I decided to study further in technology, and enrolled in <span className="font-medium">Bachelor of Engineering, with Computer Science Engineering</span>. I&apos;m passionate about programming and love to code. 
      </p>
      <p>
        When I&apos;m not coding, I enjoy playing games, watching movies and listening music. I also enjoy <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  )
}

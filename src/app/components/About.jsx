"use client";
import React from 'react'
import {Redressed} from 'next/font/google'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Image3 from "./assest/banner2.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const redressed = Redressed({
    subsets:['latin'],
    variable:"--font-redressed",
    weight: '400'
  })
export const About = () => {
  return (
    <section className="min-h-[85vh] lg-min-h-[78vh] flex">
    <motion.div
    id='about'
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
    className='container mx-auto'>
  <div className='flex flex-col gap-y-10 lg:gap-y-10 lg:flex-row lg:gap-x-12 py-36'>
  <div className='flex-1 text-center font-secondary lg:text-left'>
    <div className={redressed.className}>
    <div className='className="text-[28px] font-bold leading-[0.8] lg:text-[128px]"'>
    <TypeAnimation
    sequence={[
      'My Background',
      1000, 
      'About Me',
      1000, 
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '28px',}}
    repeat={Infinity}
  />
  </div>
    </div>
   <p className='mt-5 text-[12px] lg:text-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
   </div>
   <div className='rounded-md lg:mr-14 w-48 h-52 lg:w-auto lg:h-auto ml-20'>

  <Image
  src={Image3}
  width={400}
  height={549}
  />
  </div>
  </div>
   </motion.div>
   </section>
  )
}

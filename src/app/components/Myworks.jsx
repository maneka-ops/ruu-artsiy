"use client";
import React from 'react'
import {Redressed} from 'next/font/google'
import{ Gallery } from './Gallery'
import { motion } from "framer-motion";



const redressed = Redressed({
    subsets:['latin'],
    variable:"--font-redressed",
    weight: '400'
  })

export const Myworks = ({data}) => {
  return (
    <motion.div   >
    <div id='myworks' className={redressed.className}>
    <Gallery/>
        </div>
    </motion.div>
  )
}

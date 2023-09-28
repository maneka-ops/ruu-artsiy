"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "next/image";
import Image2 from "./assest/banner.jpg";
import 'fa-icons';
import {Redressed} from 'next/font/google'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const redressed = Redressed({
    subsets:['latin'],
    variable:"--font-redressed",
    weight: '400'
  })

export const Banner = () => {
  return (
    <section className="min-h-[85vh] lg-min-h-[78vh] flex">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-10 lg:gap-y-10 lg:flex-row lg:gap-x-12 py-36 ">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[24px]  font-bold leading-[0.8] lg:text-[64px]"
            >
              HI I M
            </motion.h1>
            <motion.span
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[24px] font-bold lg:text-[64px] pl-28 py-11"
            >
              WASITHA SADESA,
            </motion.span>
            <motion.div className={redressed.className}
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}>
            <p className="text-[12px] lg:text-[20px]">lorem impus</p>
            <div className=" p-10 text-2xl">
            <InstagramIcon className=""/>
            <FacebookIcon className="ml-5"/>
            <WhatsAppIcon className="ml-5"/>
            </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            className="lg:mr-40 rounded-md w-48 h-52 lg:w-auto lg:h-auto ml-20"
          >
            <Image
              src={Image2}
              className="rounded-md"
              width={500}
              height={749}
              alt="Picture of the author"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

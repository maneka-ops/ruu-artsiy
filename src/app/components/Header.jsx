import Link from 'next/link'
import React from 'react'
import {Redressed} from 'next/font/google'
const redressed = Redressed({
    subsets:['latin'],
    variable:"--font-redressed",
    weight: '400'
  })

export const Header = () => {
  return (
   <header className='py-8 bg-slate-100 overscroll-contain text-[12px] lg:text[36px]  w-full h-full overflow-hidden'>
   <div className='container mx-auto'>
   <div className='flex items-center  font-medium'> 
   <Link href='/' className=' lg:ml8 ml-4'>Home</Link>
   <Link href='#about'className='lg:ml-8 ml-4'>About</Link>
   <Link href='#myworks'className='lg:ml-8 ml-4'>My Works</Link>
   <div className={redressed.className}>
   <h1 className='ml-[50px] font-bold text-sm lg:text-5xl lg:ml-[500px]'>Ru Artsy</h1>
   </div>
   <Link href='#contactus' className='ml-[40px] lg:ml-[400px]'>Contact Us</Link>
   </div>
   </div>
   </header>
  )
}

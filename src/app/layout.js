'use client'

import Footer from './components/Footer'
import { Header } from './components/Header'
import './globals.css'
import { Inter,Italiana  } from 'next/font/google'

const italiana = Italiana({
  subsets:['latin'],
  variable:"--font-italiana",
  weight: '400'
})


export const  metadata  = {
  icons:{
    icon:['/favicon.ico?v=4'],
    manifest:'/site.webmanifest'
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <title>ruu-artsy</title>
    </head>
      <body className={italiana.className}>
      <Header/>
      {children}
      </body>
    </html>
  )
}

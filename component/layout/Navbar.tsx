'use client'
import React, { useState } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'
import Image from 'next/image'


function Navigation() {
  return (
    <ul className='nav-ul flex flex-col gap-6'>
      <li className='nav-li'>
        <Link className='nav-link' href={"/"}>
          Home
        </Link>
      </li>
      <li className='nav-li'>
        <Link className='nav-link' href={"/about"}>
          About
        </Link>
      </li>
      <li className='nav-li'>
        <Link className='nav-link' href={"/projects"}>
          Projects
        </Link>
      </li>
      <li className='nav-li'>
        <Link className='nav-link' href={"/skills"}>
          Skills
        </Link>
      </li>
      <li className='nav-li'>
        <Link className='nav-link' href={"/contact"}>
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default function Navbar() {
  const[isOpen, setIsOpen] = useState(false);
  return (
    <div className='fixed w-full inset-x-0 z-20 backdrop-blur-lg block md:hidden'>
      <div className='mx-auto max-w-7xl'>
        <div  data-theme="dark" className='flex items-center justify-between py-2 bg-base-300'>
          <Link href={"/"} className='text-white font-bold text-lg transition-colors hover:text-primary pl-2'>Trian</Link>
          <button onClick={() => setIsOpen(!isOpen)} className='px-2'>
            <Image src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} width={24} height={24} alt='toggle'/>
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          className='block overflow-hidden text-center pt-10'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0}}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.5 }}
        >
        <nav className='pb-5'>
          <Navigation />
        </nav>
      </motion.div>)}
    </div>
  )
}

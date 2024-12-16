'client only'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import Navbar from './components/Landing/Navbar'
import Hero from './components/Landing/Hero'

const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <UserButton/> */}
    </>
  )
}

export default page
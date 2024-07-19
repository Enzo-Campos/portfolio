import React from 'react'
import SiteBox from '@/components/siteBox'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { Poppins } from 'next/font/google'
import '../src/app/globals.css'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['200','800', '700', '400']
 })

export default function Portfolio() {
  return (
             
    <div className={poppins.className}>
      <Header />
      <Breadcrumb />
      <Footer />
    </div>
  )
}

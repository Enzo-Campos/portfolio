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
      <div className='xl:grid xl:grid-cols-3 xl:max-w-[70vw] xl:m-auto xl:gap-x-[20px]
      lg:grid lg:grid-cols-2 lg:max-w-[20vw] lg:m-auto lg:gap-x-[20px]'>
        <SiteBox title="Site Institucional - FisioClinic Santos" subtitle="Desenvolvimento em wordpress." imageAlias='fisioclinic' siteLink='https://fisioclinicsantos.com.br' />
        <SiteBox title="Site Institucional - Smartway" subtitle="Desenvolvimento em wordpress." imageAlias='smartway' siteLink='https://smartwaycs.com.br' />
        <SiteBox title="Site Institucional - Ao Pharmacêutico" subtitle="Desenvolvimento em wordpress." imageAlias='campinas' siteLink='https://campinas-aopharmaceutico.com.br' />
        <SiteBox title="Site Institucional - Relive Club" subtitle="Desenvolvimento em wordpress." imageAlias='reliveclub' siteLink='https://reliveclub.com.br' />
        <SiteBox title="Site Institucional - Bem Barato Farma" subtitle="Desenvolvimento em wordpress." imageAlias='bembarato' siteLink='https://bembaratofarma.com.br' />
        <SiteBox title="Site Institucional - Velis Contabil" subtitle="Desenvolvimento em Wordpress." imageAlias='velis' siteLink='https://veliscontabil.com.br' />
        <SiteBox title="Site Institucional - Coocerqui Drogaria" subtitle="Desenvolvimento em wordpress." imageAlias='coocerqui' siteLink='https://coocerquidrogaria.com.br' />
      </div>
      <Footer />
    </div>
  )
}

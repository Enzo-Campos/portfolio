import React from 'react'
import { SectionHero } from '@/components/SectionHero'
import SiteBox from '@/components/siteBox'
import Tecnologias from '@/components/Tecnologias'
import AboutMe from '@/components/AboutMe'

export default function Home() {
  return (
    <div>
      <SectionHero />
      <div className='flex text-white flex-col items-center text-center justify-around h-[120px] px-[15px]'>
        <h2 className='text-[1.5rem] font-light' id='portifolio'><strong>Meus Projetos</strong> &lt;/&gt;</h2>
        <p className='text-[0.8rem] xl:text-[1rem] font-thin'>Alguns dos projetos e trabalhos que desenvolvi com a minha <strong>experiência em desenvolvimento WEB</strong></p>
      </div>
      <div className='xl:grid xl:grid-cols-3 xl:max-w-[70vw] xl:m-auto xl:gap-x-[20px]
      lg:grid lg:grid-cols-2 lg:max-w-[80vw] lg:m-auto lg:gap-x-[20px]'>
        <SiteBox title="Institucional - Smartway" subtitle="Soluções industriais." imageAlias='smartway' siteLink='https://smartwaycs.com.br' />
        <SiteBox title="Institucional - Relive Clinic" subtitle="Clínica de estética." imageAlias='relive clinic' siteLink='https://reliveclinic.com.br' />
        <SiteBox title="Institucional - TAED Arquitetura" subtitle="Escritório de Arquitetura" imageAlias='taed' siteLink='https://taedarquitetura.com.br' />
        <SiteBox title="Institucional - FisioClinic Santos" subtitle="Clínica de fisioterapia." imageAlias='fisioclinic' siteLink='https://fisioclinicsantos.com.br' />
        <SiteBox title="Institucional - Relive Club" subtitle="Clínica de estética." imageAlias='reliveclub' siteLink='https://reliveclub.com.br' />
        <SiteBox title="Institucional - Ao Pharmacêutico" subtitle="Farmácias de manipulação." imageAlias='campinas' siteLink='https://campinas-aopharmaceutico.com.br' />
        <SiteBox title="Institucional - Bem Barato Farma" subtitle="Rede de farmácias." imageAlias='bembarato' siteLink='https://bembaratofarma.com.br' />
        <SiteBox title="Institucional - Dra. Lory Silveira" subtitle="Clínica de estética." imageAlias='lory' siteLink='https://lorysilveira.com.br' />
        <SiteBox title="Institucional - Velis Contabil" subtitle="Escritório Contábil." imageAlias='velis' siteLink='https://veliscontabil.com.br' />
      </div>
      <AboutMe />
      <Tecnologias />
    </div>
  )
}

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
        <SiteBox title="Site Institucional - FisioClinic Santos" subtitle="Criação de layout e desenvolvimento em wordpress." imageAlias='fisioclinic' siteLink='https://fisioclinicsantos.com.br' />
        <SiteBox title="Site Institucional - Ao Pharmacêutico" subtitle="Desenvolvimento em wordpress." imageAlias='campinas' siteLink='https://campinas-aopharmaceutico.com.br' />
        <SiteBox title="Site Institucional - Bem Barato Farma" subtitle="Desenvolvimento em wordpress." imageAlias='bembarato' siteLink='https://bembaratofarma.com.br' />
        <SiteBox title="Site Institucional - Coocerqui Drogaria" subtitle="Desenvolvimento em wordpress." imageAlias='coocerqui' siteLink='https://coocerquidrogaria.com.br' />
        <SiteBox title="Site em Construção*" subtitle="Desenvolvimento em progresso." imageAlias='gastro' siteLink='#' />
        <SiteBox title="Site Institucional - MSG Contabilidade" subtitle="Desenvolvimento em wordpress." imageAlias='msgcont' siteLink='https://msgcont.com.br' />
      </div>
      <AboutMe />
      <Tecnologias />
    </div>
  )
}

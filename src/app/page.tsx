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
        <p className='text-[0.8rem] font-thin'>Alguns dos projetos e trabalhos que desenvolvi com a minha <strong>experiência em desenvolvimento WEB</strong></p>
      </div>
      <SiteBox title="Site Institucional - Fisioclinic Santos" subtitle="Criação do layout e desenvolvimento em wordpress." imageAlias='fisioclinic' siteLink='https://fisioclinicsantos.com.br' />
      <SiteBox title="Site Institucional - Bem Barato Farma" subtitle="Desenvolvimento em wordpress." imageAlias='bembarato' siteLink='https://bembaratofarma.com.br' />
      <SiteBox title="Site Institucional - Coocerqui Drogaria" subtitle="Desenvolvimento em wordpress." imageAlias='coocerqui' siteLink='https://coocerquidrogaria.com.br' />
      <SiteBox title="Site Institucional - MSG Contabilidade" subtitle="Desenvolvimento em wordpress." imageAlias='msgcont' siteLink='https://msgcont.com.br' />
      <AboutMe />
      <Tecnologias />
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import { SectionHero } from '@/components/SectionHero'
import SiteBox from '@/components/siteBox'

export default function Home() {
  return (
    <div>
      <SectionHero />
      <div className='flex text-white flex-col items-center text-center justify-around h-[120px] px-[15px]'>
        <h2 className='text-[1.5rem] font-light'><strong>Meus Projetos</strong> &lt;/&gt;</h2>
        <p className='text-[0.8rem] font-thin'>Alguns dos projetos e trabalhos que desenvolvi com a minha <strong>experiência em desenvolvimento WEB</strong></p>
      </div>
      <SiteBox title="Site Institucional - Fisioclinic Santos" subtitle="Desenvolvimento do layout e criação em wordpress" imageAlias='fisioclinic' />
      <SiteBox title="Site Institucional - Bem Barato Farma" subtitle="Desenvolvimento do layout e criação em wordpress" imageAlias='bembarato'/>
      <SiteBox title="Site Institucional - Coocerqui Drogaria" subtitle="Desenvolvimento do layout e criação em wordpress" imageAlias='coocerqui'/>
      <SiteBox title="Site Institucional - MSG Contabilidade" subtitle="Desenvolvimento do layout e criação em wordpress" imageAlias='msgcont'/>
      <div className='h-[2000px]'>.</div>
    </div>
  )
}

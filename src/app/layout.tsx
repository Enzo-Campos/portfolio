import React from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { SectionHero } from '@/components/SectionHero'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['200','800', '700', '400']
 })

export const metadata = {
  title: 'Enzo Campos - Desenvolvedor Web',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
        <SectionHero />
          {children}
        </body>
    </html>
  )
}

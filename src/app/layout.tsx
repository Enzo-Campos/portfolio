import React from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { SectionHero } from '@/components/SectionHero'
// Importe o tipo ReactNode do React
import { ReactNode } from 'react';

// Indique o tipo para a propriedade children
type RootLayoutProps = {
  children: ReactNode;
};

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['200','800', '700', '400']
 })

export const metadata = {
  title: 'Enzo Campos - Desenvolvedor Web',
  description: '',
}

export default function RootLayout({ children }: RootLayoutProps) {
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

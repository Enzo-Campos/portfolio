import React from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'


// Importe o tipo ReactNode do React
import { ReactNode } from 'react';
import Header from '@/components/header';

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
          {children}
        </body>
    </html>
  )
}

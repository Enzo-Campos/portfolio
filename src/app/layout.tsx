import React from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'


// Importe o tipo ReactNode do React
import { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';

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
  description: 'Especialista em Sites - Potencialize o alcance e influência da sua empresa online com qualidade, agilidade e zero preocupações.',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
          {children}
        <Footer />
        </body>
    </html>
  )
}

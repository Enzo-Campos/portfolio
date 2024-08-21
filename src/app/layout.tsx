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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WLC6D2X2');
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLC6D2X2"
        height="0" width="0"></iframe></noscript>
        <Header />
          {children}
        <Footer />
        </body>
    </html>
  )
}

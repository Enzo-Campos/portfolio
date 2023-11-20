import React from 'react';


export function Header() {
    return (
        <header className='w-full h-20 bg-primary-gray text-white flex items-center border-b-[1.8px] border-opacity-gray'>
            <div className='w-full max-w-[75vw] flex justify-between align-middle mx-auto'>
               <a href="https://api.whatsapp.com/send?phone=5513996595151&text=Olá,%20Enzo%20gostei%20do%20seu%20portifólio." target='_blank'><h1>Enzo Campos</h1></a>
               <ul className='flex justify-evenly w-[24rem]'>
                <a href="/"><li>Home</li></a>
                <a href="/#sobre"><li>Sobre mim</li></a>
                <a href="/#portifolio"><li>Portifólio</li></a>
               </ul>
               <a href="/#contato"><span>Entrar em Contato</span></a>
            </div>
        </header>
    )
}
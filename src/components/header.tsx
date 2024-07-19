'use client'

import React, { useState } from 'react'

const Header = () => {

    const [clickMobile, setclickMobile] = useState(false);

    const toggleClick = () => {
        setclickMobile(!clickMobile)
    }

    return (
        <header className='w-full h-20 bg-primary-gray text-white items-center'>
            <div className='w-full max-w-[100vw] px-10 md:px-[6vw] lg:px-[10vw] xl:px-[14.6vw] flex justify-between align-middle items-center mx-auto border-b-[1.8px] border-opacity-gray min-h-[60px]' >
                <a href="https://api.whatsapp.com/send?phone=5513996595151&text=Olá%20Enzo,%20gostei%20do%20seu%20portifólio!%20Quando%20podemos%20começar?" target='_blank'>
                    <h1 className='text-[1.1rem]'>Enzo Campos</h1>
                </a>
                <ul className='md:flex hidden justify-evenly w-[24rem]'>
                    <a href="/#"><li>Home</li></a>
                    <a href="/#sobre"><li>Sobre mim</li></a>
                    <a href="/#portifolio"><li>Portifólio</li></a>
                </ul>
                <a className='hidden md:flex' href="https://api.whatsapp.com/send?phone=5513996595151&text=Olá%20Enzo,%20gostei%20do%20seu%20portifólio!%20Quando%20podemos%20começar?"><span>Entrar em Contato</span></a>
                <button className="md:hidden" onClick={toggleClick}>
                    {clickMobile ? (
                        <svg className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) :
                        <svg className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>}
                </button>
            </div>
            {clickMobile && (
                <div className="md:hidden flex">
                    <ul className='flex justify-evenly w-[100vw] items-center py-3'>
                        <a href="/"><li>Home</li></a>
                        <a href="/#sobre"><li>Sobre mim</li></a>
                        <a href="/#portifolio"><li>Portifólio</li></a>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header

import React, { useState } from "react"
import Selfie from '@/assets/selfie.png'
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export function SectionHero() {
    return (
        <div className="bg-img-bg-hero bg-no-repeat bg-cover py-8">
            <div className="mx-auto flex w-[80vw] flex-col text-center sm:flex-row sm:text-left justify-between items-center">
                <div>
                    <Image src={Selfie} alt="" className="w-[450px] rounded-full" />
                </div>
                <div>
                    <h2 className="text-[12vw] font-bold text-white pt-9">Hello World!</h2>
                    <h2 className="text-[6vw] font-light text-white mb-[20px]">Conheça meu portifólio.</h2>
                    <p className="text-white font-light text-[3.5vw]">Seja bem-vindo ao meu site, espero que aqui encontre as informações que precisa para conhecer um pouco mais de mim e no meu trabalho!</p>
                    <a href="https://api.whatsapp.com/send?phone=5513996595151&text=Olá%20Enzo,%20gostei%20do%20seu%20portifólio!%20Quando%20podemos%20começar?" target="_blank" >
                        <button className="text-white bg-primary-green flex rounded-md mt-10 mb-2 w-[80vw] max-w-[170px] justify-around px-[3.2vw] py-[2.5vw] m-auto">
                            Fale comigo <FontAwesomeIcon icon={faWhatsapp} size="1x" className="max-w-[20px]" />
                        </button>
                    </a>
                </div>
            </div>
        </div>

    )
}
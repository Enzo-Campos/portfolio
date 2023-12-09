import React, { useState } from "react"
import Selfie from '@/assets/selfie.png'
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export function SectionHero() {
    return (
        <div className="bg-img-bg-hero bg-no-repeat bg-cover py-8
        xl:bg-contain lg:bg-contain">
            <div className="
            mx-auto flex w-[80vw] flex-col text-center items-center 
            xl:w-[70vw] xl:items-center xl:flex-row-reverse xl:text-left xl:justify-between xl:min-h-[650px]
            lg:w-[80vw] lg:items-center lg:flex-row-reverse lg:text-left lg:justify-between lg:min-h-[450px]">
                <div>
                    <Image src={Selfie} alt="" className="w-[450px] rounded-full" />
                </div>
                <div className="xl:max-w-[40vw] lg:max-w-[40vw]">
                    <h2 className="text-[12vw] xl:text-[3vw] lg:text-[3vw] font-bold text-white pt-9">Hello World!</h2>
                    <h2 className="text-[6vw] xl:text-[2vw] lg:text-[2vw] font-light text-white mb-[20px]">Conheça meu portfólio.</h2>
                    <p className="text-white font-light text-[3.5vw] xl:text-[1vw] lg:text-[1vw]">Seja bem-vindo ao meu site, espero que aqui encontre as informações que precisa para conhecer um pouco mais de mim e no meu trabalho!</p>
                    <a href="https://api.whatsapp.com/send?phone=5513996595151&text=Olá%20Enzo,%20gostei%20do%20seu%20portifólio!%20Quando%20podemos%20começar?" target="_blank">
                        <button className="
                        text-white bg-primary-green flex rounded-md mt-10 mb-2 m-auto w-[80vw] max-w-[170px] justify-around px-[3.2vw] py-[2.5vw]
                        xl:px-[0.4vw] xl:py-[0.6vw] xl:mx-0 xl:my-7
                        lg:px-[0.4vw] lg:py-[0.6vw] lg:mx-0 lg:my-7">
                            Fale comigo <FontAwesomeIcon icon={faWhatsapp} size="1x" className="max-w-[20px]" />
                        </button>
                    </a>
                </div>
            </div>
        </div>

    )
}
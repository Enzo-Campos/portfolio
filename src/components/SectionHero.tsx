import React, { useState }  from "react"
import Selfie from '@/assets/selfie.png'
import Image from "next/image"


export function SectionHero() {
    return (
        <div className="bg-img-bg-hero h-[100vh] w-[100vw] bg-no-repeat bg-cover flex items-center mx-auto">
            <div className="mx-auto flex w-[75vw] justify-between flex-col text-center sm:flex-row sm:text-left">
                <div className="align-middle items-center">
                    <h2 className="text-[4.2rem] font-bold leading-[7rem] text-white">Hello World!</h2>
                    <h2 className="text-[2.7rem] font-light text-white mt-[-20px] mb-[20px]">Conheça meu portifólio.</h2>
                    <p className="text-white font-light text-[1rem] max-w-md">Seja bem-vindo ao meu site, espero que aqui encontre as informações que precisa para conhecer um pouco mais de mim e no meu trabalho!</p>
                    <a href="/#sobre"><button className="text-white bg-primary-green px-9 py-3 rounded-md my-8">Sobre mim</button></a>
                </div>
                <div>
                    <Image src={Selfie} alt="" className="w-[450px] rounded-full"/>
                </div>
            </div>
        </div>
        
    )
}
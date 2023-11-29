import React from 'react'
import Image from 'next/image'
import reactLogo from '@/assets/React-icon.svg.png'
import nextLogo from '@/assets/next-icon.png'
import jsLogo from '@/assets/js-icon.png'
import phpLogo from '@/assets/php-icon.png'
import mysqlLogo from '@/assets/mysql-icon.png'

const Tecnologias = () => {
  return (
    <div className='flex text-white flex-col items-center text-center justify-around px-[25px]'>
        <h2 className='text-[1.5rem] font-light my-[30px]' id='portifolio'><strong>Tecnologias</strong></h2>
      	<div className='flex justify-around w-[70vw] max-w-[450px]'>
            <Image src={nextLogo} alt='logo do framework next' className='w-[15%]'/>
            <Image src={reactLogo} alt='logo do framework react' className='w-[15%]'/>
            <Image src={jsLogo} alt='logo da linguagem de programação javascript' className='w-[15%]'/>
            <Image src={phpLogo} alt='logo da linguagem de programação php' className='w-[15%]'/>
            <Image src={mysqlLogo} alt='logo do SGBD mysql' className='w-[30%]'/>
        </div>
      </div>
  )
}

export default Tecnologias
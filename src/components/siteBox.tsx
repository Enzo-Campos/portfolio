import React from 'react';
import Image from 'next/image';
import Wordpress from '@/assets/WordPress-Emblema.png';

interface SiteBoxProps {
  title: string;
  subtitle: string;
  imageAlias: string;
  siteLink: string;
}

const SiteBox: React.FC<SiteBoxProps> = (props) => {
  const imageUrl = require(`@/assets/${props.imageAlias}.png`).default;

  return (
    <div>
      <a href={props.siteLink} target='_blank'>
        <div className='bg-secundary-gray max-w-[90vw] mx-auto p-4 rounded-[20px] text-white h-[60%] flex flex-col justify-between my-[30px] cursor-pointer'>
          <Image
            src={imageUrl}
            alt={`Imagem relacionada a ${props.title}`}
            className="w-[100%] rounded-[20px]"
            width={1920} // Defina a largura desejada da imagem
            height={1080} // Defina a altura desejada da imagem
          />
          <h3 className='font-bold pt-4'>{props.title}</h3>
          <p className='font-thin pb-4 text-[0.9rem]'>{props.subtitle}</p>
          <Image src={Wordpress} alt="logo-wordpress" className="w-[30px]" />
        </div>
      </a>
    </div>
  );
};

export default SiteBox;



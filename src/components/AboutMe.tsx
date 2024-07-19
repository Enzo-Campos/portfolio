import React from 'react'

const AboutMe = () => {
  return (
    <div className='
    flex text-white flex-col items-center text-center justify-around px-[35px] mt-[60px]
    xl:max-w-[70vw] xl:m-auto xl:my-[30px]
    lg:max-w-[80vw] lg:m-auto lg:my-[30px]' id='sobre'>
        <h2 className='text-[1.5rem] font-light mb-[15px]' id='portifolio'><strong>Sobre mim</strong></h2>
        <p className='text-[0.8rem] font-thin xl:text-[1rem]'>Olá, meu nome é Enzo, tenho 22 anos e sou um <strong>Desenvolvedor Web</strong> com mais de dois anos de experiência. Minha trajetória profissional tem se concentrado principalmente em tecnologias como <strong>WordPress</strong> para o desenvolvimento ágil de sites. No entanto, estou atualmente direcionando meus esforços para me especializar em desenvolvimento utilizando tecnologias como <strong>React</strong> e <strong>Next.js</strong>.
          Aliás, este site que você está vendo foi <strong>inteiramente desenvolvido por mim</strong>, utilizando essas tecnologias e <strong>TypeScript,</strong> juntamente com o framework <strong>Tailwind CSS.</strong><br></br><br></br>

          Estou prestes a concluir o tecnólogo em <strong>Análise e Desenvolvimento de Sistemas.</strong> Durante minha formação, tive a oportunidade de trabalhar com tecnologias como <strong>Java</strong> e <strong>C#</strong>, embora não sejam minha preferência para desenvolvimento, elas me proporcionaram uma sólida base em lógica e matemática da computação.<br></br><br></br>

          Atualmente, minhas habilidades técnicas <strong>(hard skills)</strong> estão centradas em <strong>CMS</strong>, bancos de dados <strong>MySQL</strong>, configuração de <strong>servidores</strong> em <strong>nuvem</strong> e <strong>VPS</strong>, otimização para mecanismos de busca <strong>(SEO)</strong>, bem como a gestão e implementação de <strong>tags Google</strong>.<br></br><br></br>
        </p>
  
        <h2 className='text-[1.5rem] font-light my-[15px] xl:mt-[40px]' id='portifolio'><strong>Experiência Profissional</strong></h2>
        <p className='text-[0.8rem] font-thin xl:text-[0.9rem]'>
          <strong>Desenvolvedor Web</strong><br></br>
          Iblanco Marketing e Comunicação<br></br>
          abr de 2022 - o momento · 2 anos 3 meses<br></br><br></br>
          Desenvolvimento e manutenção de plataformas WordPress e Moodle. Gerenciamento de Banco de Dados MySQL. Responsável pela infraestrutura do servidor e e-mails.<br></br><br></br>
          <strong>Competências:</strong> WordPress · Otimização para mecanismos de busca (SEO) · Google Drive · PHP · MySQL · Moodle · PhpMyAdmin · JavaScript · VPS
                  </p>
      </div>
  )
}

export default AboutMe
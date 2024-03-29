import React from 'react'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

function About() {
  return (
    <div className='   text-center '>
      <div className='py-3 border-b-2 mb-4 font-extrabold '>
      <h1 className='pb-2 text-palette-link'>
        Hi, I am Anwar  from EGYPT
        </h1>
        <h1 className='text-palette-link'>
            FULL STACK WEB DEVELOPER
        </h1>
      </div>
        
        <div className='pb-2 '>
        <p className='p-1'>
        
        First time I touched the keyboard I realized  that <br />
        Amazing things can be done only with few lines of code.
        </p>
        <p className='p-1'>
         The interface of   
        <Link href='https://en.wikipedia.org/wiki/BASIC'><a className='hover:text-palette-link' >  [ Basic ]  </a></Link>
        language was my window on this strange world , <br /> 
        Unfortunatly  the lack of resources
        available to learn at this time <br /> 
        Forced me to stop but not give-up  ...
        </p>
        </div>
        <div className='pb-2'>
        <p className='p-1'>
          Being  teacher of french language for about 20 years, <br />
          Did not end my passion for coding  <br />
        </p>
        </div>
        <div className='pb-2'>
        <p className='p-1'>
          I tried for while  languages like <Link href="https://en.wikipedia.org/wiki/Visual_Basic_(classic)">
            <a className='hover:text-palette-link'>[Visual Basic 6]</a></Link> and 
            <Link href="https://en.wikipedia.org/wiki/Python_(programming_language)"><a className='hover:text-palette-link'> [Python]</a></Link>
           <br /> 
          But recently in 2020,I focused on studying web development track :<span className='hover:text-palette-link' >[JavaScript],[HTML] and [CSS]</span> <br />
          And gained more and more skills in Front end and Back end. <br /> 
        </p>
        </div>
        <div className='pb-2'>
        <p className='p-1'>
          Finally I am so happy with what I have learned and really excited to <br />
          learn more technologies and contribute to the communtiy of tech.<br />
        </p>
        
        </div>
        
    </div>
  )
}

export default About
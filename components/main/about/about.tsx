import React from 'react'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

function About() {
  return (
    <div className='  p-4 m-4 text-center font-mono'>
      <div className='py-3 border-b-2 mb-4 font-serif'>
      <h1 className='pb-2'>
        Hi, I am Anwar  from EGYPT
        </h1>
        <h1 >
            FULL STACK WEB DEVELOPER
        </h1>
      </div>
        
        <div className='pb-2 '>
        <p className='p-1'>
        
        First time I touched the keyboard I realized  this is my passion and <br />
        Amazing things can be done only with few lines of codes.
        </p>
        <p className='p-1'>
         The interface of   
        <Link href='https://en.wikipedia.org/wiki/BASIC'><a className='text-blue-600'>  [ Basic ]  </a></Link>
        language was my window on this strange world , <br /> 
        Unfortunatly  the lack of resources
        available to learn at this time <br /> 
        Forced me to stop but not give-up  ...
        </p>
        </div>
        <div className='pb-2'>
        <p className='p-1'>
          I am a teacher of french language for about 20 years. <br />
          But the  dream of coding still live with me , <br />
          Even the OS [operating system]  of my pc 
          is  Ubuntu [Debian distro of linux]
        </p>
        </div>
        <div className='pb-2'>
        <p className='p-1'>
          After sometime with [visual basic] and [python] <br /> 
          I focused my efforts on one language suitable <br />
          with both front and back end <br /> so the best choice is <br /> 
          [JavaScript]  to build the whole project
          and get the experiance to manage debugging ,testing .... 

        </p>
        </div>
        <div className='pb-2'>
        <p className='p-1'>
          I am so happy with what I have learned and this give me more power to learn more
          
        </p>
        </div>
        
    </div>
  )
}

export default About
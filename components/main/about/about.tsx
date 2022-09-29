import React from 'react'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

function About() {
  return (
    <div className='text-slate-200  font-extrabold p-4 m-6'>
        <h1 className='text-center py-3'>
        Hi, I am Anwar  from EGYPT
        </h1>
        <h1 className='text-center py-3 border-b-2'>
            **Full Stack web developer**
        </h1>
        
        <p className='p-1'>
        My journey with coding started long time ago in high school (1993).<br />
        first time I touched the keyboard I realized  this is my passion and
        Amazing things can be done only with few lines of codes.
        </p>
        <p className='p-1'>
         The interface of   
        <Link href='https://en.wikipedia.org/wiki/BASIC'><a className='text-blue-600'>  [ Basic ]  </a></Link>
        language was my window on this strange world , unfortunatly with the lack of resources
        available to learn at this time I had to stop but not give-up  ...
        </p>
        <p className='p-1'>
          I took the decision with the career of teaching french language.
          but the  dream of coding still live with me , even the personal computer  
          I have bought, I made it dual boot with Ubuntu (you know the charm of terminal)
        </p>
        <p className='p-1'>
          After sometime with [visual basic] and [python] I focused my efforts on one language
          with front and back end so I choosed [JavaScript]  to build the whole project
          and get the experiance to manage debugging ,testing .... 

        </p>
        <p className='p-1'>
          I am so happy with what I have learned and this give me more power to learn more
          
        </p>
    </div>
  )
}

export default About
import React from 'react'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

function Resources() {
  return (
    <div>
      <div className='border-b-2 p-2 text-center font-mono text-orange-600'>
      <h1>Golden Resources to learn </h1>
      </div>
        <div className='p-2 m-2'>
        <Link href="https://www.udacity.com/mena/one-million-arab-coders/en">
          <a className='text-gray-400'>One million arab coders </a></Link><br />
        <span>Program from Udacity</span>
        </div>
        <div className='p-2 m-2'>
        <Link href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x">
          <a className='text-gray-400'>CS50  </a></Link><br />
        <span>Program of computer science from  Harvard on platform EDX</span>
        </div>
        <div className='p-2 m-2'>
        <Link href="https://www.freecodecamp.org/"><a className='text-gray-400'>FreeCodeCamp</a></Link><br />
        <span>Camp for leanrning with great community</span>
        </div>
        <div className='p-2 m-2'>
        <Link href="https://www.youtube.com/"><a className='text-gray-400'>YouTube</a></Link><br />
        <span>Tones of Free tutorials available </span>
        </div>
        <div className='p-2 m-2'>
        <Link href="https://github.com/"><a className='text-gray-400'>GitHub</a></Link><br />
        <span>Tones of repos availble there</span>
        </div>
        <div className='p-2 m-2 '>
          <span className='text-gray-400'>Documentation</span><br />
        <span> Great resources of learning any technology</span>
        </div>
        
    </div>
  )
}

export default Resources
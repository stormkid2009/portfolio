import React from 'react'
import "tailwindcss/tailwind.css"
import About from './about'

function AboutContainer() {
  return (
    <div className='bg-slate-500 text-white font-extrabold p-4 m-4 rounded-2xl shadow-2xl shadow-white'>
        <About />
    </div>
  )
}

export default AboutContainer
import React from 'react'
import "tailwindcss/tailwind.css"
import About from './about'

function AboutContainer() {
  return (
    <div className='font-extrabold p-4 m-4 rounded-2xl shadow-2xl shadow-white w-3/4'>
        <About />
    </div>
  )
}

export default AboutContainer
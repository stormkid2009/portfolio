import React from 'react'
import "tailwindcss/tailwind.css"
import Content from './content'


function ContentContainer() {
  return (
    <div className='bg-slate-500 text-white font-extrabold p-6 m-6 rounded-2xl shadow-2xl shadow-white'>
        <Content />
    </div>
  )
}

export default ContentContainer
import React from 'react'
import "tailwindcss/tailwind.css"
import Content from './content'


function ContentContainer() {
  return (
    <div className=' font-extrabold p-6 m-6 rounded-2xl shadow-2xl shadow-white'>
        <Content />
    </div>
  )
}

export default ContentContainer
import React from 'react'
import 'tailwindcss/tailwind.css'
import Avatar from './avatar'
import Navbar from './navbar'
function HeaderContainer() {
  return (
    <div className='bg-slate-500 text-white  w-full h-full rounded-b-3xl flex flex-wrap justify-left'>
        <Avatar />
        <Navbar />
    </div>
  )
}

export default HeaderContainer
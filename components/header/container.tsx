import React from 'react'
import 'tailwindcss/tailwind.css'
import Avatar from './avatar'
import Navbar from './navbar'
function HeaderContainer() {
  return (
    <div className =" text-orange-300 font-extrabold  w-3/4 h-full rounded-b-3xl flex flex-wrap justify-left ">
        <Avatar />
        <Navbar />
    </div>
  )
}

export default HeaderContainer
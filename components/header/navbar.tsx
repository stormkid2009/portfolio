import React from "react";
import 'tailwindcss/tailwind.css'
import Link from "next/link";



function Navbar() {
  return (
    <div className="flex-row  justify-center items-center m-4 p-4 w-3/4">
      <h1 className="p-4 m-4 text-center border-b-2">ANWAR AHMED</h1>
      <nav className="flex flex-row justify-around mt-5  flex-wrap">
          <Link href="#" className="p-2 m-2"><a >ABOUT</a></Link>
          <Link href="#" className="p-2 m-2"><a >SKILLS</a></Link>
          <Link href="#" className="p-2 m-2"><a >BLOG</a></Link>
          <Link href="#" className="p-2 m-2"><a >CONTACT</a></Link>
      </nav>
    </div>
  )
}

export default Navbar
import React from "react";
import 'tailwindcss/tailwind.css'
import Link from "next/link";



function Navbar() {
  return (
    <div className="flex-row  justify-center items-center m-4 p-4 w-3/4">
      <div className="p-4 m-4 text-center border-b-2">
      <h1 className=" text-palette-heading">ANWAR AHMED</h1>
      </div>
      
      <div className="flex flex-row justify-around mt-5  flex-wrap text-palette-heading">
          <Link href="#about-section" className="p-2 m-2"><a >ABOUT</a></Link>
          <Link href="#resources-section" className="p-2 m-2"><a >RESOURCES</a></Link>
          <Link href="#skills-section" className="p-2 m-2"><a >SKILLS</a></Link>
          <Link href="#projects-section" className="p-2 m-2"><a >PROJECTS</a></Link>
          <Link href="#contact-section" className="p-2 m-2"><a >CONTACT</a></Link>
      </div>
    </div>
  )
}

export default Navbar
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
        <div className="p-2 m-2">

          <Link href="#about-section" ><a > ABOUT</a></Link>
        </div>
        <div className="p-2 m-2">

          <Link href="#resources-section" ><a > RESOURCES</a></Link>
        </div>
        <div className="p-2 m-2">

          <Link href="#skills-section" ><a > SKILLS</a></Link>
        </div>
        <div className="p-2 m-2">

          <Link href="#projects-section" ><a > PROJECTS</a></Link>
        </div>
        <div className="p-2 m-2">

          <Link href="#contact-section" ><a > CONTACT</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
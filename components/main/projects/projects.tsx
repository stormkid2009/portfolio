import React from 'react'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

function Projects() {
  return (
    <div className='  font-extrabold'>
      <div className='text-center border-b-2 py-2 m-2 font-mono'>
      <h1 className=' text-palette-heading '>
        My Projects
        </h1>
      </div>
        
        <div className='p-4 m-4'>
        <p className="text-palette-heading">
          <Link href="https://github.com/stormkid2009/cakes-shop"><a >The Cakes Shop</a></Link>
        </p>
        <p >
        Online Shop to deliver delicious cakes
        </p>
        </div>
        
        <div className='p-4 m-4'>
        <p className='text-palette-heading'>
          <Link href="https://github.com/stormkid2009/expressTeam"><a >Express Team</a></Link>
        </p>
        <p>
        Dash Board for logistic Agency 
        </p>
        </div>
        <div className='p-4 m-4'>
        <p className='text-palette-heading'>
          <Link href="https://github.com/stormkid2009/Coding-Notes"><a >Coding Notes</a></Link>
        </p>
        <p>
        Notes about many topics of web development
        </p>
        </div>
        <div className='p-4 m-4'>
        <p className='text-palette-heading'>
          <Link href="https://github.com/stormkid2009/MHAM"><a >MHAM</a></Link>
        </p>
        <p>
        Dash Board for Realestate Agency
        </p>
        </div>
        <div className='p-4 m-4'>
        <p className='text-palette-heading'>
          <Link href="https://github.com/stormkid2009/quotes-machine"><a >Quotes Machine</a></Link>
        </p>
        <p>
        Application to publish some quotes as tweets on Twitter 
        </p>
        </div>
    </div>
  )
}

export default Projects
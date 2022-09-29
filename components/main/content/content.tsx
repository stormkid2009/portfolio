import React from 'react'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

function Content() {
  return (
    <div className='text-slate-200  font-extrabold'>
        <h1 className='text-center border-b-2 py-2 m-2'>
        Articles
        </h1>
        <div className='p-4 m-4'>
        <p >
        First article 
        </p>
        <p >
          <Link href="#"><a >link to the first article coming soon .....</a></Link>
        </p>
        </div>
        
        <div className='p-4 m-4'>
        <p>
        Second article 
        </p>
        <p>
          <Link href="#"><a >link to the second article coming soon ....</a></Link>
        </p>
        </div>
        <div className='p-4 m-4'>
        <p>
        Third article 
        </p>
        <p>
          <Link href="#"><a >link to the third article coming soon ....</a></Link>
        </p>
        </div>
        <div className='p-4 m-4'>
        <p>
        Fourth article 
        </p>
        <p>
          <Link href="#"><a >link to the fourth article coming soon .....</a></Link>
        </p>
        </div>
        <div className='p-4 m-4'>
        <p>
        Fifth article 
        </p>
        <p>
          <Link href="#"><a >link to the fifth article coming soon ....</a></Link>
        </p>
        </div>
    </div>
  )
}

export default Content
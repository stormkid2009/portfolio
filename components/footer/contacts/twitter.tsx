import React from 'react'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

function Twitter() {
  return (
    <div className='p-2 m-2'>
      <Link href="https://twitter.com/AnwarAhmed1979">
      <a >
      <span>Twitter</span>
      </a>
      </Link>
      
    </div>
  )
}

export default Twitter
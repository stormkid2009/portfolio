import React from 'react'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

function LinkedIn() {
  return (
    <div className='p-2 m-2'>
      <Link href="https://www.linkedin.com/in/anwar-ahmed-a6b3b1b1/">
      <a >
      <span>LinkedIn</span>
      </a>
      </Link>
    </div>
  )
}

export default LinkedIn
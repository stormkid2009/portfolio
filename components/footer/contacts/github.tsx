import React from 'react'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

function GitHub() {
  return (
    <div className='p-2 m-2'>
      <Link href="https://github.com/stormkid2009">
      <a >
      <span>GitHub</span>
      </a>
      </Link>
    </div>
  )
}

export default GitHub
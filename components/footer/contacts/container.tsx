import React from 'react'
import "tailwindcss/tailwind.css"
import Email from './email'
import GitHub from './github'
import LinkedIn from './linkedin'
import Twitter from './twitter'

function ContactsContainer() {
  return (
    <div className='flex justify-around p-2 m-2'>
      <Email />
      <GitHub />
      <LinkedIn />
      <Twitter />
    </div>
  )
}

export default ContactsContainer
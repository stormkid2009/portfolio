import React from 'react'
import "tailwindcss/tailwind.css"
import Email from './email'
import GitHub from './github'
import LinkedIn from './linkedin'
import Twitter from './twitter'

function ContactsContainer() {
  return (
    <div>
      <Email />
      <GitHub />
      <LinkedIn />
      <Twitter />
    </div>
  )
}

export default ContactsContainer
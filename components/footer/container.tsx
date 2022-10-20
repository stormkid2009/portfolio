import React from 'react'
import "tailwindcss/tailwind.css"
import ContactsContainer from './contacts/container'
import CopyRightsContainer from './copyrights/container'

function FooterContainer() {
  return (
    <div id="contact-section" className='shadow-lg shadow-palette-shadow text-palette-heading font-extrabold flex flex-wrap justify-between m-4 p-4 rounded-3xl w-1/2'>
      <CopyRightsContainer />
      <ContactsContainer />
    </div>
  )
}

export default FooterContainer
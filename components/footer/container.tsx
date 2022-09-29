import React from 'react'
import "tailwindcss/tailwind.css"
import ContactsContainer from './contacts/container'
import CopyRightsContainer from './copyrights/container'

function FooterContainer() {
  return (
    <div>
      <CopyRightsContainer />
      <ContactsContainer />
    </div>
  )
}

export default FooterContainer
import React from 'react'
import "tailwindcss/tailwind.css"
import ContactsContainer from './contacts/container'
import CopyRightsContainer from './copyrights/container'

function FooterContainer() {
  return (
    <div className='bg-slate-500 text-white flex justify-between m-4 p-4 rounded-3xl'>
      <CopyRightsContainer />
      <ContactsContainer />
    </div>
  )
}

export default FooterContainer
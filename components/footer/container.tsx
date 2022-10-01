import React from 'react'
import "tailwindcss/tailwind.css"
import ContactsContainer from './contacts/container'
import CopyRightsContainer from './copyrights/container'

function FooterContainer() {
  return (
    <div className='shadow-2xl shadow-white text-slate-200 font-mono flex justify-between m-4 p-4 rounded-3xl w-1/2'>
      <CopyRightsContainer />
      <ContactsContainer />
    </div>
  )
}

export default FooterContainer
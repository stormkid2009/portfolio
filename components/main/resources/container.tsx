import React from 'react'
import "tailwindcss/tailwind.css"
import Resources from './resources'

function ResourcesContainer() {
  return (
    <div id="resources-section" className=' font-extrabold p-6 m-6 rounded-2xl shadow-lg shadow-slate-400'>
        <Resources />
    </div>
  )
}

export default ResourcesContainer
import React from 'react'
import "tailwindcss/tailwind.css"
import Projects from './projects'


function ProjectsContainer() {
  return (
    <div id="projects-section" className=' font-extrabold p-6 m-6 rounded-2xl shadow-2xl shadow-white'>
        <Projects />
    </div>
  )
}

export default ProjectsContainer
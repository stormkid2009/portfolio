import React from 'react'
import "tailwindcss/tailwind.css"
import ProjectsContainer from './projects/container'
import SkillsContainer from './skills/container'
import AboutContainer from './about/container'



function MainContainer() {
  return (
    <div className=' h-full w-full my-4 flex flex-col items-center justify-center p-4'>
        
        <AboutContainer />
        <ProjectsContainer />
        <SkillsContainer />
        
        
    </div>
  )
}

export default MainContainer
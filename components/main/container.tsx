import React from 'react'
import "tailwindcss/tailwind.css"
import ContentContainer from './content/container'
import SkillsContainer from './skills/container'
import AboutContainer from './about/container'
//import SideBar from './sidebar'


function MainContainer() {
  return (
    <div className='bg-pyramids-img bg-auto h-full w-full my-4 flex-col items-center p-4'>
        
        <AboutContainer />
        <ContentContainer />
        <SkillsContainer />
        
        
    </div>
  )
}

export default MainContainer
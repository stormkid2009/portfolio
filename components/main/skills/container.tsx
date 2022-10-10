import React from 'react'
import JavaScript from './javascript'
import NextJS from './nextjs'
import ReactJS from './reactjs'
import TypeScript from './typescript'
import NodeJS from './nodejs'
import MongoDB from './mongodb'
import Git from './git'
import HTML from './html'
import CSS from './css'
import Ubuntu from './ubuntu'
import TailwindCSS from './tailwindcss'


export default function SkillsContainer() {
  return (
      <div id="skills-section" className='shadow-2xl shadow-white rounded-3xl font-extrabold p-2 m-2'>
        <div className='text-center font-mono text-orange-300  '>
          <h1 className='border-b-2 p-4 m-4'>MY SKILLS</h1>
        </div>
    <div   className='flex flex-wrap justify-around font-mono  h-full   p-4 m-4 '>
        <HTML />
        <CSS />
        <JavaScript />
        <NodeJS />
        <TypeScript />
        <ReactJS />
        <NextJS />
        <TailwindCSS />
        <MongoDB />
        <Git />
        <Ubuntu />
    </div>
    </div>
  )
}

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
    <div className='flex flex-wrap justify-around h-full text-white bg-slate-500 p-4 m-4 rounded-3xl'>
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
  )
}

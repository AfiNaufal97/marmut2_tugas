import React from 'react'
import Section1 from './section1'
import Section2 from './section2'


export default function index() {
  return (
    <div className="my-[30px] max-w-sm mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[1440px] duration-[1500ms]"> 
        <Section1 />
        <Section2 />
    </div>
  )
}

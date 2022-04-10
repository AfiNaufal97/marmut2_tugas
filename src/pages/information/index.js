import React, { Component } from 'react'
import Section1 from './section1/index'
import Section2 from './section2/index'
import Section3 from './section3/index'

export default class index extends Component {

  componentDidMount(){
    document.title = "Marmoot | Info"
  }

  render(){
    return (
      <div className="my-[30px] max-w-sm mx-auto md:max-w-4xl">
         <Section1 />
         <Section2 />
         <Section3 />
      </div>
    )
  }
 
}

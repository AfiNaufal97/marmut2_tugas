import React, { Component } from 'react'
import { connect } from 'react-redux'
import Section1 from './section1/index'
import Section2 from './section2/index'
import Section3 from './section3/index'
import Menu from './menu'


 class index extends Component {

  componentDidMount(){
    document.title = "Marmoot | Info"
  }

  render(){
    console.log(this.props)
    if(this.props.info){
      return (
        <Menu />
      )
    }
    return (
      <div className="my-[30px] max-w-sm mx-auto md:max-w-4xl">
         <Section1 />
         <Section2 />
         <Section3 />
      </div>
    )
  }
 
}


const data = (state) =>{
  return {
    info:state.information
  }
}


export default connect(data) (index)

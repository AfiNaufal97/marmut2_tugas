import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

 function index(props) {
  const symbolNav = "->";
  return (
    <div className="bg-[#CA965D] mb-[500px] ">
      <p className="text-white text-[18px] font-bold text-center mb-[20px]">
        Informasi tentang marmut
      </p>
      <p className="text-white mb-[15px] cursor-pointer">
      <Link to='/gallery' onClick={()=> props.info()}>Gallery</Link>
         <span className="ml-[20px]">{symbolNav}</span>
      </p>
      <p className="text-white mb-[15px] cursor-pointer ">
      <Link to='/mating' onClick={()=> props.info()}> Mating and Information</Link>
        <span className="ml-[20px]">{symbolNav}</span>
      </p>
      <p className="text-white mb-[15px] cursor-pointer">
        Animal Habitat <span className="ml-[20px]">{symbolNav}</span>
      </p>
      <p className="text-white mb-[15px] cursor-pointer">
        <Link to='/scientific' onClick={()=> props.info()}>Scientific Name and Classification</Link>
        <span className="ml-[20px]">{symbolNav}</span>
      </p>
      <p className="text-white mb-[15px] cursor-pointer">
      <Link to='/anatomy' onClick={()=> props.info()}>Animal Anatomy</Link> 
         <span className="ml-[20px]">{symbolNav}</span>
      </p>
      <p className="text-white mb-[15px] cursor-pointer">
      <Link to='/behavarior' onClick={()=> props.info()}>Animal Behaviour</Link> <span className="ml-[20px]">{symbolNav}</span>
      </p>
      <p className="text-white mb-[15px] cursor-pointer">
        Communications <span className="ml-[20px]">{symbolNav}</span>
      </p>
      <p className="text-white mb-[15px] cursor-pointer">
        Miscelleneous Interesting Facts{" "}
        <span className="ml-[20px]">{symbolNav}</span>
      </p>
      <p className="text-white mb-[15px] cursor-pointer">
        Popular Culture <span className="ml-[20px]">{symbolNav}</span>
      </p>
      <p className="text-white mb-[15px] cursor-pointer">
      <Link to='/movie' onClick={()=> props.info()}>Movie</Link>
         <span className="ml-[20px]">{symbolNav}</span>
      </p>
    </div>
  );
}

const store = (state) =>{
  return {
    info:()=>state.information
  }
}

const reduxDispatch = (dispatch) =>{
  return {
    info :()=>dispatch({type:'information'})
  }
}

export default connect(store, reduxDispatch) (index)

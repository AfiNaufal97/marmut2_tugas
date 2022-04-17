import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class index extends Component {
  render() {
    return (
      <div className="max-w-sm px-[66px] mx-auto  md:max-w-4xl md:flex md:justify-between md:px-0 md:pt-[40px] lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[1440px] ">
        <div className="text-center ml-[20px] md:text-left xl:ml-[40px]">
          <p className="text-black text-[30px] font-bold">Marmoot</p>
        </div>
        <div className="text-center md:flex md:my-auto md:text-center md:mr-[20px] xl:mr-[70px]">
          <div className="group">
            <p className="my-[10px] cursor-pointer md:mx-[10px] group-hover:animate-bounce">
              <Link to="/"> <button onClick={() => this.props.clickInfo()}>
                Home
              </button></Link>
            </p>
          </div>
          <div className="group">
            <p className="my-[10px] cursor-pointer md:mx-[10px]  group-hover:animate-bounce">
              {/* <Link to="/information">Information</Link> */}
              <button onClick={() => this.props.clickInfo()}>
                Information
              </button>
            </p>
          </div>
          <div className="group">
            <p className="my-[10px] cursor-pointer md:mx-[10px]  group-hover:animate-bounce">
              About
            </p>
          </div>
          <div className="group">
            <p className="my-[10px] cursor-pointer group-hover:animate-bounce">
              <Link to="/anatomy">SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const store = (state) => {
  return {
    info: state.information,
  };
};

const reducerRedux = (reducer) => {
  return {
    clickInfo: () => reducer({ type: "information" }),
  };
};

export default connect(store, reducerRedux)(index);

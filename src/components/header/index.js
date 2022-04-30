import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends Component {
  render() {
    const symbolNav = "->";
    return (
      <div className="max-w-sm px-[66px] mx-auto  md:max-w-4xl md:flex md:justify-between md:px-0 md:pt-[40px] lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[1440px] ">
        <div className="text-center ml-[20px] md:text-left xl:ml-[40px]">
          <p className="text-black text-[30px] font-bold">Marmoot</p>
        </div>
        <div className="text-center md:flex md:my-auto md:text-center md:mr-[20px] xl:mr-[70px]">
          <p className="my-[10px] cursor-pointer md:mx-[10px]">
            <Link to="/">Home</Link>
          </p>

          <div className="grup information ">
            <p className="my-[10px] cursor-pointer md:mx-[10px]  group-hover:border-2 group-hover:border-zinc-900 grup-hover:duration-700">
              information
              <div className="information-list rounded-lg shadow-md shadow-slate-300">
                <p className="text-white mb-[15px] cursor-pointer hover:text-black">
                  <Link to="/gallery" onClick={() => this.props.clickInfo()}>
                    Gallery
                  </Link>
                  <span className="ml-[20px]">{symbolNav}</span>
                </p>
                <p className="text-white mb-[15px] cursor-pointer hover:text-black">
                  <Link to="/mating" onClick={() => this.props.clickInfo()}>
                    {" "}
                    Mating and Information
                  </Link>
                  <span className="ml-[20px]">{symbolNav}</span>
                </p>
                <p className="text-white mb-[15px] cursor-pointer hover:text-black">
                  Animal Habitat <span className="ml-[20px]">{symbolNav}</span>
                </p>
                <p className="text-white mb-[15px] cursor-pointer hover:text-black">
                  <Link to="/scientific" onClick={() => this.props.clickInfo()}>
                    Scientific Name and Classification
                  </Link>
                  <span className="ml-[20px]">{symbolNav}</span>
                </p>
                <p className="text-white mb-[15px] cursor-pointer hover:text-black">
                  <Link to="/anatomy" onClick={() => this.props.clickInfo()}>
                    Animal Anatomy
                  </Link>
                  <span className="ml-[20px]">{symbolNav}</span>
                </p>
                <p className="text-white mb-[15px] cursor-pointer hover:text-black">
                  <Link to="/behavarior" onClick={() => this.props.clickInfo()}>
                    Animal Behaviour
                  </Link>{" "}
                  <span className="ml-[20px]">{symbolNav}</span>
                </p>
                <p className="text-white mb-[15px] cursor-pointer hover:text-black">
                  Communications <span className="ml-[20px]">{symbolNav}</span>
                </p>
                <p className="text-white mb-[15px] cursor-pointer hover:text-black">
                  Miscelleneous Interesting Facts{" "}
                  <span className="ml-[20px]">{symbolNav}</span>
                </p>
                <p className="text-white mb-[15px] cursor-pointer hover:text-black">
                  Popular Culture <span className="ml-[20px]">{symbolNav}</span>
                </p>
                <p className="text-white mb-[15px] cursor-pointer hover:text-black">
                  <Link to="/movie" onClick={() => this.props.clickInfo()}>
                    Movie
                  </Link>
                  <span className="ml-[20px]">{symbolNav}</span>
                </p>
              </div>
            </p>
          </div>

          <p className="my-[10px] cursor-pointer md:mx-[10px] ">About</p>

          <div className="group">
            <p className="my-[10px] cursor-pointer">
              <Link to="/register">SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const reducerRedux = (reducer) => {
  return {
    clickInfo: () => reducer({ type: "information" }),
  };
};

export default connect(null, reducerRedux)(Header);

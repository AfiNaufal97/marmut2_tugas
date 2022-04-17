import React, { Component } from "react";
import Section1 from "./section1/index";
import Section2 from "./section2/index";
import Section3 from "./section3/index";
import { connect } from "react-redux";
import Menu from "../information/menu";

class index extends Component {
  componentDidMount() {
    document.title = "Marmoot | Home";
  }

  render() {
    if (this.props.info) {
      return (
        <div className="duration-[2500ms]">
          <Menu />
        </div>
      );
    }
    return (
      <div className="my-[30px] max-w-sm mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[1440px] duration-[1500ms] ">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    );
  }
}

const store = (state) => {
  return {
    info: state.information,
  };
};

export default connect(store)(index);

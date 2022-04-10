import React, { Component } from "react";
import Slider from "react-slick";
import Marmut1 from "../../../assets/image/marmut1.svg";
import Marmut2 from "../../../assets/image/marmut2.svg";
import Marmut3 from "../../../assets/image/marmut3.svg";
import Marmut4 from "../../../assets/image/marmut4.svg";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="rounded-[20px]">
            <img
              src={Marmut1}
              alt="e"
              className="w-[700px] h-[400px] mx-auto"
            />
          </div>
          <div className="rounded-[20px]">
            <img src={Marmut2} alt="e" className="w-[700px] h-[400px] mx-auto" />
          </div>
          <div className=" rounded-[20px]">
            <img
              src={Marmut3}
              alt="e"
              className="w-[700px] h-[400px] mx-auto"
            />
          </div>
          <div className=" rounded-[20px]">
            <img
              src={Marmut4}
              alt="e"
              className="w-[700px] h-[400px] mx-auto"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

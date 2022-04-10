import React, { Component } from "react";
import Slider from "react-slick";
import Marmut1 from "../../../assets/image/marmut1.svg";
import Marmut2 from "../../../assets/image/marmut2.svg";
import Marmut3 from "../../../assets/image/marmut3.svg";
import Marmut4 from "../../../assets/image/marmut4.svg";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div className="shadow-lg shadow-slate-300 bg-white rounded-[20px] mr-5">
            <img
              src={Marmut1}
              alt="e"
              className="w-[500px] h-[300px] mx-auto"
            />
            <p className="text-center">Marmut</p>
            <p className="text-center text-[16px] font-semibold"></p>
          </div>
          <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px] mr-5">
            <img
              src={Marmut2}
              alt="e"
              className="w-[500px] h-[300px] mx-auto"
            />
            <p className="text-center">Marmut</p>
            <p className="text-center text-[16px] font-semibold"></p>
          </div>
          <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px] mr-5">
            <img
              src={Marmut3}
              alt="e"
              className="w-[500px] h-[300px] mx-auto"
            />
            <p className="text-center">Marmut</p>
            <p className="text-center text-[16px] font-semibold"></p>
          </div>
          <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px] mr-5">
            <img
              src={Marmut4}
              alt="e"
              className="w-[500px] h-[300px] mx-auto"
            />
            <p className="text-center">Marmut</p>
            <p className="text-center text-[16px] font-semibold"></p>
          </div>
        </Slider>
      </div>
    );
  }
}

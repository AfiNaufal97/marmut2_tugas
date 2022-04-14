import React, { Component } from "react";
import Slider from "react-slick";

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
              src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886803/marmut1_h4eukg.svg'
              alt="e"
              className="w-[500px] h-[300px] mx-auto"
            />
            <p className="text-center">Marmut</p>
            <p className="text-center text-[16px] font-semibold"></p>
          </div>
          <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px] mr-5">
            <img
              src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886800/marmut2_egzjyy.svg'
              alt="e"
              className="w-[500px] h-[300px] mx-auto"
            />
            <p className="text-center">Marmut</p>
            <p className="text-center text-[16px] font-semibold"></p>
          </div>
          <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px] mr-5">
            <img
              src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886802/marmut3_gckqde.svg'
              alt="e"
              className="w-[500px] h-[300px] mx-auto"
            />
            <p className="text-center">Marmut</p>
            <p className="text-center text-[16px] font-semibold"></p>
          </div>
          <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px] mr-5">
            <img
              src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886799/marmut4_ptfqhk.svg'
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

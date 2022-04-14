import React, { Component } from "react";
import Slider from "react-slick";
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
              src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886803/marmut1_h4eukg.svg'
              alt="e"
              className="w-[700px] h-[400px] mx-auto"
            />
          </div>
          <div className="rounded-[20px]">
            <img src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886800/marmut2_egzjyy.svg' alt="e" className="w-[700px] h-[400px] mx-auto" />
          </div>
          <div className=" rounded-[20px]">
            <img
              src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886802/marmut3_gckqde.svg'
              alt="e"
              className="w-[700px] h-[400px] mx-auto"
            />
          </div>
          <div className=" rounded-[20px]">
            <img
              src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886799/marmut4_ptfqhk.svg'
              alt="e"
              className="w-[700px] h-[400px] mx-auto"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

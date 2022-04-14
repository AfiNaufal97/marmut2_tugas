import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class index extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2 className="text-[30px] text-center mb-[30px]"> Gallery</h2>
        <Slider {...settings}>
        <div className="shadow-lg shadow-slate-300 bg-white rounded-[20px]">
              <img src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886803/marmut1_h4eukg.svg' alt="e" className="w-[500px] h-[300px] mx-auto" />
              <p className="text-center">Marmut</p>
              <p className="text-center text-[16px] font-semibold"></p>
            </div>
            <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px]">
              <img src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886800/marmut2_egzjyy.svg' alt="e" className="w-[500px] h-[300px] mx-auto"/>
              <p className="text-center">Marmut</p>
              <p className="text-center text-[16px] font-semibold"></p>
            </div>
            <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px]">
              <img src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886802/marmut3_gckqde.svg' alt="e" className="w-[500px] h-[300px] mx-auto" />
              <p className="text-center">Marmut</p>
              <p className="text-center text-[16px] font-semibold"></p>
            </div>
            <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px]">
              <img src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886799/marmut4_ptfqhk.svg' alt="e" className="w-[500px] h-[300px] mx-auto" />
              <p className="text-center">Marmut</p>
              <p className="text-center text-[16px] font-semibold"></p>
            </div>
        </Slider>
      </div>
    );
  }
}

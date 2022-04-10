import React, { Component } from "react";
import Slider from "react-slick";
import Marmut1 from '../../../assets/image/marmut1.svg'
import Marmut2 from '../../../assets/image/marmut2.svg'
import Marmut3 from '../../../assets/image/marmut3.svg'
import Marmut4 from '../../../assets/image/marmut4.svg'


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
              <img src={Marmut1} alt="e" className="w-[500px] h-[300px] mx-auto" />
              <p className="text-center">Marmut</p>
              <p className="text-center text-[16px] font-semibold"></p>
            </div>
            <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px]">
              <img src={Marmut2} alt="e" className="w-[500px] h-[300px] mx-auto"/>
              <p className="text-center">Marmut</p>
              <p className="text-center text-[16px] font-semibold"></p>
            </div>
            <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px]">
              <img src={Marmut3} alt="e" className="w-[500px] h-[300px] mx-auto" />
              <p className="text-center">Marmut</p>
              <p className="text-center text-[16px] font-semibold"></p>
            </div>
            <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px]">
              <img src={Marmut4} alt="e" className="w-[500px] h-[300px] mx-auto" />
              <p className="text-center">Marmut</p>
              <p className="text-center text-[16px] font-semibold"></p>
            </div>
        </Slider>
      </div>
    );
  }
}

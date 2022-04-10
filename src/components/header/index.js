import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="max-w-sm px-[66px] mx-auto  md:max-w-4xl md:flex md:justify-between md:px-0 md:pt-[40px] lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[1440px] ">
      <div className="text-center ml-[20px] md:text-left xl:ml-[40px]">
        <p className="text-black text-[30px] font-bold">Marmoot</p>
      </div>
      <div className="text-center md:flex md:my-auto md:text-center md:mr-[20px] xl:mr-[70px]">
        <p className="my-[10px] cursor-pointer md:mx-[10px]">
          <Link to="/">Home</Link>
        </p>
        <p className="my-[10px] cursor-pointer md:mx-[10px]">
          <Link to="/information">Information</Link>
        </p>
        <p className="my-[10px] cursor-pointer md:mx-[10px]">About</p>
        <p className="my-[10px] cursor-pointer">SignUp</p>
      </div>
    </div>
  );
}

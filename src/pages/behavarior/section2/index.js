import React from "react";

export default function index() {
  return (
    <div className="mt-[50px]">
      {/* jika ukuran large akan hilang */}
      <div className="my-[30px] lg:hidden">
        <p className="text-black font-bold text-[18px] text-center md:text-[25px]">
          Cara Mencari Makan
        </p>
        <p className="text-black text-[15px] text-justify md:px-[20px] md:text-[18px]">
          Makanan marmut adalah tumbuhan, mereka mencari tumbuhan disekitarnya
          untuk makan, beberapa makanan yang bisa dikonsumsi oleh marmut adalah
          jerami, buah dan sayur
        </p>
      </div>

      <div className="my-[100px] hidden lg:block lg:flex">
        <div className="lg:w-1/2"> 
          <img src="https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886803/marmut1_h4eukg.svg" alt="Gambar" className="lg:w-[550px] lg:h-[350px] 2xl:w-[600px] 2xl:h-[550px]"/>
        </div>

        <div className="lg:w-1/2 my-auto">
          <p className="text-black font-bold text-[18px] mb-[20px] lg:text-right lg:px-[20px] lg:text-[25px]">
            Cara Mencari Makan
          </p>
          <p className="text-black text-[15px] text-justify lg:px-[20px] lg:text-[17px]">
            Makanan marmut adalah tumbuhan, mereka mencari tumbuhan disekitarnya
            untuk makan, beberapa makanan yang bisa dikonsumsi oleh marmut
            adalah jerami, buah dan sayur
          </p>
        </div>
      </div>
    </div>
  );
}

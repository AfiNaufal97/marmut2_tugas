import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="md:flex md:justify-between md:px-[20px]">
      {/* jika medium hilang */}
      <div className="md:hidden">
        <p className="text-center text-[20px] font-bold mb-[10px]">
          Halo <span className="text-[#CA965D]">Marmut</span> Lovers,
        </p>
        <p className="text-justify mb-[10px]">
          Website ini menyediakan berbagai informasi seputar marmut seperti nama
          ilmiah, habitat, perilaku dan masih banyak informasi lainnya.
        </p>
      </div>

      {/* jika medium muncul */}
      <div className="hidden md:bloc md:flex md:flex-col md:justify-center">
        <p className="text-center text-[20px] font-bold mb-[10px] md:text-left md:text-[30px] md:mr-[10px] lg:text-[32px] xl:text-[35px] xl:ml-[40px] 2xl:ml-[30px] 2xl:text-[48px]">
          Halo <span className="text-[#CA965D]">Marmut</span> Lovers,
        </p>
        <p className="text-justify mb-[10px] md:max-w-[300px] md:text-[18px] lg:max-w-[400px] xl:ml-[40px] 2xl:ml-[30px]">
          Website ini menyediakan berbagai informasi seputar marmut seperti nama
          ilmiah, habitat, perilaku dan masih banyak informasi lainnya.
        </p>
        <Link to="/scientific">
          <button className="bg-[#CA965D] text-white py-[20px] px-[30px] rounded-2xl md:w-[176px] md:h-[64px] md:mt-[30px] xl:ml-[40px] 2xl:ml-[30px]">
            Selengkapnya
          </button>
        </Link>
      </div>

      <img
        src="https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886802/main_img_ugflq4.svg"
        alt="Marmut Top"
        className="m-auto md:w-[436px] md:h-[357px] md:-mr-5 lg:w-[536px] lg:h-[457px] lg:-mr-5 xl:w-[636px] xl:h-[557px] xl:mr-[35px] 2xl:w-[836px] 2xl:h-[757px] 2xl:mr-[20px]"
      />
      <div className="flex max-w-sm justify-center">
        <Link to="/scientific">
          <button className="bg-[#CA965D] text-white py-[20px] px-[30px] rounded-2xl md:hidden">
            Selengkapnya
          </button>
        </Link>
      </div>
    </div>
  );
}

import React from "react";

export default function index() {
  return (
    <div className="lg:my-[100px]">
      <div className="lg:hidden">
        <p className="text-black text-[18px] font-bold text-center md:text-[25px]">
          Cara Tidur
        </p>
        <p className="text-black text-[15px] text-justify md:px-[20px] md:text-[18px]">
          Jika di alam terbuka mereka hidup dengan menggali lubang dan melakukan
          hibernasi saat musim dingin.
        </p>
      </div>

      {/* jika large akan muncul */}
      <div className="hidden lg:block lg:flex  ">
        <div className="lg:w-1/2">
          <img
            src="https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886802/marmut3_gckqde.svg"
            alt="Gambar"
            className="lg:w-[500px] lg:h-[350px] 2xl:w-[600px] 2xl:h-[550px]"
          />
        </div>

        <div className="lg:w-1/2 lg:my-auto">
          <p className="text-black text-[18px] mb-[20px] font-bold lg:text-right lg:text-[25px] lg:px-[20px]">
            Cara Tidur
          </p>
          <p className="text-black text-[15px] text-justify lg:px-[20px] lg:text-[17px]">
            Jika di alam terbuka mereka hidup dengan menggali lubang dan
            melakukan hibernasi saat musim dingin.
          </p>
        </div>
      </div>
    </div>
  );
}

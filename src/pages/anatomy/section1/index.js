import React from "react";

export default function index() {
  return (
    <div>
      <div className="mt-[30px] md:hidden">
        <p className="text-[#886547] text-[20px] font-bold text-center mb-[30px]">
          Anatomi Marmut
        </p>
        <p className="text-black text-[18px] font-bold text-center">
          Anatomi Tubuh
        </p>
        <img
          src="https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886803/marmut1_h4eukg.svg"
          alt="Gambar"
          className="mx-auto my-[20px]"
        />
      </div>


      <div className="mt-[30px] hidden md:block">
        <p className="text-[#886547] text-[20px] font-bold text-center mb-[30px]">
          Anatomi Marmut
        </p>
        <p className="text-black text-[18px] font-bold text-center">
          Anatomi Tubuh
        </p>
        <img
          src="https://res.cloudinary.com/dycpjvu2b/image/upload/v1649939592/Screenshot_from_2022-04-14_19-30-47_jb1lo7.png"
          alt="Gambar"
          className="mx-auto my-[20px] md:w-[600px] md:h-[400px] lg:w-[800px] lg:h-[500px] xl:w-[800px] xl:h-[600px]"
        />
      </div>
    </div>
  );
}

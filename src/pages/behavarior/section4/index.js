import React from "react";

export default function index() {
  return (
    <div>
      <div className="my-[30px] lg:hidden">
        <p className="text-black font-bold text-[18px] text-center md:text-[25px]">
          Cara Melindungi Diri dari Predator{" "}
        </p>
        <p className="text-black  text-[15px] text-justify md:px-[20px] md:text-[18px]">
          Lingkungan Marmut yang berupa padang-padang rumput biasanya terdapat
          dalam kelompok besar, yang rata-rata sebanyak 5-10 ekor. Hal ini
          dikarenakan untuk menjaganya dari serangan predator. Marmut juga tidak
          mengali lubang sendiri sebagai tempat tinggalnya akan tetapi hanya
          memanfaatkan lubang yang telah ditinggalkan oleh binatang lainnya.
        </p>
      </div>

      {/* jika ukuran large maka akan muncul */}
      <div className="my-[30px] hidden lg:block lg:flex">
        <div className="lg:w-1/2 lg:my-auto">
          <p className="text-black font-bold text-[18px] lg:text-[25px] lg:text-left lg:px-[20px] lg:mb-[20px]">
            Cara Melindungi Diri dari Predator{" "}
          </p>
          <p className="text-black  text-[15px] text-justify lg:px-[20px] lg:text-[17px]">
            Lingkungan Marmut yang berupa padang-padang rumput biasanya terdapat
            dalam kelompok besar, yang rata-rata sebanyak 5-10 ekor. Hal ini
            dikarenakan untuk menjaganya dari serangan predator. Marmut juga
            tidak mengali lubang sendiri sebagai tempat tinggalnya akan tetapi
            hanya memanfaatkan lubang yang telah ditinggalkan oleh binatang
            lainnya.
          </p>
        </div>

        <div className="lg:w-1/2">
          <img src='https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886799/marmut4_ptfqhk.svg' alt="Gambar" className="lg:w-[550px] lg:h-[350px] 2xl:w-[600px] 2xl:h-[550px]"/>
        </div>
      </div>
    </div>
  );
}

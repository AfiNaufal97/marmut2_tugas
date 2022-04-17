import React from "react";

export default function index() {
  return (
    <div>
      <div className="md:hidden">
        <img
          src="https://res.cloudinary.com/dycpjvu2b/image/upload/v1650215481/anton-nikolov-DsqBeGYdjKo-unsplash_tosbk1.jpg"
          alt="Gambar"
          className="mt-[30px] rounded-[30px] max-w-sm mx-auto"
        />
        <p className="text-justify text-[18px] mb-[20px] px-[20px] mt-[15px]">
          Bagi Marmut betina, kehamilan memiliki resiko yang cukup tinggi.
          Terdapat peluang sekitar 20 persen kematian bagi Marmut betina akibat
          komplikasi kehamilan. Bayi Marmut yang dilahirkan telah memiliki bulu
          dan anggota tubuh sempurna sehingga induk Marmut memerlukan energi
          yang besar selama proses kelahiran.
        </p>
      </div>



      <div className="hidden md:block md:flex  justify-between mt-[100px]">
        <div className="w-1/2 px-[30px]">
        <img
            src="https://res.cloudinary.com/dycpjvu2b/image/upload/v1650215479/bonnie-kittle-MUcxe_wDurE-unsplash_vfh8v8.jpg"
            alt="Gambar"
            className=" rounded-[30px] lg:w-[650px] lg:h-[400px]"
          />
        </div>
        <div className="w-1/2 px-[30px]">
        <p className="text-justify text-[18px] px-[20px] my-auto lg:text-[20px] ">
            Marmut betina bisa melahirkan sebanyak satu hingga tujuh anak, namun
            kebanyakan induk melahirkan antara dua hingga lima anak saja. Bayi
            Marmut akan dilahirkan setelah berada dalam rahim kurang lebih
            selama 59-73 hari. Berat lahir normal bayi Marmut sangat variatif
            berkisar antara 70 hingga 100 gram.
          </p>
        
        </div>
      </div>

    </div>
  );
}

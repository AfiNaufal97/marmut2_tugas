import React from "react";
import Qoute from "../../../assets/image/qoute.svg";
import MarmutHis from "../../../assets/image/marmut_his.svg";
export default function index() {
  return (
    <div className="mb-[400px] mt-[30px] md:mb-[300px]">
      <div className="relative">
        <img src={Qoute} alt="qoute" className="w-[60px] h-[60px] md:mx-[60px] xl:mx-[80px]" />
        <div className="absolute top-[25px]">
          <p className="text-justify top-[25px] px-[15px] md:text-[18px] md:mx-[60px] md:text-slate-500 xl:mx-[90px] xl:text-[20px]">
            Nama ilmiah hewan ini adalah Cavia porcelus. Hewan ini adalah jenis
            hewan pengerat yang hidup dalam kelompok social, dalam satu kelompok
            bisa terdiri dari 5 sampai 10 marmut. Keunikan dari marmut ini
            adalah mereka sering berkomunikasi satu sama lain lewat siulan. Jika
            di alam terbuka mereka hidup dengan menggali lubang dan melakukan
            hibernasi saat musim dingin.
          </p>
          <img src={MarmutHis} alt="Marmut" className="m-auto md:mt-[30px] xl:w-[100px]"/>
        </div>
      </div>
    </div>
  );
}

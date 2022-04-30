import React from "react";

export default function Section1({ image, name, rate, dec }) {
  return (
    <div className="max-w-sm mx-auto mt-[80px]">
      <div className="mx-auto">
        <p className="text-[20px] font-bold text-center">Detail Marmut</p>
        <img src={image} alt="Gambar" className="w-[300px] h-[250px]" />
      </div>
    </div>
  );
}

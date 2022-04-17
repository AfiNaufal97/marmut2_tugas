import React from "react";

export default function index() {
  return (
    <div className="bg-[#EEC374] -bottom-[20px] ">
      <div className="max-w-full rounded-t-[20px] py-[20px] md:grid md:grid-cols-2 lg:max-w-4xl lg:mx-auto lg:my-auto xl:grid-cols-4">
        <div className="max-w-sm mx-auto xl:my-auto">
          <p className="text-center font-bold text-[24px] my-[20px]">Marmoot</p>
        </div>

        <div className="max-w-sm m-auto mb-[10px]">
          <p className="font-semibold text-center">Special</p>
          <p className="text-center">Give Food</p>
          <p className="text-center">Play Together</p>
          <p className="text-center">Healthy</p>
        </div>

        <div className="max-w-sm m-auto mb-[10px]">
          <p className="font-semibold text-center">Company</p>
          <p className="text-center">APIs Developer</p>
          <p className="text-center">Career</p>
          <p className="text-center">Terms & Conditions</p>
          <p className="text-center">Privacy Policy</p>
        </div>

        <div className="max-w-sm m-auto  mb-[20px]">
          <p className="text-center font-semibold">Be Our Friend</p>
          <p className="text-center">Season Park, Jakarta</p>
          <p className="text-center">support@marmoot.co.id</p>
          <p className="text-center">011-1111-3333</p>
        </div>

        <div className="max-w-sm m-auto md:hidden">
          <p className="text-center font-bold text-[18px] mb-10">
            &copy; MARMOOT 2022
          </p>
        </div>
      </div>
      <div className="hidden max-w-sm m-auto md:block md:max-w-4xl md:py-[30px]">
          <p className="text-center font-bold text-[18px]">
            &copy; MARMOOT 2022
          </p>
        </div>
    </div>
  );

}

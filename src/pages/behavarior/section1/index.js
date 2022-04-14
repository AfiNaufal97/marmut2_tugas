import React from "react";

export default function index() {
  return (
    <div>
      <div className="lg:hidden">
        <p className="text-[#886547] font-bold text-[20px] mb-[30px] text-center md:text-[36px]">
          Perilaku Marmut
        </p>
        <p className="text-[15px] text-justify md:px-[20px] md:text-[18px]">
          Marmut merupakan salah satu hewan yang mudah ditangani, sehingga bisa
          dijadikan hewan peliharaan. Hewan ini lebih menyukai rutinitas dan
          waktu yang sama untuk bermain, makan, dan istirahat setiap hari.
        </p>
        <p className="text-[15px] text-justify md:px-[20px] md:text-[18px]">
          Mereka suka bersembunyi di dalam benda, namun akan keluar saat orang
          berada di dekat habitatnya. Marmut juga suka mengunyah benda untuk
          mempertahankan semua giginya, yang tumbuh terus menerus. Berikan
          mereka stik kunyah untuk marmut sesering mungkin supaya mereka bisa
          mengasah giginya.
        </p>
      </div>

      <div className="hidden lg:block lg:flex lg:my-[100px] mx-auto">
        <div className=" w-1/2  my-auto">
          <p className="text-[#886547] font-bold text-[20px] mb-[30px] text-center md:text-[36px] lg:text-[25] lg:text-left lg:px-[20px] 2xl:px-[30px]">
            Perilaku Marmut
          </p>
          <p className="text-[15px] text-justify md:px-[20px] md:text-[18px] lg:text-[17px] xl:text-[18px]">
            Marmut merupakan salah satu hewan yang mudah ditangani, sehingga
            bisa dijadikan hewan peliharaan. Hewan ini lebih menyukai rutinitas
            dan waktu yang sama untuk bermain, makan, dan istirahat setiap hari.
          </p>
          <p className="text-[15px] text-justify md:px-[20px] md:text-[18px] lg:text-[17px] xl:text-[18px]">
            Mereka suka bersembunyi di dalam benda, namun akan keluar saat orang
            berada di dekat habitatnya. Marmut juga suka mengunyah benda untuk
            mempertahankan semua giginya, yang tumbuh terus menerus. Berikan
            mereka stik kunyah untuk marmut sesering mungkin supaya mereka bisa
            mengasah giginya.
          </p>
        </div>
        <div className="w-1/2  justify-end">
          <img
            src="https://res.cloudinary.com/dycpjvu2b/image/upload/v1649886802/main_img_ugflq4.svg"
            alt="Gambar"
            className=" overflow-hiddenlg:w-[500px] lg:h-[300px]lg:my-auto lg:rounded-xl xl:w-[600px] xl:h-[450px] xl:mx-auto 2xl:w-[600px] 2xl:h-[550px] 2xl:rounded-2xl "
          />
        </div>
      </div>
    </div>
  );
}

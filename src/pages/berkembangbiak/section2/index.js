import React from "react";

export default function index() {
  return (
    <div>
      <div className="md:hidden">
        <img
          src="https://res.cloudinary.com/dycpjvu2b/image/upload/v1650215478/bonnie-kittle-FOvn9EAwM54-unsplash_kmkkz6.jpg"
          alt="Gambar"
          className="mt-[30px] rounded-[30px] max-w-sm mx-auto"
        />
        <p className="text-justify text-[18px] mb-[20px] px-[20px] mt-[15px]">
          Sebagai hewan mamalia, Marmut berkembang biak dengan cara melahirkan
          (vivipar). Marmut betina dapat mulai mengandung ketika baru berusia 4
          minggu, sementara Marmut jantan dapat menghamili Marmut betina pada
          usia 3 minggu. Namun, Marmut betina yang hamil saat berusia terlalu
          muda akan kesulitan selama periode kehamilan akibat tubuhnya yang
          masih bertumbuh. Maka dari itu, Marmut betina sebaiknya mulai hamil
          setelah usianya lebih dari 8 bulan.
        </p>
      </div>

      <div className="hidden md:block md:flex  justify-between mt-[100px] ">
        <div className="w-1/2 px-[30px]">
          <img
            src="https://res.cloudinary.com/dycpjvu2b/image/upload/v1650215478/bonnie-kittle-FOvn9EAwM54-unsplash_kmkkz6.jpg"
            alt="Gambar"
            className="rounded-[30px] lg:w-[650px] lg:h-[400px]"
          />
        </div>
        <div className="w-1/2 px-[30px]">
          <p className="text-justify text-[18px] mb-[20px] px-[20px] mt-[15px] my-auto lg:text-[20px]">
            Sebagai hewan mamalia, Marmut berkembang biak dengan cara melahirkan
            (vivipar). Marmut betina dapat mulai mengandung ketika baru berusia
            4 minggu, sementara Marmut jantan dapat menghamili Marmut betina
            pada usia 3 minggu. Namun, Marmut betina yang hamil saat berusia
            terlalu muda akan kesulitan selama periode kehamilan akibat tubuhnya
            yang masih bertumbuh. Maka dari itu, Marmut betina sebaiknya mulai
            hamil setelah usianya lebih dari 8 bulan.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function index() {
  const list = [
    ["Kingdom", "Animalia"],
    ["Filum", "Chordata"],
    ["Kelas", "Mamalia"],
    ["Ordo", "Rodentia"],
    ["Famili", "Caviidae"],
    ["Genus", "Cavia"],
    ["Spesies", "Cavia Porcellus"],
  ];
  return (
    <div>
      <p className="text-center font-bold text-[24px] md:text-[36px]">Marmut</p>
      <p className="italic text-center">(Cavia Porcellus)</p>
      <p className="mt-[15px] text-justify md:text-[18px] md:px-[20px]">
        Marmut merupakan hewan yang secara biologis banyak memiliki persamaan
        dengan manusia sehingga seringkali digunakan sebagai obyek penelitian.
        Hewan ini dapat diklasifikasikan sebagai mamalia berdarah panas
        (homoiterm) dan kebanyakan berasal dari daerah pegunungan seperti
        Pegunungan Alpen, Rocky, Himalaya, Everest, Andes, Sierra Nevada,
        Kilimanjaro, dan Sinai.
      </p>
      <p className="mt-[20px] md:text-[18px] md:px-[20px]">Berikut merupakan taksonomi (klasifikasi) Mamut :</p>

      <table>
        {list.map((e) => (
          <tr>
            <td className="font-semibold md:text-[18px] md:px-[20px]">{e[0]}</td>
            <td className="md:text-[18px] md:px-[20px]">: {e[1]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

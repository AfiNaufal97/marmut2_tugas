import React from "react";
import JsonData from '../../../util/Json/data.json'

export default function index() {
  return (
    <div className="mb-[100px] mt-[100px] md:grid md:grid-cols-2  lg:grid-cols-2   xl:grid-cols-3">
      {JsonData.movieObject.map((e) => {
        return ( <div className="max-w-sm mx-auto h-[400px]">
         <div className="bg-white shadow-lg shadow-slate-400 rounded-[30px] p-2 group">
           <div className="rounded-[30px] overflow-hidden relative">
             <img src={e.image} alt="Gambar" className="opacity-50 duration-1000 bg-slate-400 h-[300px] group-hover:scale-125 group-hover:duration-1000"/>
             <img src={e.play} alt="Gambar" className="absolute w-[40px] h-[40px] top-[130px] right-[170px]"/>
           </div>
 
           <p className="px-[20px] text-[18px] font-bold">{e.title}</p>
           <div className="flex flex-row justify-between">
             <div>
               <p className="px-[20px] text-[17px]">{e.year}</p>
             </div>
             <div className="flex px-[20px]">
              <img src={e.ifav} alt="Gambar" className="w-[25px] h-[25px] mr-[15px]"/>
              <img src={e.ishare} alt="Gambar" className="w-[25px] h-[25px]"/>
             </div>
           </div>
         </div>
       </div>)
      })}
     
    </div>
  );
}

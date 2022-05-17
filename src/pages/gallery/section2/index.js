import React from "react";
import { Link } from "react-router-dom";
import JsonFile from "../../../util/Json/data.json";

export default function index() {
  return (
    <div className="mb-[100px] mt-[100px] md:grid md:grid-cols-2  lg:grid-cols-2   xl:grid-cols-3">
      {JsonFile.geleryObject.map((e) => {
        return <Link to="/detail">
    
          <div className="max-w-sm mx-auto h-[400px]">
            <div className="bg-white shadow-lg shadow-slate-400 rounded-[30px] p-2 group">
              <div className="rounded-[30px] overflow-hidden">
                <img
                  src={e.url}
                  alt="Gambar"
                  className="duration-1000 bg-slate-400 h-[300px] scale-125 group-hover:scale-150 group-hover:duration-1000"
                />
              </div>

              <p className="px-[20px] text-[18px] font-bold">{e.name}</p>
            </div>
          </div>
          
        </Link>;
      })}
    </div>
  );
}
import React from "react";
import JsonData from '../../../util/Json/data.json'

export default function index() {
  return (
    <div className="md:hidden">
      {JsonData.objectData.map((e) => {
        return (
          <div>
            <p className="text-black text-[18px] font-bold text-left">
              {e.title}
            </p>
            {e.text !== ""}
            {<p className="text-blaxk text-[15px] text-left">{e.text}</p>}
          </div>
        );
      })}
    </div>
  );
}

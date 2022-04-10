import React, { Component } from "react";
import listMarmut from "../../../util/name_marmut";
import SlicMD from '../slick_md/index'
import SlicLG from '../slic_lg/index'

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="max-w-[300px] mx-auto mb-[50px] md:hidden">
          {listMarmut.map((e) => (
            <div className="shadow-lg shadow-slate-300 bg-white mb-[30px] rounded-[20px]">
              <img src={e[0]} alt="e" className="max-w-[300px] mx-auto" />
              <p className="text-center">Marmut</p>
              <p className="text-center text-[16px] font-semibold">{e[1]}</p>
            </div>
          ))}
        </div>

        <div className="hidden max-w-[300px] mx-auto mb-[50px] md:block md:max-w-[500px] md:mb-[60px] xl:hidden">
         <SlicMD />
        </div>

        <div className="hidden max-w-[300px] mx-auto mb-[50px] md:hidden xl:block xl:max-w-full xl:mb-[60px]">
         <SlicLG />
        </div>
      </div>
    );
  }
}

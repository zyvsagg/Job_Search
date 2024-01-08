import React from "react";

import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";


const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem] ">
      <h1
        className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-boldw-[400px block] ">
        The value that holds us true and to account
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center ">
      <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] cursor-pointer">
          <div className="flex item-center gap-3">
            <div
              className=" imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[48px]
            w-[48px] flex items-center justify-center"
            >
              <img src={logo} alt=" something like bird" className=" w-[100%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p
            className="text-[25px] text-textColor opacity-[.7] py-[1rem]
          fontsize-semibold"
          >
            The greatest glory in living lies not in never falling, but in
            rising every time we fall.
          </p>
          
        </div>
      <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] cursor-pointer">
          <div className="flex item-center gap-3">
            <div
              className=" imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[48px]
            w-[48px] flex items-center justify-center "
            >
              <img src={logo2} alt=" something like bird" className=" w-[100%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p
            className="text-[25px] text-textColor opacity-[.7] py-[1rem]
          fontsize-semibold"
          >
            The greatest glory in living lies not in never falling, but in
            rising every time we fall.
          </p>
          
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] cursor-pointer">
          <div className="flex item-center gap-3">
            <div
              className=" imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[48px]
            w-[48px] flex items-center justify-center "
            >
              <img src={logo} alt=" something like bird" className=" w-[100%]" />
            </div>
            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p
            className="text-[25px] text-textColor opacity-[.7] py-[1rem]
          fontsize-semibold"
          >
            The greatest glory in living lies not in never falling, but in
            rising every time we fall.
          </p>
          
        </div>
      </div>
      
    </div>
  );
};

export default Value;

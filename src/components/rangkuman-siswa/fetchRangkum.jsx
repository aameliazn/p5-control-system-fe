import React from "react";
import Style from './style.module.css'
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

export default function fetchRangkum() {
  return (
    <>

            
            <div className='items-center justify-center flex'>
            <div
            className={Style.cardwarpper}

            >
                <div className="w-full">
                    <h4 className=" max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
                    Rangkuman materi
                    </h4>
                    <div className="flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
                    <button className={Style.button}>
                    <AiOutlineDownload size={30} />
                    </button>
                    </div>
                </div>
            </div>
            </div>
          
    </>
  );
}

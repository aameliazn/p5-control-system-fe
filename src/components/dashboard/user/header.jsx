import React from "react";
import { CiLocationOn } from "react-icons/ci";

export default function header() {
  return (
    <>
      <div className="relative flex flex-col jus items-center overflow-hidden p-2 sm:py-10  ">
        <div className="bg-white  shadow-xl shadow-gray-100 w-full flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4   border-b-2 border-[var(--main-color)] rounded-lg">
          <div>
            <span className="text-purple-800 text-sm">Piket WC</span>
            <h3 className="font-bold mt-px">Senin 15 Oktober 2023</h3>
            <div className="flex items-center gap-3 mt-2 ">
              <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
                Sesi 2
              </span>
              <span className="text-slate-600 text-sm flex gap-1 items-center uppercase">
                {" "}
                <CiLocationOn  size={20} /> WC Pajajaran 2
              </span>
              <span className=" text-sm text-[#4c8e06]">
                10.20
              </span>
              <span className="bg-red-100 text-red-700 rounded-full px-3 py-1 text-sm">
                Membersihkan Lantai
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

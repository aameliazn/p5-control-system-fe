import React from 'react'

export default function header() {
  return (
    <>
    <div className="relative flex flex-col jus items-center overflow-hidden p-2 sm:py-10  ">
        <div className="bg-white  shadow-xl shadow-gray-100 w-full flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4   border-b-2 border-[var(--main-color)] rounded-lg">
          <div>
            <span className="text-purple-800 text-sm">Halo Amelia!</span>
            <h3 className="font-bold mt-px max-w-sm text-xl">Tetap Semangat Mengerjakan Tugasmu Ya!</h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-[#4c8e061f] text-[#4c8e06] rounded-full px-3 py-1 text-sm">
              Kebersihan Sekolah
              </span>
              <span className="text-slate-600 text-sm flex gap-1 items-center uppercase">
                {"  isi apa aja "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

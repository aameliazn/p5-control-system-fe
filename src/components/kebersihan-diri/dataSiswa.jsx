'use client'
import React from "react";
import Style from "./style.module.css";
import { useKebersihanDiri } from "@/context/KebersihanDiriContext";
import { AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";

export default function dataSiswa() {
  const {kelas, handleClick, handleClick2, isClicked, handleDeleteKelas} = useKebersihanDiri();
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg mt-4 shadow hover:bg-gray-100">
        <div className="font-bold text-lg">Data Siswa</div>
        <div className={Style.cardWrapper}>
          {kelas.map((kelas) => (
            <div key={kelas.id} className={Style.column}>
              <div className={Style.dataSiswa}>
                <p
                  onClick={handleClick2}
                  className="cursor-pointer font-medium sm:text-lg"
                >
                  {kelas.kelas}
                </p>

                <span className="ml-auto text-lg font-medium text-blue-600 hidden sm:block">
                  <div className="flex flex-wrap gap-2">
                    <button className={Style.button2}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={23}
                        height={23}
                      />
                    </button>
                    <button onClick={() => handleDeleteKelas(kelas.id)}>
                      <AiOutlineDelete color={"red"} size={27} />
                    </button>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

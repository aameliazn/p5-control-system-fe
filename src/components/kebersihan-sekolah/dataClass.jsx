'use client'

import React from 'react'
import Style from './style.module.css'
import Image from 'next/image'
import { AiOutlineDelete } from "react-icons/ai"
import { useKebersihanSekolah } from '@/context/KebersihanSekolahContext'

export default function dataClass() {
  const {kelas, handleDelete, handleClick, handleClick2, isClicked} = useKebersihanSekolah();
  
  return (
    <>
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
                    <button onClick={() => handleDelete(kelas.id)}>
                      <AiOutlineDelete color={"red"} size={27} />
                    </button>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
    </>
    )
}

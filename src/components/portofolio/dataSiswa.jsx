"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Style from "./style.module.css";
import starWhite from "../../../public/star-white.png";
import starYellow from "../../../public/star-yellow.png";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";

export default function dataSiswa() {
  const router = useRouter();
  const [kelas, setKelas] = useState([]);
  const [isClicked, setIsClicked] = useState(starWhite);
  // data icon star
  const handleClick = () => {
    if (isClicked == starWhite) {
      setIsClicked(starYellow);
    } else {
      setIsClicked(starWhite);
    }
  };

  //data fetching
  useEffect(() => {
    axios
      .get("http://localhost:2000/kelas")
      .then((response) => {
        setKelas(response.data);
      })
      .catch((error) => {
        console.error("error mengambil data", error);
      });
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2000/kelas/${itemId}`);
      setKelas(kelas.filter((item) => item.id !== itemId));
    } catch (e) {
      console.error("error menghapus kelas", e);
    }
  };

  //push route
  const handleClick2 = () => {
    router.push("/data-kelas-portofolio/{id}");
  };
  return (
    <>
      <div className="font-bold text-lg">Data Siswa</div>
      <div className={Style.cardWrapper}>
        {kelas.map((kelas) => (
          <div key={kelas.id} className={Style.column}>
            <div class={Style.dataSiswa}>
              <p
                onClick={handleClick2}
                class="cursor-pointer font-medium sm:text-lg"
              >
                {kelas.kelas}
              </p>

              <span class="ml-auto text-lg font-medium text-blue-600 hidden sm:block">
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
  );
}

"use client";
import React, {useEffect, useState} from "react";
import Style from "./materi.module.css"
import Image from "next/image";
import starWhite from "../../../public/star-white.png";
import starYellow from "../../../public/star-yellow.png";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

export default function dataClass() {
  const router = useRouter();
  const [kelas, useKelas] = useState([]);
    const [isClicked, setIsClicked] = useState(starWhite);

    // data icon star
    const handleClick = () => {
      if (isClicked == starWhite) {
        setIsClicked(starYellow);
      } else {
        setIsClicked(starWhite);
      }
    };

    //data fatching
    useEffect(() => {
      axios.get('http://localhost:2000/kelas').then((response) => {
        useKelas(response.data);
      })
      .catch((error) => {
        console.error('error mengambil data', error)
      });
    }, []);

    //untuk delete

    const handleDelete = async (itemId) => {
      try {
        await axios.delete(`http://localhost:2000/kelas/${itemId}`);
        useKelas(kelas.filter(item => item.id !== itemId));
      }
      catch (error) {
        console.error('error menghapus data', error);
      }
    };

    const handleClick2 = () => {
      router.push("/data-kelas-materi/[id]")
    };
  
  return ( 
    <>
      <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg mt-4 shadow hover:bg-gray-100">
        <div className="font-bold text-lg">Data Siswa</div>
        <div className={Style.cardWrapper}>
        {kelas.map((kelas) => (
<div  key={kelas.id} className={Style.column}>
 <div class={Style.dataSiswa}>
   <p onClick={handleClick2} class="cursor-pointer font-medium sm:text-lg">{kelas.kelas}</p>

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
             <AiOutlineDelete color={'red'} size={27}/>
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

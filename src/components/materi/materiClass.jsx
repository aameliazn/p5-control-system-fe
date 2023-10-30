'use client'

import React, {useState, useEffect} from "react";
import Style from "./materi.module.css";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";

export default function materi() {
  const [uploadedFile, setAploadedFile] = useState([]);

  
    //get data pdf
    useEffect(() => {
      axios.get(' http://localhost:2000/materi')
      .then((response) => {
        setAploadedFile(response.data);
      })
      .catch((error) => {
        console.error('error mengambil data', error);
      });
    }, []);

  //delete data pdf
  const handleDeletePDF = (fileId) => {
    axios.delete(`http://localhost:2000/${fileId}`)
    .then(() => {
      console.log('PDF berhasil dihapus');
      const UpdatePDF = uploadedFile.filter((file) => file.id !== fileId);
      setAploadedFile(UpdatePDF);
    })
    .catch((err) => {
      console.error('error hapus file', err);
    });
  };
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div className="flex flex-wrap gap-2 justify-around">

         
   <div  class={Style.cardMateri}>
   <img class="w-full" src="./example.jpeg" alt="" />
   <div class="px-3 py-2">
     <div class="font-bold text-xl mt-3 mb-2 text-center">
       wadadabang
     </div>
     <div className={Style.btnf}>
       <div>
         <button class={Style.button}>
           <AiOutlineDownload size={30} />
         </button>
       </div>
       <div>
         <button class={Style.button1} onClick={() =>  handleDeletePDF(file.id)}>
           <AiFillEye size={30} />
         </button>
       </div>
     </div>
   </div>
 </div>
        

        </div>
      </div>
    </>
  );
}

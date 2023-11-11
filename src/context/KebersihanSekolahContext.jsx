'use client'

import React, {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {notification} from 'antd'
import { useRouter } from 'next/navigation'
import starWhite from '../../public/star-white.png'
import starYellow from '../../public/star-yellow.png'

const ContextKebersihanSekolah = createContext(null);

export default function KebersihanSekolahContext({children}) {
  const [kegiatan, setKegiatan] = useState("");
  const [kondisi, setKondisi] = useState("");
  const [skor, setSkor] = useState("");
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
    
  
  //get data kelas
  useEffect(() => {
    axios.get("http://localhost:2000/kelas").then((response) => {
      useKelas(response.data);
    }).catch((error) => {
      console.error("gagal mengambil data", error);
    });
  }, []);

  //delete data kelas
  const handleDelete = async (itemId) => {
    try{
      await axios.delete(`http://localhost:2000/kelas/${itemId}`);
      useKelas(kelas.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("error menghapus data", error);
    }
  };

  const handleClick2 = () => {
    router.push("/data-kelas-sekolah/[id]");
  };

  //post data
  const handleForm = async () => {
    try {
      const response = await axios.post("http://localhost:2000/kegiatan", {
        kegiatan,
        kondisi,
        skor,
      });
      console.log("Input berhasil ditambahkan", response.data);
      notification.success({
        message: "Input ber  hasil",
        description: "Data telah berhasil ditambahkan.",
        type: "success",
      })
      window.location.reload();
    } catch (error) {
      notification.error({
        message: "Gagal menyimpan",
        description: "Terjadi kesalahan saat menyimpan data.",
        type: "error",
      });
      console.error("gagal menyimpan data", error);
    }
  };


  
const state = {
  kegiatan,
  kondisi,
  skor,
  setKegiatan,
  setKondisi,
  setSkor,
  handleForm,
  kelas,
  handleDelete,
  handleClick2,
  isClicked,
  handleClick
}
  return (
    <ContextKebersihanSekolah.Provider value={state}>
      {children}
    </ContextKebersihanSekolah.Provider>
  );
}

export const useKebersihanSekolah = () => {
  const context = useContext(ContextKebersihanSekolah);
  if (context === undefined) {
    throw new Error(
      'useKebersihanSekolah must be use within a Network Performance'
    );
  }
  return context; 
};
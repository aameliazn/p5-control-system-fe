"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {notification} from 'antd';
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import starWhite from "../../public/star-white.png";
import starYellow from "../../public/star-yellow.png";


const ContextKebersihanDiri = createContext(null);

export default function KebersihanDiriContext({ children }) {
  const [kegiatan, setKegiatan] = useState("");
  const [kegiatanTable, setKegiatanTable] = useState([]);
  const router = useRouter();
  const [kelas,   useKelas] = useState([]);
  const [isClicked, setIsClicked] = useState(starWhite);

  
  // data icon star
  const handleClick = () => {
    if (isClicked == starWhite) {
      setIsClicked(starYellow);
    } else {
      setIsClicked(starWhite);
    }
  };
//post data 
const handleKegiatan = async () => {
  try {
    const response = await axios.post("http://localhost:2000/kegiatan", {
      kegiatan,
    });
    console.log("kegiatan berhasil disimpan", response.data);
    notification.success({
      message: "Input ber  hasil",
      description: "Kegiatan telah berhasil ditambahkan.",
      type: "success",
    });
  } catch (error) {
    console.error("gagal menyimpan kegiatan:", error);
     notification.error({
        message: "Gagal menyimpan",
        description: "Terjadi kesalahan saat menyimpan input.",
        type: "error",
      });
  }
};


//KegiatanTable

useEffect(() => {
  axios.get(" http://localhost:2000/kegiatan").then((response) => {
    setKegiatanTable(response.data);
  });
}, []);

//delete
const handleDelete = async (itemId) => {
  try {
    await axios.delete(`http://localhost:2000/kegiatan/${itemId}`);
    setKegiatanTable(kegiatanTable.filter((item) => item.id !== itemId));
  } catch (error) {
    console.error("error menghapus data", error);
  }
};


  //untuk delete
  const handleDeleteKelas = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2000/kelas/${itemId}`);
      useKelas(kelas.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("error menghapus data", error);
    }
  };

  //data fatching
  useEffect(() => {
    axios
      .get("http://localhost:2000/kelas")
      .then((response) => {
        useKelas(response.data);
      })
      .catch((error) => {
        console.error("error mengambil data", error);
      });
  }, []);

  const handleClick2 = () => {
    router.push("/data-kelas-kebersihan/[id]");
  };


const columnKegiatan = [
  {
    title: "Id",
    dataIndex: "id",
    rowScope: "row",
    width: 8,
  },
  {
    title: "Kegiatan",
    dataIndex: "kegiatan",
    fixed: "center",
    width: 100,
  },
  {
    title: "Action",
    fixed: "right",
    width: 30,
    render: (text, record) => (
      <a onClick={() => handleDelete(record.id)}>
        <AiOutlineDelete color={"red"} size={27} />
      </a>
    ),
  },
];

  const state = {
    handleKegiatan,
    kegiatan,
    setKegiatan,
    kegiatanTable,
    setKegiatanTable,
    columnKegiatan,
    handleClick,
    kelas,
    handleClick2,
    isClicked,
    handleDeleteKelas
  };

  return (
    <ContextKebersihanDiri.Provider value={state}>
      {children}
    </ContextKebersihanDiri.Provider>
  );
}

export const useKebersihanDiri = () => {
  const context = useContext(ContextKebersihanDiri);
  if (context === undefined) {
    throw new Error(
      `useKebersihanDiri must be use within a Network Performance`
    );
  }
  return context;
};

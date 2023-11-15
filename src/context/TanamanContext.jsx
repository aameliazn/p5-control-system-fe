"use client";
import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

const ContextTanaman = createContext(null);

export default function TanamanContext({ children }) {
  const [visible, setVisible] = useState(false);
  const [kegiatan, setKegiatan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedColumn, setSearchedColumn] = useState("");
  const [kelas, useKelas] = useState([]);

  const searchInput = useRef(null);

  const itemsPerPage = 5;

  const [pagination, setPagination] = useState({
    total: kegiatan?.length,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    current: currentPage,
    pageSize: itemsPerPage,
    showSizeChanger: false,
    position: ["bottomCenter"],
  });

  const handleKegiatan = async (values) => {
    const kegiatan = values;
    try {
      const response = await axios.post("http://localhost:2000/kegiatan", {
        kegiatan,
      });
      console.log("kegiatan berhasil disimpan", response.data);
    } catch (error) {
      console.error("gagal menyimpan kegiatan:", error);
    }
  };

  useEffect(() => {
    axios.get(" http://localhost:2000/kegiatan").then((response) => {
      setKegiatan(response.data);
    });
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2000/kegiatan/${itemId}`);
      setKegiatan(kegiatan.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("error menghapus data", error);
    }
  };

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

  const handleDeleteClass = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2000/kelas/${itemId}`);
      useKelas(kelas.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("error menghapus data", error);
    }
  };

  const state = {
    visible,
    setVisible,
    handleKegiatan,
    kegiatan,
    setKegiatan,
    handleDelete,
    pagination,
    setPagination,
    searchInput,
    searchedColumn,
    setSearchedColumn,
    currentPage,
    setCurrentPage,
    kelas,
    useKelas,
    handleDeleteClass,
  };

  return (
    <ContextTanaman.Provider value={state}>{children}</ContextTanaman.Provider>
  );
}

export const useTanaman = () => {
  const context = useContext(ContextTanaman);
  if (context === undefined) {
    throw new Error(`useTanaman must be use within a Network Performance`);
  }
  return context;
};

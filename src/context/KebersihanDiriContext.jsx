"use client";
import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const ContextKebersihanDiri = createContext(null);

export default function KebersihanDiriContext({ children }) {
  const [visible, setVisible] = useState(false);
  const [kegiatan, setKegiatan] = useState("");
  const [kegiatanTable, setKegiatanTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [kelas, useKelas] = useState([]);

  const searchInput = useRef(null);

  const itemsPerPage = 5;

  const [pagination, setPagination] = useState({
    total: kegiatanTable?.length,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    current: currentPage,
    pageSize: itemsPerPage,
    showSizeChanger: false,
    position: ["bottomCenter"],
  });

  const handleKegiatan = async (values) => {
    const activity = values;

    axios
      .post(`/api/v1/hygiene/activity`, { activity })
      .then((res) => {
        console.log("kegiatan berhasil disimpan", res.data);
      })
      .catch((err) => {
        console.error("gagal menyimpan kegiatan:", err);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:2000/kegiatan").then((response) => {
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

  const handleDeleteKelas = async (itemId) => {
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
    kegiatan,
    setKegiatan,
    handleKegiatan,
    kegiatanTable,
    setKegiatanTable,
    handleDelete,
    currentPage,
    setCurrentPage,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
    searchInput,
    itemsPerPage,
    pagination,
    setPagination,
    kelas,
    useKelas,
    handleDeleteKelas,
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

"use client";
import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

const ContextKebersihanSekolah = createContext(null);

export default function KebersihanSekolahContext({ children }) {
  const [visible, setVisible] = useState(false);
  const [table, setTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [kelas, setKelas] = useState([]);

  const searchInput = useRef(null);

  const itemsPerPage = 5;

  const [pagination, setPagination] = useState({
    total: table?.length,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    current: currentPage,
    pageSize: itemsPerPage,
    showSizeChanger: false,
    position: ["bottomCenter"],
  });

  const handleForm = async (values) => {
    const kegiatan = values?.kegiatan;
    const kondisi = values?.kondisi;
    const skor = values?.skor;

    try {
      const response = await axios.post("http://localhost:2000/kegiatan", {
        kegiatan,
        kondisi,
        skor,
      });
      console.log("Input berhasil ditambahkan", response.data);
      window.location.reload();
    } catch (error) {
      console.error("gagal menyimpan data", error);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:2000/kegiatan").then((response) => {
      setTable(response.data);
    });
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(` http://localhost:2000/kegiatan/${itemId}`);
      setTable(table.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("error menghapus data", error);
    }
  };

  const handleDeleteClass = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2000/kelas/${itemId}`);
      setKelas(kelas.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("error menghapus data", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:2000/kelas")
      .then((response) => {
        setKelas(response.data);
      })
      .catch((error) => {
        console.error("gagal mengambil data", error);
      });
  }, []);

  const state = {
    visible,
    setVisible,
    handleForm,
    table,
    setTable,
    handleDelete,
    currentPage,
    setCurrentPage,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
    searchInput,
    pagination,
    setPagination,
    itemsPerPage,
    kelas,
    setKelas,
    handleDeleteClass,
  };

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
      `useKebersihanSekolah must be use within a Network Performance`
    );
  }
  return context;
};

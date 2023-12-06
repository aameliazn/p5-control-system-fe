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

const ContextPortofolio = createContext(null);

export default function PortofolioContext({ children }) {
  const [visible, setVisible] = useState(false);
  const [table, setTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedColumn, setSearchedColumn] = useState("");
  const [searchText, setSearchText] = useState("");
  const [kelas, setKelas] = useState([]);
  const [siswa, setSiswa] = useState([]);

  const itemsPerPage = 5;

  const searchInput = useRef(null);

  const [pagination, setPagination] = useState({
    total: table?.length,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    current: currentPage,
    pageSize: itemsPerPage,
    showSizeChanger: false,
    position: ["bottomCenter"],
  });

  const handlePertanyaan = async (values) => {
    const activity = values?.activity;

    axios
      .post(`/api/v1/portofolio/activity`, {
        activity,
      })
      .then((res) => {
        console.log("pertanyaan berhasil ditambahkan", res?.data);
      })
      .catch((err) => {
        console.error("gagal menambah pertanyaan", err);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:2000/pertanyaan").then((response) => {
      setTable(response.data);
    });
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2000/pertanyaan/${itemId}`);
      setTable(table.filter((item) => item.id !== itemId));
    } catch (e) {
      console.error("gagal menghapus pertanyaan", e);
    }
  };

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

  const handleDeleteClass = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2000/kelas/${itemId}`);
      setKelas(kelas.filter((item) => item.id !== itemId));
    } catch (e) {
      console.error("error menghapus kelas", e);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:2000/siswa").then((response) => {
      setSiswa(response.data);
    });
  }, []);

  const state = {
    visible,
    setVisible,
    handlePertanyaan,
    table,
    setTable,
    handleDelete,
    pagination,
    setPagination,
    searchInput,
    searchedColumn,
    setSearchedColumn,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    searchText,
    setSearchText,
    kelas,
    setKelas,
    handleDeleteClass,
    siswa,
    setSiswa,
  };

  return (
    <ContextPortofolio.Provider value={state}>
      {children}
    </ContextPortofolio.Provider>
  );
}

export const usePortofolio = () => {
  const context = useContext(ContextPortofolio);
  if (context === undefined) {
    throw new Error(`usePortofolio must be use within a Network Performance`);
  }
  return context;
};

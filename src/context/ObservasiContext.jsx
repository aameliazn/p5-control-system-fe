"use client";
import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

const ContextObservasi = createContext(null);

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function ObservasiContext({ children }) {
  const [visible, setVisible] = useState(false);
  const [pertanyaan, setPertanyaan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedColumn, setSearchedColumn] = useState("");
  const [searchText, setSearchText] = useState("");
  const [kelas, setKelas] = useState([]);
  const [siswa, setSiswa] = useState([]);

  const itemsPerPage = 5;

  const searchInput = useRef(null);

  const [pagination, setPagination] = useState({
    total: pertanyaan?.length,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    current: currentPage,
    pageSize: itemsPerPage,
    showSizeChanger: false,
    position: ["bottomCenter"],
  });

  const handlePertanyaan = async (values) => {
    const activity = values;

    axios
      .post(`api/v1/observation/activity`, {
        activity,
      })
      .then((res) => {
        console.log("pertanyaan berhasil ditambahkan", res.data);
      })
      .catch((err) => {
        console.error("gagal menambah pertanyaan", err);
      });
  };

  useEffect(() => {
    axios.get("/api/v1/observation/read_all").then((response) => {
      setPertanyaan(response?.data?.data);
    });
  }, [pertanyaan]);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`/api/v1/observation/activity/${itemId}`);
      setPertanyaan(pertanyaan.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("gagal menghapus pertanyaan", error);
    }
  };

  useEffect(() => {
    axios
      .get(`/api/v1/user/students`)
      .then((response) => {
        setSiswa(response?.data?.data);
      })

      .catch((err) => {
        console.error("error menampilkan siswa", err);
      });
  }, [siswa]);

  const state = {
    visible,
    setVisible,
    handlePertanyaan,
    pertanyaan,
    setPertanyaan,
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
    siswa,
    setSiswa,
  };

  return (
    <ContextObservasi.Provider value={state}>
      {children}
    </ContextObservasi.Provider>
  );
}

export const useObservasi = () => {
  const context = useContext(ContextObservasi);
  if (context === undefined) {
    throw new Error(`useObservasi must be use within a Network Performance`);
  }
  return context;
};

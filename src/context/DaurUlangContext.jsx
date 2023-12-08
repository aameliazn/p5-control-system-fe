"use client";
import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

const ContextDaurUlang = createContext(null);

export default function DaurUlangContext({ children }) {
  const [visible, setVisible] = useState(false);
  const [ruangan, setRuangan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedColumn, setSearchedColumn] = useState("");
  const [searchText, setSearchText] = useState("");
  const [kelas, setKelas] = useState([]);
  const [siswa, setSiswa] = useState([]);
  const [dataPemilahan, setDataPemilahan] = useState();

  const itemsPerPage = 5;

  const searchInput = useRef(null);

  const [pagination, setPagination] = useState({
    total: ruangan?.length,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    current: currentPage,
    pageSize: itemsPerPage,
    showSizeChanger: false,
    position: ["bottomCenter"],
  });

  const handleRuangan = async (values) => {
    const ruangan = values;
    try {
      const response = await axios.post("http://localhost:2000/ruangan", {
        ruangan,
      });
      console.log("ruangan berhasil ditambahkan", response.data);
      window.location.reload();
    } catch (error) {
      console.error("gagal menambah data", error);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:2000/ruangan").then((response) => {
      setRuangan(response.data);
    });
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2000/ruangan/${itemId}`);
      setRuangan(ruangan.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("gagal menghapus ruangan", error);
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
    } catch (error) {
      console.error("error menghapus data", error);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:2000/siswa").then((response) => {
      setSiswa(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:2000/pemilahan").then((res) => {
      setDataPemilahan(res?.data);
    });
  }, []);

  const state = {
    visible,
    setVisible,
    handleRuangan,
    ruangan,
    setRuangan,
    handleDelete,
    currentPage,
    setCurrentPage,
    searchedColumn,
    setSearchedColumn,
    searchText,
    setSearchText,
    itemsPerPage,
    searchInput,
    pagination,
    setPagination,
    handleDeleteClass,
    kelas,
    setKelas,
    siswa,
    setSiswa,
    dataPemilahan,
    setDataPemilahan,
  };

  return (
    <ContextDaurUlang.Provider value={state}>
      {children}
    </ContextDaurUlang.Provider>
  );
}

export const useDaurUlang = () => {
  const context = useContext(ContextDaurUlang);
  if (context === undefined) {
    throw new Error(`useDaurUlang must be use within a Network Performance`);
  }
  return context;
};

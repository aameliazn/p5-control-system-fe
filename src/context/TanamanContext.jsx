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

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function TanamanContext({ children }) {
  const [visible, setVisible] = useState(false);
  const [kegiatan, setKegiatan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [kelas, useKelas] = useState([]);
  const [siswa, setSiswa] = useState([]);

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

  const handleKegiatan = async (activity, types) => {
    const typeString = Array.isArray(types) ? types.join(',') : types;
    try {
      const response = await axios.post(`/api/v1/plant/activity`, { activity, type: typeString });
      console.log("kegiatan berhasil disimpan", response.data);
    } catch (error) {
      console.error("gagal menyimpan kegiatan:", error);
    }
  };

  useEffect(() => {
    axios
      .get(`api/v1/plant/read_all`)
      .then((response) => {
        setKegiatan(response?.data?.data);
      })
      .catch((error) => {
        console.error("error mengambil data", error);
      });
  }, [kegiatan]);

  const handleDelete = async (itemId) => {
    axios
      .delete(`/api/v1/plant/activity/${itemId}`)
      .then((res) => {
        console.log("ini res", res);
      })
      .catch((err) => {
        console.log("ini err", err);
      });
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
    itemsPerPage,
    searchText,
    setSearchText,
    siswa,
    setSiswa,
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

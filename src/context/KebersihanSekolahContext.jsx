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

const ContextKebersihanSekolah = createContext(null);

export default function KebersihanSekolahContext({ children }) {
  const [visible, setVisible] = useState(false);
  const [table, setTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [kelas, setKelas] = useState([]);
  const [siswa, setSiswa] = useState([]);

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
    const activity = values?.activity;
    const condition = values?.condition;
    const score = values?.score;

    axios
      .post(`/api/v1/sanitation/activity`, {
        activity,
        condition,
        score,
      })
      .then((res) => {
        console.log("Input berhasil ditambahkan", res?.data);
      })
      .catch((err) => {
        console.error("gagal menyimpan data", err);
      });
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`/api/v1/sanitation/activity/${itemId}`);
      setTable(table.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("error menghapus data", error);
    }
  };

  useEffect(() => {
    axios.get(`/api/v1/sanitation/read_all`).then((response) => {
      setTable(response?.data?.data);
    });
  }, [table]);

  const handleDeleteClass = async (itemId) => {
    try {
      await axios.delete(`/api/v1/user/students`, { rombel: itemId });
      setKelas(kelas.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("error menghapus data", error);
    }
  };

  useEffect(() => {
    axios
      .get(`/api/v1/user/students`)
      .then((response) => {
        setKelas(response.data.data);
      })
      .catch((error) => {
        console.error("gagal mengambil data", error);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:2000/siswa").then((response) => {
      setSiswa(response.data);
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
    siswa,
    setSiswa,
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

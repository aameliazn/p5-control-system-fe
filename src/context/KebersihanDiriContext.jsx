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
  const [siswa, setSiswa] = useState([]);
  const [studentData, setStudentData] = useState([]);

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

  const handleDelete = async (itemId) => {
    axios
      .delete(`/api/v1/hygiene/activity/${itemId}`)
      .then((res) => {
        console.log("ini res", res);
      })
      .catch((err) => {
        console.log("ini err", err);
      });
  };

  useEffect(() => {
    axios
      .get(`/api/v1/hygiene/read_all`)
      .then((res) => {
        setKegiatanTable(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [kegiatanTable]);

  useEffect(() => {
    axios.get("http://localhost:2000/siswa").then((response) => {
      setSiswa(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`/api/v1/user/students`)
      .then((res) => {
        setStudentData(res?.data?.data);
      })
      .catch((err) => {
        console.error("error mengambil data", err);
      });
  }, [studentData]);

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
    siswa,
    setSiswa,
    studentData,
    setStudentData,
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

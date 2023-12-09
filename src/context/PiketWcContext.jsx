"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const ContextPiketWc = createContext(null);

export default function PiketWcContext({ children }) {
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const searchInput = useRef(null);

  const itemsPerPage = 10;

  const [pagination, setPagination] = useState({
    total: kegiatan?.length,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    current: currentPage,
    pageSize: itemsPerPage,
    showSizeChanger: false,
    position: ["bottomCenter"],
  });

  useEffect(() => {
    axios.get("http://localhost:2000/siswaPiket").then((response) => {
      setKegiatan(response.data);
      setLoading(false);
    });
  }, []);

  const state = {
    kegiatan,
    setKegiatan,
    loading,
    setLoading,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
    currentPage,
    setCurrentPage,
    searchInput,
    pagination,
    setPagination,
    itemsPerPage,
  };

  return (
    <ContextPiketWc.Provider value={state}>{children}</ContextPiketWc.Provider>
  );
}

export const usePiketWc = () => {
  const context = useContext(ContextPiketWc);
  if (context === undefined) {
    throw new Error(`usePiketWc must be use within a Network Performance`);
  }
  return context;
};

"use client";
import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const ContextMateri = createContext(null);

export default function MateriContext({ req, res, children }) {
  const [visible, setVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [kelas, setKelas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // if (req.method === "DELETE") {
  //   const itemId = parseInt(req.query.id, 10);
  //   const itemIndex = items.findIndex((item) => item.id === itemId);
  //   if (itemIndex !== -1) {
  //     items.splice(itemIndex, 1);
  //     res.status(200).end();
  //   } else {
  //     res.status(404).end();
  //   }
  // } else {
  //   res.status(405).end();
  // }

  //get data pdf
  useEffect(() => {
    axios
      .get(" http://localhost:2000/materi")
      .then((response) => {
        setUploadedFile(response.data);
      })
      .catch((error) => {
        console.error("error mengambil data", error);
      });
  }, []);

  //delete data pdf
  const handleDeletePDF = (fileId) => {
    axios
      .delete(`http://localhost:2000/${fileId}`)
      .then(() => {
        console.log("PDF berhasil dihapus");
        const UpdatePDF = uploadedFile.filter((file) => file.id !== fileId);
        setUploadedFile(UpdatePDF);
      })
      .catch((err) => {
        console.error("error hapus file", err);
      });
  };

  //data fatching
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

  //untuk delete
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2000/kelas/${itemId}`);
      setKelas(kelas.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("error menghapus data", error);
    }
  };

  const state = {
    visible,
    setVisible,
    selectedFile,
    setSelectedFile,
    uploadedFile,
    setUploadedFile,
    handleDeletePDF,
    kelas,
    setKelas,
    handleDelete,
    currentPage,
    setCurrentPage,
  };

  return (
    <ContextMateri.Provider value={state}>{children}</ContextMateri.Provider>
  );
}

export const useMateri = () => {
  const context = useContext(ContextMateri);
  if (context === undefined) {
    throw new Error(`useMateri must be use within a Network Performance`);
  }
  return context;
};

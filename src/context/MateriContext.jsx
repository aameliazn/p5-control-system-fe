"use client";
import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const ContextMateri = createContext(null);

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function MateriContext({ req, res, children }) {
  const [visible, setVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [siswa, setSiswa] = useState([]);
  const [studentData, setStudentData] = useState([]);

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

  //delete data materi
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

  //export data materi
  const exportPDF = (fileId) => {
    axios.get(`/api/v1/material/export/${fileId}`)
    .then((res) => {
      console.log('res', res?.data)
    })
    .catch((err) => {
      console.error("error hapus file", err);
    });
  };

  //data materi
  useEffect(() => {
    axios
      .get(`/api/v1/material/get-all`)
      .then((response) => {
        setUploadedFile(response?.data?.data);
      })
      .catch((error) => {
        console.error("error mengambil data", error);
      });
  }, [uploadedFile]);

  //data rombel
  useEffect(() => {
    axios
      .get(`/api/v1/user/students`)
      .then((response) => {
        setStudentData(response?.data?.data);
      })
      .catch((error) => {
        console.error("error mengambil data", error);
      });
  }, [studentData]);

  useEffect(() => {
    axios.get("http://localhost:2000/siswa").then((response) => {
      setSiswa(response?.data);
    });
  }, []);

  // //fatching endpoint xlsx
  // useEffect(() => {
  //   const endpointXlsx = '';
  //   axios.get(endpointXlsx, {responseType: 'arrayBuffer'})
  //   .then((response) => {
  //     const data = response.data;
  //     setXlsxData(data);
  //   }) .catch((e) => {
  //     console.error('gagal export xlsx',  e);
  //   })
  // })

  const state = {
    visible,
    setVisible,
    selectedFile,
    setSelectedFile,
    uploadedFile,
    setUploadedFile,
    handleDeletePDF,
    currentPage,
    setCurrentPage,
    siswa,
    setSiswa,
    studentData,
    setStudentData,
    exportPDF
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

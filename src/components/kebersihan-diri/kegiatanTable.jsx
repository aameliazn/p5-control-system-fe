"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useRouter } from "next/navigation";
import axios from "axios";
import Style from "./style.module.css";
import { AiOutlineDelete } from "react-icons/ai";

export default function kegiatanTable() {
  const [kegiatan, setKegiatan] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get(" http://localhost:2000/kegiatan").then((response) => {
      setKegiatan(response.data);
    });
  }, []);

  //delete
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2000/kegiatan/${itemId}`);
      setKegiatan(kegiatan.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("error menghapus data", error);
    }
  };

  const pushRoute = () => {
    router.push("");
  };

  const columnKegiatan = [
    {
      title: "Id",
      dataIndex: "id",
      rowScope: "row",
      width: 8,
    },
    {
      title: "Kegiatan",
      dataIndex: "kegiatan",
      fixed: "center",
      width: 100,
    },
    {
      title: "Action",
      fixed: "right",
      width: 30,
      render: (text, record) => (
        <a onClick={() => handleDelete(record.id)}>
          <AiOutlineDelete color={"red"} size={27} />
        </a>
      ),
    },
  ];
  return (
    <>
      <Table
        columns={columnKegiatan}
        dataSource={kegiatan}
        pagination={{
          pageSize: 10,
        }}
        scroll={{
          y: 350,
        }}
        className={Style.tableAnt}
      />
    </>
  );
}

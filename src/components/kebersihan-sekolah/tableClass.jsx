"use client";

import React, { useState, useEffect } from "react";
import Style from "./style.module.css";
import axios from "axios";
import {Table} from "antd";
import { AiOutlineDelete } from "react-icons/ai";
export default function tableClass() {

  const [table, setTable] = useState([]);

  //get data
  useEffect(() => {
    axios.get("http://localhost:2000/kegiatan").then((response) => {
      setTable(response.data);
    });
  }, []);

  //delete
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(` http://localhost:2000/kegiatan/${itemId}`);
      setTable(table.filter((item) => item.id !== itemId));
    }catch (error) {
      console.error("error menghapus data", error);
    }
  };


  const tableKegiatan = [
    {
      title: "id",
      dataIndex: "id",
      rowScope: "row",
      width: 20,
    },
    {
      title: "Kegiatan",
      dataIndex: "kegiatan",
      fixed: "center",
      width: 100,
    },
    {
      title: "kondisi",
      dataIndex: "kondisi",
      fixed: "center",
      width: 100,
    },
    {
      title: "skor",
      dataIndex: "skor",
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
        columns={tableKegiatan}
        dataSource={table}
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

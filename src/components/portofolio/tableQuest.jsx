"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";
import Style from "./style.module.css";
import { AiOutlineDelete } from "react-icons/ai";

export default function tableQuest() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/pertanyaan").then((response) => {
      setTable(response.data);
    });
  }, []);

  //delete
  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:2000/pertanyaan/${itemId}`);
      setTable(table.filter((item) => item.id !== itemId));
    } catch (e) {
      console.error("gagal menghapus pertanyaan", e);
    }
  };
  const columnTable = [
    {
      title: "Id",
      dataIndex: "id",
      rowScope: "row",
      width: 8,
    },
    {
      title: "Pertanyaan",
      dataIndex: "pertanyaan",
      fixed: "center",
      width: 100,
    },
    {
      title: "Action",
      fixed: "right",
      width: 30,
      render: (record) => (
        <a onClick={() => handleDelete(record.id)}>
          <AiOutlineDelete color={"red"} size={27} />
        </a>
      ),
    },
  ];
  return (
    <>
    <Table
        columns={columnTable}
        dataSource={table}
        pagination={{ pageSize: 10 }}
        scroll={{ y: 350 }}
        className={Style.tableAnt}
      />
    </>
  )
}

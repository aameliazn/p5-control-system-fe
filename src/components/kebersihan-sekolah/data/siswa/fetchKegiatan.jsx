"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";
import Style from "./style.module.css";

export default function fetchKegiatan() {
  const [kegiatan, setKegiatan] = useState([]);

  //get data
  useEffect(() => {
    axios.get("http://localhost:2000/kegiatan").then((response) => {
      setKegiatan(response.data);
    });
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      rowScope: "row",
      width: 20,
    },
    {
      title: "Kegiatan",
      dataIndex: "kegiatan",
      width: 100,
    },
    {
      title: "kondisi",
      dataIndex: "kondisi",
      width: 100,
    },
    {
      title: "skor",
      dataIndex: "skor",
      width: 100,
    },
  ];
  return (
    <>
      <div>Data Siswa A</div>
      <Table
        columns={columns}
        dataSource={kegiatan}
        pagination={{
          pageSize: 10,
        }}
        title={() => (
          <div style={{ textAlign: "center", fontWeight: "700" }}>
            Kebersihan sekolah minggu 1
            <div style={{ textAlign: "left", color: "#3F7600" }}>
              {/* masih pake data dummy biasa, blum pake data fetch API */}
              Pajajaran Lantai 2
            </div>
          </div>
        )}
        scroll={{
          y: 380,
        }}
        className={Style.tableAnt}
      />
      <Table
        columns={columns}
        dataSource={kegiatan}
        pagination={{
          pageSize: 10,
        }}
        title={() => (
          <div style={{ textAlign: "center", fontWeight: "700" }}>
            Kebersihan sekolah minggu 2
            <div style={{ textAlign: "left", color: "#3F7600" }}>
              {/* masih pake data dummy biasa, blum pake data fetch API */}
              Pajajaran Lantai 2
            </div>
          </div>
        )}
        scroll={{
          y: 380,
        }}
        className={Style.tableAnt}
      />
    </>
  );
}

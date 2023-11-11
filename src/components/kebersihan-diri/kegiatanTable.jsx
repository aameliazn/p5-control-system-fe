"use client";
import React from "react";
import { Table } from "antd";
import Style from "./style.module.css";
import { useKebersihanDiri } from "@/context/KebersihanDiriContext";


export default function kegiatanTable() {
  const {kegiatanTable, columnKegiatan } = useKebersihanDiri();
  
  return (
    <>
      <Table
        columns={columnKegiatan}
        dataSource={kegiatanTable}
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

"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Style from "./style.module.css";
import { Table } from "antd";

export default function fetchTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2000/pemilahan").then((response) => {
      setData(response.data);
    });
  }, []);

  const dataColumns = [
    {
      title: "Id",
      dataIndex: "id",
      rowScope: "row",
      width: 30,
    },
    {
      title: "Berat Dalam Ke",
      children: [
        {
          title: "An-organik",
          children: [
            {
              title: "Bruto",
              dataIndex: "bruto",
              width: 100,
            },
            {
              title: "Neto",
              dataIndex: "neto",
              width: 100,
            },
          ],
        },
        {
          title: "Residu",
          children: [
            {
              title: "Bruto",
              dataIndex: "bruto",
              width: 100,
            },
            {
              title: "Neto",
              dataIndex: "neto",
              width: 100,
            },
          ],
        },
        {
          title: "Organik",
          children: [
            {
              title: "Bruto",
              dataIndex: "bruto",
              width: 100,
            },
            {
              title: "Neto",
              dataIndex: "neto",
              width: 100,
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
       <Table
        columns={dataColumns}
        dataSource={data}
        pagination={{
          pageSize: 10,
        }}
        title={() => (
          <div style={{ textAlign: "center", fontWeight: "700" }}>
            Pemilahan Sampah Minggu 1
          </div>
        )}
        scroll={{
          y: 380,
        }}
        className={Style.tableAnt}
      />
      <Table
        columns={dataColumns}
        dataSource={data}
        pagination={{
          pageSize: 10,
        }}
        title={() => (
          <div style={{ textAlign: "center", fontWeight: "700" }}>
            Pemilahan Sampah Minggu 2
          </div>
        )}
        scroll={{
          y: 380,
        }}
        className={Style.tableAnt}
      />
        <Table
        columns={dataColumns}
        dataSource={data}
        pagination={{
          pageSize: 10,
        }}
        title={() => (
          <div style={{ textAlign: "center", fontWeight: "700" }}>
            Pemilahan Sampah Minggu 3
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

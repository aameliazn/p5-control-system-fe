"use client";
import React, { useState, useEffect } from "react";
import { Pie, Column } from "@ant-design/charts";
import { Card } from "antd";
import axios from "axios";

export default function chart() {
  const [milahSampah, setMilahSampah] = useState([]);
//   const [totalJenis, setTotalJenis] = useState([]);

  //data chart milah sampah
  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        const data = response.data;
        setMilahSampah(data);
      })
      .catch((err) => {
        console.error("gagal mengambil data", err);
      });
  }, []);

  //data chart total jenis
//   useEffect(() => {
//     axios
//       .get("")
//       .then((response) => {
//         const data = response.data;
//         setTotalJenis(data);
//       })
//       .catch((err) => {
//         console.error("gagal mengambil data", err);
//       });
//   }, []);

  //data dummy
  const data = [
    { type: "Mengerjakan", value: 55 },
    { type: "Belum", value: 30 },
  ];

  const dataColumn = [
    { week: "Minggu 1", type: "Mengerjakan", value: 20 },
    { week: "Minggu 1", type: "Belum", value: 10 },
    { week: "Minggu 2", type: "Mengerjakan", value: 18 },
    { week: "Minggu 2", type: "Belum", value: 12 },
    { week: "Minggu 3", type: "Mengerjakan", value: 25 },
    { week: "Minggu 3", type: "Belum", value: 15 },
    { week: "Minggu 4", type: "Mengerjakan", value: 22 },
    { week: "Minggu 4", type: "Belum", value: 8 },
  ];

  //chart laporan milah sampah
  const milahSampahData = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      style: { textAlign: "center" },
      autoRotate: false,
      content: "{value}%",
    },
    interactions: [{ type: "element-active" }],
    color: ({ type }) => {
      if (type === "Belum") {
        return "red";
      }
      return "#73d802";
    },
  };
  const columnConfig = {
    data: dataColumn,
    xField: "week",
    yField: "value",
    seriesField: "type",
    isStack: true, // Jika ingin batang stapel
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    meta: {
      value: {
        alias: "Jumlah",
      },
      week: {
        alias: "Minggu",
      },
      type: {
        alias: "Jenis Sampah",
      },
    },
    color: ({ type }) => {
      if (type === "Belum") {
        return "red";
      }
      return "#73d802";
    },
    
  };

  return (
    <>
      <div className="flex flex-warp justify-around gap-4">
        <Card
          title="Laporan Pengerjaan Siswa"
          style={{ width: "100%", height: "55vh", alignItems: "center" }}
          className="rounded-lg shadow-xl shadow-gray-100"
        >
          <Pie {...milahSampahData} style={{ width: 450, height: 300 }} />
        </Card>

        <Card
          title="Laporan Pengerjaan Per-Minggu"
          style={{ width: "100%", height: "55vh", alignItems: "center" }}
          className="rounded-lg shadow-xl shadow-gray-100"
        >
          <Column {...columnConfig} style={{ width: 550, height: 300 }} />
        </Card>
      </div>
    </>
  );
}

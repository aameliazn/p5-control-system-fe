"use client";
import React, { useState, useEffect } from "react";
import { Pie, Column } from "@ant-design/charts";
import { Card } from "antd";
import axios from "axios";

export default function chart() {
  const [milahSampah, setMilahSampah] = useState([]);
  const [totalJenis, setTotalJenis] = useState([]);

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
  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        const data = response.data;
        setTotalJenis(data);
      })
      .catch((err) => {
        console.error("gagal mengambil data", err);
      });
  }, []);

  //data dummy
  const data = [
    { type: "Data Terisi", value: 25 },
    { type: "Data Kosong", value: 30 },
  ];

  const dataColumn = [
    { type: "Residu", value: 25 },
    { type: "Organik", value: 30 },
    { type: "Anorganik", value: 10 },
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
      if (type === "Data Kosong") {
        return "red";
      }
      return "#73d802";
    },
  };
  const columnConfig = {
    data: dataColumn,
    xField: "type",
    yField: "value",
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
      type: {
        alias: "Jenis Sampah",
      },
    },
    color: ({ type }) => {
        if (type === "Residu") {
          return "#FFC907"; 
        } else if (type === "Organik") {
          return "#22AB00";
        } else if (type === "Anorganik") {
          return "#FA00FF"; 
        }
        return "#CCCCCC"; 
      },
  };

  return (
    <>
      <div className="flex flex-warp justify-around gap-4">
        <Card
          title="Laporan Pemilahan Sampah"
          style={{ width: "100%", height: "55vh", alignItems: "center" }}
          className="rounded-lg shadow-xl shadow-gray-100"
        >
          <Pie {...milahSampahData} style={{ width: 450, height: 300 }} />
        </Card>

        <Card
          title="Total Jenis Sampah"
          style={{ width: "100%", height: "55vh", alignItems: "center" }}
          className="rounded-lg shadow-xl shadow-gray-100"
        >
          <Column {...columnConfig} style={{ width: 450, height: 300 }} />
        </Card>
      </div>
    </>
  );
}

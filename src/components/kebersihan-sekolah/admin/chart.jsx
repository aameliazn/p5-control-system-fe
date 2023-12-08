'use client'
import React, {useState, useEffect} from 'react'
import { Pie } from '@ant-design/charts';
import { Card} from "antd";
import axios from "axios";
export default function chart() {
  const [chartDiri, setChartDiri] = useState([]);
  const [chartSekolah, setChartSekolah] = useState([]);


  //data chart kebersihan diri
  useEffect(() => {
    axios.get('').then((response) => {
      const data = response.data;
      setChartDiri(data);
    })
    .catch((err) => {
      console.error('gagal mengambil data', err);
    })
  }, []);

  //data chart kebersihan sekolah
  useEffect(() => {
    axios.get('').then((response) => {
      const data = response.data;
      setChartSekolah(data);
    })
    .catch((err) => {
      console.error('gagal mengambil data', err);
    })
  }, []);

  //data dummy
  const data = [
    { type: 'Mengerjakan', value: 25 },
    { type: 'Belum', value: 30 },
  ];
  
  //chart kebersihan diri
  const kebersihanDiri = {
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
    //chart kebersihan sekolah
    const kebersihanSekolah = {
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

  return (
<>
<div className="flex flex-warp justify-around gap-4">
        <Card title="Laporan Pengerjaan Kebersihan Sekolah"
          style={{ width: "100%", height: "55vh", alignItems: 'center' }}
          className="rounded-lg shadow-xl shadow-gray-100"
        >
         <Pie {...kebersihanSekolah} style={{ width: 450, height: 300 }}/>
        </Card>

        <Card title="Laporan Pengerjaan Kebersihan diri"
          style={{ width: "100%", height: "55vh", alignItems: 'center' }}
          className="rounded-lg shadow-xl shadow-gray-100"
        >
         <Pie {...kebersihanDiri} style={{ width: 450, height: 300 }}/>
        </Card>
      </div>
</>
  )
}

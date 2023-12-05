'use client'
import React, {useEffect, useState} from 'react'
import { Card, Table, Spin } from 'antd'
import { Pie } from "@ant-design/charts";
import axios from 'axios'
import Style from './style.module.css'

export default function tanaman() {
    const [tanaman, setTanaman] = useState([]);
    const [absensi, setAbsensi] = useState([]);
    const [loading, setLoading] = useState(true);
    const [kehadiran, setKehadiran] = useState([]);

//get data chart Kehadiran
useEffect(() => {
    axios
      .get("")
      .then((response) => {
        const data = response.data;
        setKehadiran(data);
      })
      .catch((err) => {
        console.error("gagal mengambil data", err);
      });
  }, []);

  //get table tanaman
    useEffect(() => {
        axios.get("http://localhost:2000/pertanyaan").then((response) => {
            setTanaman(response.data);
            setLoading(false);
        }).catch((err) => {
            console.error('gagal mengambil data', err);
        });

    },[])

    const tableTanaman = [
      {
        title: "No",
        width: 30,
        render: (text, record, index) => index + 1,
      },
        {
            title: "Tanaman",
            dataIndex: "pertanyaan",
            width: 100,
        },
        {
            title: "Terkumpul",
            dataIndex: "pertanyaan",
            width: 100,
        }
    ]
    
  //data dummy
  const data = [
    { type: "Hadir", value: 25 },
    { type: "Tidak Hadir", value: 30 },
  ];

  //chart Kehadiran
  const kehadiranData = {
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
      if (type === "Tidak Hadir") {
        return "red";
      }
      return "#73d802";
    },
  };
    
  return (
    <>
     <div className="flex flex-warp justify-around gap-4">
        <Card
          title="Absensi Siswa"
          style={{ width: "100%", height: "65vh", alignItems: "center" }}
          className="rounded-lg shadow-xl shadow-gray-100"
        >
     <Pie {...kehadiranData} style={{ width: 550, height: 350 }} />
        </Card>
        <Card
          title="Data Tanaman"
          style={{ width: "100%", height: "65vh", alignItems: "center" }}
          className="rounded-lg shadow-xl shadow-gray-100"
        >
         <Spin spinning={loading}>
    <Table
       columns={tableTanaman}
       dataSource={tanaman}
       pagination={{
         pageSize: 10,
       }}
       scroll={{
         y: 200,
       }}
       className={Style.tableAnt}
     />
        </Spin>
        </Card>
      </div>
    </>
  )
}

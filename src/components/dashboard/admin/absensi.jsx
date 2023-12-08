'use client'
import React, { useEffect, useState } from "react";
import { Card, Table, Spin, Checkbox } from "antd";
import axios from "axios";
import Style from "./style.module.css";

export default function absensi() {
  const [absensi, setAbsensi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});


  useEffect(() => {
    const storedCheckedItems = JSON.parse(localStorage.getItem('checkedItems')) || {};
    setCheckedItems(storedCheckedItems);

    fetchData();
  }, []);
  

  const fetchData = () => {
    axios
      .get("http://localhost:2000/siswa")
      .then((response) => {
        setAbsensi(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("gagal mengambil data", err);
      });
  };


  const tableAbsensi = [
    {
      title: "No",
      width: 20,
      render: (text, record, index) => index + 1,
    },
    {
      title: "Nama",
      dataIndex: "nama",
      width: 100,
    },
    {
      title: "Rayon",
      dataIndex: "rayon",
      width: 100,
    },
    {
        title: "Status",
        dataIndex: "status",
        width: 100,
      },
    {
        title: "Pilih",
        dataIndex: "checkbox",
        width: 50,
        render: (_, record) => (
          <Checkbox
            checked={checkedItems[record.status]}
            disabled={checkedItems[record.status]}
            onChange={(e) => handleCheckboxChange(e, record)}
          />
        ),
      },
        
  ];
  const handleCheckboxChange = (e, record) => {
    const { checked } = e.target;
    if (checked) {
      const updatedCheckedItems = { ...checkedItems, [record.status]: true };
      setCheckedItems(updatedCheckedItems);
      localStorage.setItem('checkedItems', JSON.stringify(updatedCheckedItems));
      const updatedData = { ...record, status: 'Hadir' };
      axios
        .put(`http://localhost:2000/siswa/${record.id}`, updatedData)
        .then((response) => {
          fetchData();
        })
        .catch((err) => {
          console.error("gagal mengupdate data", err);
        });
    }
  };
  
  return (
    <Card
      title="Absensi Siswa"
      style={{ width: "100%", height: "65vh", alignItems: "center" }}
      className="rounded-lg shadow-xl shadow-gray-100"
    >
      <Spin spinning={loading}>
        <Table
          columns={tableAbsensi}
          dataSource={absensi}
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
  );
}

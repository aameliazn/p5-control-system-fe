"use client";
import React, { useState, useEffect } from "react";
import { Pie, Column } from "@ant-design/charts";
import { Card, Col, Button, Modal, Input } from "antd";
import axios from "axios";
const { Meta } = Card;
export default function chart() {
  const [milahSampah, setMilahSampah] = useState([]);
  const [kegiatan, setKegiatan] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredKegiatan, setFilteredKegiatan] = useState([]);
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

    axios
      .get("http://localhost:2000/kegiatan")
      .then((response) => {
        const data = response.data;
        setKegiatan(data);
        setFilteredKegiatan(
          data.filter((item) =>
            item.kegiatan.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      })
      .catch((err) => {
        console.error("gagal mengambil data", err);
      });
  }, [searchTerm]);

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

  //   const dataColumn = [
  //     { type: "Residu", value: 25 },
  //     { type: "Organik", value: 30 },
  //     { type: "Anorganik", value: 10 },
  //   ];

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
  //   const columnConfig = {
  //     data: dataColumn,
  //     xField: "type",
  //     yField: "value",
  //     label: {
  //       position: "middle",
  //       style: {
  //         fill: "#FFFFFF",
  //         opacity: 0.6,
  //       },
  //     },
  //     meta: {
  //       value: {
  //         alias: "Jumlah",
  //       },
  //       type: {
  //         alias: "Jenis Sampah",
  //       },
  //     },
  //     color: ({ type }) => {
  //         if (type === "Residu") {
  //           return "#FFC907";
  //         } else if (type === "Organik") {
  //           return "#22AB00";
  //         } else if (type === "Anorganik") {
  //           return "#FA00FF";
  //         }
  //         return "#CCCCCC";
  //       },
  //   };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
          title="Tugas Siswa"
          style={{ width: "100%", height: "55vh", alignItems: "center" }}
          className="rounded-lg shadow-xl shadow-gray-100"
        >
          {kegiatan.length > 0 ? (
            kegiatan.slice(0, 2).map((item, index) => (
              <Card
                key={index}
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded  bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Meta title={item?.kegiatan} description="Status: " />
              </Card>
            ))
          ) : (
            <Col span={24} className="text-center mt-4">
              <p>Tidak ada kegiatan yang ditemukan</p>
            </Col>
          )}
          <Button type="primary" className="mt-4" onClick={showModal}>
            Lihat Semua
          </Button>
          <Modal
            title={(  <Input
              type="text"
              placeholder="Cari Tugas Siswa..."
              allowClear
              className="w-[95%]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />)}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            bodyStyle={{ maxHeight: '50vh', overflow: 'auto' }}
          >
            {filteredKegiatan.length > 0 ? (
              filteredKegiatan.map((item, index) => (
                <Card
                  key={index}
                  style={{ borderBottom: "3px solid green" }}
                  className="flex flex-row justify-between rounded  bg-white border border-gray-200 shadow hover:bg-gray-100"
                >
                  <Meta title={item?.kegiatan} description="Status: " />
                </Card>
              ))
            ) : (
              <Col span={24} className="text-center mt-4">
                <p>Tidak ada kegiatan yang ditemukan</p>
              </Col>
            )}
          </Modal>
          {/* <Column {...columnConfig} style={{ width: 450, height: 300 }} /> */}
        </Card>
      </div>
    </>
  );
}

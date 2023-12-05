"use client";
import React, { useEffect, useClient, useState } from "react";
import { Avatar, Card, Row, Col, Input, } from "antd";
const { Meta } = Card;
import axios from "axios";
export default function siswa() {
  const [siswa, setSiswa] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSiswa, setFilteredSiswa] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/siswa")
      .then((response) => {
        const data = response.data;
        setSiswa(data);
        setFilteredSiswa(
          data.filter((item) =>
            item.nama.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      })
      .catch((err) => {
        console.error("gagal mengambil data", err);
      });
  }, [searchTerm]);
  return (
    <>
      <Card
        style={{ width: "100%", alignItems: "center" }}
        title="Cek Pengerjaan Siswa PPLG XII-2"
        className="rounded-lg shadow-xl mt-4 shadow-gray-100"
        bodyStyle={{ maxHeight: '70vh', overflow: 'auto' }}
        extra={
          <Input
            type="text"
            placeholder="Cari siswa..."
            allowClear
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        }
      >
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 14,
            lg: 32,
          }}
        >
          {filteredSiswa.length > 0 ? (
            filteredSiswa.map((item, index) => (
              <Col key={index} className="gutter-row mt-4" span={6}>
                <Card
                  key={index}
                  style={{ borderBottom: "3px solid green" }}
                  className="flex flex-row justify-between rounded  bg-white border border-gray-200 shadow hover:bg-gray-100"
                >
                  <Meta
                    title={item?.nama}
                    description="Status: "
                  />
                </Card>
              </Col>
            ))
          ) : (
            <Col span={24} className="text-center mt-4">
              <p>Tidak ada siswa yang ditemukan</p>
            </Col>
          )}
        </Row>
      </Card>
    </>
  );
}

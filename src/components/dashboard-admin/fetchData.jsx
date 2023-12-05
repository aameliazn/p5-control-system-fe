'use client'
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Pagination, Row, Input } from "antd";
import axios from "axios";

const { Meta } = Card;
const { Search } = Input;

export default function fetchData() {
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [searchKegiatan, setSearchKegiatan] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:2000/kegiatan")
      .then((response) => {
        setKegiatan(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("gagal memasukan data", err);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredKegiatan = kegiatan.filter((item) =>
    item.kegiatan.toLowerCase().includes(searchKegiatan.toLowerCase())
  );

  const currentItems = filteredKegiatan.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (value) => {
    setSearchKegiatan(value);
    setCurrentPage(1);
  };
  return (
    <>
      <div className="flex flex-wrap justify-around gap-4">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <Col key={index} className="gutter-row mt-4" span={6}>
              <Card
                key={index}
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Meta
                  title={item?.kegiatan}
                  style={{ maxWidth: "200px" }}
                  description={(
                    <Button>Check</Button>
                  )}
                />
              
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24} className="text-center mt-4">
            <p>Tidak ada kegiatan yang ditemukan</p>
          </Col>
        )}
      </div>
      <div className="flex justify-between">
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={filteredKegiatan.length}
        onChange={handlePageChange}
        className="mt-4"
      />
       <Search
        placeholder="Cari kegiatan"
        allowClear
        size="middle"
        onSearch={handleSearch}
        className="mt-4"
        style={{width: '20vw'}}
      />
        </div>
    </>
  );
}

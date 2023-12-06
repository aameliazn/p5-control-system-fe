"use client";
import React, { useState, useEffect } from "react";
import { Table, Button, Spin, Space, Input } from "antd";
import Style from "./style.module.css";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";

export default function TableComponent() {
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:2000/siswaPiket").then((response) => {
      setKegiatan(response.data);
      setLoading(false);
    });
  }, []);

  const column = [
    {
      title: "id",
      dataIndex: "id",
      rowScope: "row",
      width: 8,
    },
    {
      title: "Nama",
      dataIndex: "nama",
      fixed: "center",
      width: 50,
    },
    {
      title: "Rombel",
      dataIndex: "rombel",
      fixed: "center",
      width: 20,
    },
    {
      title: "Rayon",
      dataIndex: "rayon",
      fixed: "center",
      width: 20,
    },
    
    {
        title: "kode",
        dataIndex: "code",
        fixed: "center",
        width: 20,
      },
      {
        title: 'Tempat Piket',
        dataIndex: 'tempatPiket',
        fixed: 'center',
        width: 30,
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder="Cari Tempat Piket"
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => confirm()}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                onClick={confirm}
                size="small"
                style={{ width: 90 }}
              >
                Cari
              </Button>
              <Button onClick={clearFilters} type="danger" size="small" style={{ width: 90 }}>
                Reset
              </Button>
            </Space>
          </div>
        ),
        onFilter: (value, record) =>
          record.tempatPiket.toLowerCase().includes(value.toLowerCase()),
      },
      {
        title: 'Sesi',
        dataIndex: 'sesi',
        fixed: 'center',
        width: 20,
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder="Cari Sesi"
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => confirm()}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                onClick={confirm}
                size="small"
                style={{ width: 90 }}
              >
                Cari
              </Button>
              <Button onClick={clearFilters} size="small" type="danger"style={{ width: 90 }}>
                Reset
              </Button>
            </Space>
          </div>
        ),
        onFilter: (value, record) => record.sesi.toLowerCase().includes(value.toLowerCase()),
      },
    {
      title: "Dibersihkan",
      fixed: "right",
      width: 20,
      render: () => (
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Spin spinning={loading}>
        <div className="p-2 flex gap-2">
          <div>
            <Button>Export</Button>
          </div>
          <div>
            <Button>Submit</Button>
          </div>
        </div>
        <Table
          columns={column}
          dataSource={kegiatan}
          pagination={{
            pageSize: 10,
          }}
          scroll={{
            y: 380,
          }}
          className={Style.tableAnt}
        />
      </Spin>
    </>
  );
}

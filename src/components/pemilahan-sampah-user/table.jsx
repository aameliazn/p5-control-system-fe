"use client";
import React, { useState, useEffect } from "react";
import { Table, Button, Spin, Space, Input } from "antd";
import Style from "./style.module.css";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";

export default function table() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:2000/pemilahan").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  
  const dataColumns = [
   
    {
      title: "Berat Dalam Ke",
      children: [
        {
            title: "Ruangan",
            dataIndex: "ruangan",
            width: 50,
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
              <div style={{ padding: 8 }}>
                <Input
                  placeholder="Cari Ruangan"
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
              record.ruangan.toLowerCase().includes(value.toLowerCase()),
          },
        {
          title: "An-organik",
          children: [
            {
              title: "Bruto",
              dataIndex: "bruto",
              width: 50,
            },
            {
              title: "Neto",
              dataIndex: "neto",
              width: 50,
            },
          ],
        },
        {
          title: "Residu",
          children: [
            {
              title: "Bruto",
              dataIndex: "bruto",
              width: 50,
            },
            {
              title: "Neto",
              dataIndex: "neto",
              width: 50,
            },
          ],
        },
        {
          title: "Organik",
          children: [
            {
              title: "Bruto",
              dataIndex: "bruto",
              width: 50,
            },
            {
              title: "Neto",
              dataIndex: "neto",
              width: 50,
            },
          ],
        },
      ],
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
            <Button>Report</Button>
          </div>
        </div>
     <Table
        columns={dataColumns}
        dataSource={data}
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
  )
}

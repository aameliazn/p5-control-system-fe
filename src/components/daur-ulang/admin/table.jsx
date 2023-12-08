"use client";
import React, { useState, useEffect } from "react";
import { Table, Button, Spin, Space, Input, Card } from "antd";
import Style from "./style.module.css";
import axios from "axios";

export default function table() {
    const [milah, setMilah] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:2000/pemilahan").then((response) => {
          setMilah(response.data );
          setLoading(false);
        });
      }, []);
    
      const configTable = [
   
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
    <Card
     style={{ width: "100%", alignItems: "center" }}
     className="rounded-lg shadow-xl mt-4 shadow-gray-100"
    >
    <Spin spinning={loading}>
    <Table
       columns={configTable}
       dataSource={milah}
       pagination={{
         pageSize: 10,
       }}
       scroll={{
         y: 380,
       }}
       className={Style.tableAnt}
     />
        </Spin>
        <div className="p-2 flex gap-2">
         <div>
           <Button>Export</Button>
         </div>
         <div>
           <Button>Report</Button>
         </div>
       </div>
        </Card>
       
   </>
  )
}

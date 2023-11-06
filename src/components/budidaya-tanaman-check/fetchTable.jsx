'use client'

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Table } from 'antd'
import Style from './style.module.css'

export default function fetchTable() {
    const [kegiatan, setKegiatan] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:2000/kegiatan").then((response) => {
            setKegiatan(response.data);
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
            title: "Kegiatan",
            dataIndex: "kegiatan",
            width: 50,
          },
          {
            title: "Ya",
            fixed: "right",
            width: 10,
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
          {
            title: "Tidak",
            fixed: "right",
            width: 10,
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

    ]
  return (
    <>
    <Table
      columns={column}
      dataSource={kegiatan}
      pagination={{
        pageSize: 10,
      }}
      title={() => (
        <div style={{ textAlign: "center", fontWeight: "700" }}>
          Minggu Pertama
          <div style={{textAlign: "left", display: "flex", color: "#4c8e06", gap: "10px" }}>
            <div>Tinggi Toga : <span style={{color: "#095DCA"}}>10cm</span></div>
            <div>Hasil Observasi : <span style={{color: "#878787"}}>Ini Itu</span></div> 
          </div>
        </div>
      )}
      scroll={{
        y: 380,
      }}
      className={Style.tableAnt}
    />

    {/* belum dibedain, masih di data yang sama */}
    <Table
      columns={column}
      dataSource={kegiatan}
      pagination={{
        pageSize: 10,
      }}
      title={() => (
        <div style={{ textAlign: "center", fontWeight: "700" }}>
          Minggu Kedua
          <div style={{textAlign: "left", display: "flex", color: "#4c8e06", gap: "10px" }}>
            <div>Tinggi Toga : <span style={{color: "#095DCA"}}>10cm</span></div>
            <div>Hasil Observasi : <span style={{color: "#878787"}}>Ini Itu</span></div> 
          </div>
        </div>
      )}
      scroll={{
        y: 380,
      }}
      className={Style.tableAnt}
    />
  </>
  );
}

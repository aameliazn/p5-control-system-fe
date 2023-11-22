"use client";
import React, { useState, useEffect } from "react";
import { Table, Button, Spin } from "antd";
import Style from "./style.module.css";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";

export default function fetchData() {
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:2000/kegiatan").then((response) => {
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
      title: "Kegiatan",
      dataIndex: "kegiatan",
      fixed: "center",
      width: 50,
    },
    {
      title: "Ya",
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
    {
        title: "Tidak",
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
        <div className="flex justify-between">
        <div className="flex items-center gap-3 mt-2">
        <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
            Tinggi TOGA .. CM
          </span>
          <span className="bg-[#4c8e064c] text-[#4c8e06] rounded-full px-3 py-1 text-sm">
            Hasil Observasi TOGA ...
          </span>
        </div>
        <div className="p-2 flex gap-2">
          <div>
            <Button>Export</Button>
          </div>
          <div>
            <Button>Submit</Button>
          </div>
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

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";
import Style from "./style.module.css";

export default function fetchSiswa() {
  const [kegiatan, setKegiatan] = useState([]);
  useEffect(() => {
    axios.get(" http://localhost:2000/kegiatan").then((response) => {
      setKegiatan(response.data);
    });
  }, []);

  const columns = [
    {
      title: "Id",
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
      title: "2",
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
      title: "3",
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
      title: "4",
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
      title: "5",
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
      title: "6",
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
      title: "7",
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
      title: "8",
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
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={kegiatan}
        pagination={{
          pageSize: 10,
        }}
        title={() => (
          <div style={{ textAlign: "center", fontWeight: "700" }}>
            Minggu Pertama
          </div>
        )}
        scroll={{
          y: 380,
        }}
        className={Style.tableAnt}
      />

      {/* belum dibedain, masih di data yang sama */}
      <Table
        columns={columns}
        dataSource={kegiatan}
        pagination={{
          pageSize: 10,
        }}
        title={() => (
          <div style={{ textAlign: "center", fontWeight: "700" }}>
            Minggu Kedua
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

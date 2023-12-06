'use client'
import React, {useState, useEffect} from 'react'
import { Table, Button, Spin } from 'antd';
import Style from './style.module.css'
import axios from 'axios'
export default function table() {
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

  ]
  return (
    <>
    <Spin spinning={loading}> 
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
  )
}

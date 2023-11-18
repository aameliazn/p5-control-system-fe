"use client";

import React, {useState, useEffect} from "react";
import { Table, Button, Spin } from "antd";
import Style from "./style.module.css";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
export default function kegiatanTable() {
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
      fixed: "right",
      width: 30,
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
    <div className="relative flex flex-col jus items-center overflow-hidden p-2 sm:py-10  ">
      <div className="bg-white  shadow-xl shadow-gray-100 w-full flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4   border-b-2 border-[var(--main-color)] rounded-lg">
      <Spin spinning={loading}>
        <div className="flex justify-between">
      <div className="flex items-center gap-3 mt-2">
        <span className="font-bold rounded-full px-3 py-1 text-md">
            Kegiatan
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
            pageSize: 2,
          }}
          scroll={{
            y: 380,
          }}
          className={Style.tableAnt}
        />
      </Spin>
      </div>
    </div>
  );
}

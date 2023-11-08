"use client";
import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import { useRouter } from "next/navigation";
import { Table } from "antd";
import axios from "axios";

export default function fetchKelas() {
  const [siswa, setSiswa] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get("http://localhost:2000/siswa").then((response) => {
      setSiswa(response.data);
    });
  }, []);

  const pushRoute = () => {
    router.push(`/kebersihan-diri-siswa/1`);
  };
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      rowScope: "row",
      width: 10,
    },
    {
      title: "Nama",
      dataIndex: "nama",
      width: 50,
    },
    {
      title: "Checklist",
      dataIndex: "data",
      width: 50,
    },
    {
      title: "Action",
      fixed: "right",
      width: 50,
      render: () => (
        <a
          className="focus:outline-none text-white bg-[#73d802] hover:text-white hover:bg-[#4c8e06] focus:ring-4 focus:ring-[#73d802] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#73d802]  dark:hover:bg-[#4c8e06] dark:focus:ring-[#4c8e06]"
          onClick={pushRoute}
        >
          Kegiatan
        </a>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={siswa}
        pagination={{
          pageSize: 10,
        }}
        scroll={{
          y: 380,
        }}
        title={() => (
          <div style={{ textAlign: "left", fontWeight: "700", gap: '10px', display: "flex" }}>
            Data Siswa <a style={{ fontWeight: '700', fontSize: '25px'}} ><AiOutlineDownload/></a>
          </div>
        )}
        className={Style.tableAnt}
      />
    </>
  );
}

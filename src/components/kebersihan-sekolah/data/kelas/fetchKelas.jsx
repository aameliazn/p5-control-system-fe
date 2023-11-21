'use client'

import React, {useState, useEffect} from 'react'
import Style from './style.module.css'
import { Table } from 'antd'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { AiOutlineDownload } from "react-icons/ai";

export default function fetchKelas() {
    const [siswa, setSiswa] = useState([]);
    const router = useRouter();

    useEffect(() => {
        axios.get("http://localhost:2000/siswa").then((response) => {
            setSiswa(response.data);
        });
    }, []);

    const pushRoute = () => {
        router.push(`/kebersihan-sekolah/data/siswa/[id]`);
    }
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
          title: "Kegiatan",
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

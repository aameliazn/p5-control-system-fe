'use client'

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Table } from 'antd'
import  Style from './style.module.css'
import { AiOutlineDelete } from "react-icons/ai";

export default function tableRuangan() {
    const[ruangan, setRuangan] = useState([]);
    
    useEffect(() => {
      axios.get('http://localhost:2000/ruangan').then((response) => {
      setRuangan(response.data);  
    });
    }, []);

    //delete ruangan
    const handleDelete = async(itemId) => {
      try{
        await axios.delete(`http://localhost:2000/ruangan/${itemId}`);
        setRuangan(ruangan.filter((item) => item.id !== itemId));
      } catch (error) {
        console.error('gagal menghapus ruangan', error);
      }
    };

    const columnRuangan = [
      {
        title: "Id",
        dataIndex: "id",
        rowScope: "row",
        width: 8,
      },
      {
        title: "Ruangan",
        dataIndex: "ruangan",
        fixed: "center",
        width: 100,
      },
      {
        title: "Action",
        fixed: "right",
        width: 30,
        render: (text, record) => (
          <a onClick={() => handleDelete(record.id)}>
            <AiOutlineDelete color={"red"} size={27} />
          </a>
        ),
      },
    ]

  return (
   <>
   <Table
        columns={columnRuangan}
        dataSource={ruangan}
        pagination={{
          pageSize: 10,
        }}
        scroll={{
          y: 350,
        }}
        className={Style.tableAnt}
      />
   </>
  )
}

'use client'
import React, {useState, useEffect} from "react";
import { Card,  Button, Form, message, Select } from "antd";
import axios from "axios";

export default function DataPengerjaan() {
   const [input, setInput] = useState([]);

  //data search input
  useEffect(() => {
    axios.get('').then((response) => {
      const data = response.data;
      setInput(data);
    })
    .catch((err) => {
      console.error('gagal mengambil data', err);
    })
  }, []);

   //form massege
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };


  return (
    <>
    <Card
        title="Lihat Data Pengerjaan Siswa"
          style={{ width: "100%",  height: "43vh" }}
          className=" rounded-lg shadow-xl shadow-gray-100"
        >
            <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
          <Select
    showSearch
    style={{
      marginTop: '10px',
      width: '100%',
      height: '3.5rem',
    }}
    placeholder="Input Materi"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
             <Select
    showSearch
    style={{
      marginTop: '30px',
      width: '100%',
      height: '3.5rem',
    }}
    placeholder="Input Siswa"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      { 
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
      <Button className="mt-4" style={{height: '2.5rem'}} type="default" htmlType="submit">
            Cari
          </Button>
          </Form>
        </Card>
    </>
  )
}

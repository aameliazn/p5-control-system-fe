'use client'
import React, {useState, useEffect} from "react";
import { Pie } from '@ant-design/charts';
import { Card,  Button, Form, message, Select } from "antd";
import axios from "axios";

export default function chart() {
  const [chartData, setChartData] = useState([]);

  //data chart
  useEffect(() => {
    axios.get('').then((response) => {
      const data = response.data;
      setChartData(data);
    })
    .catch((err) => {
      console.error('gagal mengambil data', err);
    })
  }, []);

  const data = [
    { type: 'Mengerjakan', value: 25 },
    { type: 'Tidak Mengerjakan', value: 30 },
  ];

  //form massege
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  //chart
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      style: { textAlign: "center" },
      autoRotate: false,
      content: "{value}%",
    },
    interactions: [{ type: "element-active" }],
    color: ({ type }) => {
      if (type === "Tidak Mengerjakan") {
        return "red"; 
      }
      return "#73d802"; 
    },
    
  };

  return (
    <>
      <div className="flex flex-warp justify-around gap-4">
        <Card 
          style={{ width: "100%", height: "43vh", alignItems: 'center' }}
          className="rounded-lg shadow-xl shadow-gray-100"
        >
         <Pie {...config} style={{ width: 450, height: 300 }}/>
        </Card>

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
      </div>
    </>
  );
}

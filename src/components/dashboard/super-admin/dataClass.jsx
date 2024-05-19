"use client";
import React from "react";
import Image from "next/image";
import Style from "./dashboard.module.css";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { useDashboard } from "@/context/DashboardContext";
import starWhite from "../../../../public/star-white.png";
import starYellow from "../../../../public/star-yellow.png";
import { Col, Row, Typography, Form, Input, Modal } from "antd";

const { Title } = Typography;

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Tambahkan Fasilitator"
      okText="Tambah"
      cancelText="Batal"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="rombel"
          label="Rombel"
          rules={[
            {
              required: true,
              message: "Please input Rombel!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="facilitator"
          label="Fasilitator"
          rules={[
            {
              required: true,
              message: "Please input Fasilitator!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function dataClass() {
  const router = useRouter();

  const dataUser = JSON.parse(localStorage.getItem("user"));

  const {
    open,
    setOpen,
    visible,
    setVisible,
    studentData,
    deleteRombel,
    updateSchedule,
    addSchedule,
  } = useDashboard();

  const handleClick = (e, i) => {
    router.push(`/dashboard/data/kelas/${i}`);
  };

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    addSchedule(values);
    setOpen(false);
  };

  return (
    <>
      <div className="mt-5">
        <div className="flex flex-row justify-between">
          <Title level={3}>Data Kelas</Title>

          {dataUser?.role == "superadmin" && (
            <button
              className={
                "btn border-2 border-solid text-green-700 border-green-700 w-1/6 hover:bg-emerald-700 hover:border-emerald-700 hover:text-stone-50"
              }
              onClick={() => {
                setVisible(!visible);
              }}
            >
              Tambah Kelas
            </button>
          )}
        </div>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {studentData.map((item, index) => (
            <Col key={index} className="gutter-row" span={6}>
              <div style={{ padding: "8px 0" }}>
                <div
                  style={{ borderBottom: "3px solid green" }}
                  className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
                >
                  <Title
                    level={5}
                    onClick={(e) => handleClick(e, index)}
                    style={{ cursor: "pointer" }}
                  >
                    {item?.rombel}
                  </Title>

                  {dataUser?.role == "superadmin" && (
                    <div className="flex">
                      <div>
                        <button className={Style.button1}>
                          <Image
                            src={
                              item?.schedule == false ? starWhite : starYellow
                            }
                            onClick={() => {
                              item?.schedule == false
                                ? setOpen(true)
                                : updateSchedule(item?.rombel);
                            }}
                            alt="Star"
                            width={18}
                            height={18}
                          />
                        </button>
                      </div>
                      <div className="ml-2">
                        <button className={Style.button1}>
                          <AiOutlineDelete
                            onClick={() => deleteRombel(item?.rombel)}
                            size={21}
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <CollectionCreateForm
          open={open}
          onCreate={onCreate}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </div>
    </>
  );
}
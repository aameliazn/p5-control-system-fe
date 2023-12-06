"use client";
import React from "react";
import { Form, Input, Modal } from "antd";
import { useKebersihanSekolah } from "@/context/KebersihanSekolahContext";

const CollectionCreateForm = ({ onCreate, onCancel }) => {
  const { visible } = useKebersihanSekolah();
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      zIndex={999}
      title="Tambah Kegiatan"
      okText="Tambah"
      cancelText="Batal"
      okType="default"
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
          name="activity"
          label="Kegiatan"
          rules={[
            {
              required: true,
              message: "Tolong Masukan Kegiatan!",
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="condition"
          label="Kondisi"
          rules={[
            {
              required: true,
              message: "Tolong Masukan Kondisi!",
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="score"
          label="Skor"
          rules={[
            {
              required: true,
              message: "Tolong Masukan Skor!",
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function inputClass() {
  const { handleForm, visible, setVisible } = useKebersihanSekolah();

  const onCreate = (values) => {
    handleForm(values);
    setVisible(false);
  };

  return (
    <>
      <CollectionCreateForm
        open={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
}

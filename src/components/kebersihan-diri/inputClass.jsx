"use client";
import React from "react";
import { Form, Input, Modal } from "antd";
import { useKebersihanDiri } from "@/context/KebersihanDiriContext";

const CollectionCreateForm = ({ onCreate, onCancel }) => {
  const { visible } = useKebersihanDiri();
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
          name="kegiatan"
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
      </Form>
    </Modal>
  );
};

export default function inputClass() {
  const { visible, setVisible, handleKegiatan } = useKebersihanDiri();

  const onCreate = (values) => {
    handleKegiatan(values?.kegiatan);
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

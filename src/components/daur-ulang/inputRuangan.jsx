"use client";
import React from "react";
import { Form, Input, Modal } from "antd";
import { useDaurUlang } from "@/context/DaurUlangContext";

const CollectionCreateForm = ({ onCreate, onCancel }) => {
  const { visible } = useDaurUlang();
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      zIndex={999}
      title="Tambah Ruangan"
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
          name="ruangan"
          label="Ruangan"
          rules={[
            {
              required: true,
              message: "Tolong Masukan Ruangan!",
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function inputRuangan() {
  const { visible, setVisible, handleRuangan } = useDaurUlang();

  const onCreate = (values) => {
    handleRuangan(values?.ruangan);
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

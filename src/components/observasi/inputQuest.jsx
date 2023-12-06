"use client";
import React from "react";
import { Form, Input, Modal } from "antd";
import { useObservasi } from "@/context/ObservasiContext";

const CollectionCreateForm = ({ onCreate, onCancel }) => {
  const { visible } = useObservasi();
  const [form] = Form.useForm();

  return (
    <Modal
      open={visible}
      zIndex={999}
      title="Tambah Pertanyaan"
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
          label="Pertanyaan"
          rules={[
            {
              required: true,
              message: "Tolong Masukan Pertanyaan!",
            },
          ]}
        >
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function inputQuest() {
  const { visible, setVisible, handlePertanyaan } = useObservasi();

  const onCreate = (values) => {
    handlePertanyaan(values);
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

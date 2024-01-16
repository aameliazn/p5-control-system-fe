"use client";
import React from "react";
import { Form, Modal, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useDashboard } from "@/context/DashboardContext";

const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: false,
  action: process.env.NEXT_PUBLIC_BASE_URL + `/api/v1/user/students/import`,
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const CollectionCreateForm = ({ onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const { visible } = useDashboard();
  return (
    <Modal
      open={visible}
      title="Tambah kelas"
      okText="Tambah"
      cancelText="Batal"
      okType="default"
      zIndex={999}
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
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      </Form>
    </Modal>
  );
};

export default function inputClass() {
  const { visible, setVisible } = useDashboard();

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <>
      <div>
        <CollectionCreateForm
          open={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    </>
  );
}

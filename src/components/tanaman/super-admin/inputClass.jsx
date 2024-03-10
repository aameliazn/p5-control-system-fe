import React from "react";
import { Form, Input, Modal, Select } from "antd";
import { useTanaman } from "@/context/TanamanContext";

const { Option } = Select;

const CollectionCreateForm = ({ onCreate, onCancel }) => {
  const { visible } = useTanaman();
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
          name="type"
          label="Tipe"
          rules={[
            {
              required: true,
              message: "Tolong Masukan tipe!",
            },
          ]}
        >
          <Select placeholder="Pilih tipe" style={{ width: '100%' }}>
            <Option value="checkbox">Checkbox</Option>
            <Option value="question">Question</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function inputClass() {
  const { visible, setVisible, handleKegiatan } = useTanaman();
  const onCreate = (values) => {
    const { activity, type } = values;
    handleKegiatan(activity, type);
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

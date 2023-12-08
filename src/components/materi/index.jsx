"use client";
import React from "react";
import { Space } from "antd";
import Chart from "./admin/chart";
import Header from "./admin/header";
import Materi from "./super-admin/materiClass";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import DataClass from "./super-admin/dataClass";
import { useMateri } from "@/context/MateriContext";
import InputMateri from "./super-admin/inputMateri";

export default function index() {
  const { visible } = useMateri();

  const dataUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      ></Space>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Materi", url: "/materi" },
        ]}
      />

      {visible && <InputMateri />}

      {dataUser?.role == "superadmin" && (
        <div>
          <Materi />
          <DataClass />
        </div>
      )}

      {dataUser?.role == "admin" && (
        <div>
          <div>
            <Header />
          </div>
          <div className="mt-4">
            <Chart />
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import React from "react";
import { HomeFilled } from "@ant-design/icons";
import DataClass from "./dataClass";
import Breadcrumb from "../layouts/breadcrumb";
import InputClass from "./inputClass";
import { useDashboard } from "@/context/DashboardContext";

export default function index() {
  const { visible } = useDashboard();
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Dashboard ", url: "/dashboard" },
        ]}
      />
      {visible && <InputClass />}
      <DataClass />
    </>
  );
}

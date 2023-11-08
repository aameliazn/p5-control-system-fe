"use client";
import React from "react";
import DataClass from "./dataClass";
import InputClass from "./inputClass";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
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

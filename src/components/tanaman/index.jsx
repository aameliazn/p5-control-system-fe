"use client";
import React from "react";
import DataSiswa from "./dataSiswa";
import InputClass from "./inputClass";
import TableClass from "./tableClass";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import { useTanaman } from "@/context/TanamanContext";

export default function index() {
  const { visible } = useTanaman();

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Tanaman", url: "/tanaman" },
        ]}
      />
      {visible && <InputClass />}
      <TableClass />
      <DataSiswa />
    </>
  );
}

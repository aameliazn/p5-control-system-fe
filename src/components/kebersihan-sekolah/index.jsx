"use client";
import React from "react";
import DataClass from "./dataClass";
import TableClass from "./tableClass";
import InputClass from "./inputClass";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import { useKebersihanSekolah } from "@/context/KebersihanSekolahContext";

export default function index() {
  const { visible } = useKebersihanSekolah();

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Kebersihan Sekolah", url: "/kebersihan-sekolah" },
        ]}
      />
      {visible && <InputClass />}
      <TableClass />
      <DataClass />
    </>
  );
}

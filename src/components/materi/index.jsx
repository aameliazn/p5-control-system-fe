"use client";
import React from "react";
import Materi from "./materiClass";
import DataClass from "./dataClass";
import InputMateri from "./inputMateri";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import { useMateri } from "@/context/MateriContext";

export default function index() {
  const { visible } = useMateri();
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Materi", url: "/materi" },
        ]}
      />
      {visible && <InputMateri />}
      <Materi />
      <DataClass />
    </>
  );
}

"use client";
import React from "react";
import DataClass from "./dataClass";
import InputQuest from "./inputQuest";
import DataQuest from "./dataQuest";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import { useObservasi } from "@/context/ObservasiContext";

export default function index() {
  const { visible } = useObservasi();

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Observasi", url: "/observasi" },
        ]}
      />
      {visible && <InputQuest />}
      <DataQuest />
      <DataClass />
    </>
  );
}

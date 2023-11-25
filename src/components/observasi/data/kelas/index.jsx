import React from "react";
import FetchKelas from "./fetchKelas";
import Breadcrumb from "@/components/layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";

export default function index() {
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Observasi", url: "/observasi" },
          { label: "Data Kelas", url: "/observasi/data/kelas/[id]?" },
        ]}
      />
      <FetchKelas />
    </>
  );
}

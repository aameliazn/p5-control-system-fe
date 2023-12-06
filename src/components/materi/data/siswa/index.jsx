import React from "react";
import FetchData from "./fetchRangkum";
import Breadcrumb from "@/components/layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";

export default function index() {
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Materi", url: "/materi" },
          { label: "Data Kelas", url: "/materi/data/kelas/[id]?" },
          { label: "Data Siswa", url: "/materi/data/siswa/[id]?" },
        ]}
      />
      <FetchData />
    </>
  );
}

import React from "react";
import FetchTable from "./fetchTable";
import { HomeFilled } from "@ant-design/icons";
import Breadcrumb from "@/components/layouts/breadcrumb";

export default function index() {
  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Daur Ulang", url: "/daur-ulang" },
          { label: "Data Kelas", url: "/daur-ulang/data/kelas/[id]?" },
          { label: "Data Siswa", url: "/daur-ulang/data/siswa/[id]?" },
        ]}
      />
      <FetchTable />
    </>
  );
}

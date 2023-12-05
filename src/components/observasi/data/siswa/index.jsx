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
          { label: "Observasi", url: "/observasi" },
          { label: "Data Kelas", url: "/observasi/data/kelas/[id]?" },
          { label: "Data Siswa", url: "/observasi/data/siswa/[id]?" },
        ]}
      />
      <FetchTable />
    </>
  );
}

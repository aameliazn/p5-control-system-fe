import React from "react";
import FetchTable from "./fetchTable";
import Breadcrumb from "@/components/layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";

export default function index() {
  return (
    <div>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Tanaman", url: "/tanaman" },
          { label: "Data Kelas", url: "/tanaman/data/kelas/[id]?" },
          { label: "Data Siswa", url: "/tanaman/data/siswa/[id]?" },
        ]}
      />
      <FetchTable />
    </div>
  );
}

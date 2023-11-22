import React from "react";
import DataKelas from "./dataKelas";
import Breadcrumb from "@/components/layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";

export default function index({ props }) {
  return (
    <div>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Dashboard", url: "/dashboard" },
          { label: "Data Kelas", url: "/dashboard/data/kelas/[id]?" },
        ]}
      />
      <DataKelas props={props} />
    </div>
  );
}

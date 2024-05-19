"use client";
import React from "react";
import FetchKelas from "./fetchKelas";
import Breadcrumb from "@/components/layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import { usePathname, useParams } from "next/navigation";

export default function index() {
  const pathname = usePathname();
  const params = useParams();

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Kebersihan Sekolah", url: "/kebersihan-sekolah" },
          { label: "Data Kelas", url: `${pathname}` },
        ]}
      />
      <FetchKelas slug={params.id} />
    </>
  );
}

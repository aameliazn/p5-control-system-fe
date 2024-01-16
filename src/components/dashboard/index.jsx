"use client";
import React from "react";
import Table from "./user/table";
import Header from "./user/header";
import Materi from "./user/materi";
import Absensi from "./admin/absensi";
import Tanaman from "./admin/tanaman";
import FetchData from "./admin/fetchData";
import Breadcrumb from "../layouts/breadcrumb";
import { HomeFilled } from "@ant-design/icons";
import DataClass from "./super-admin/dataClass";
import InputClass from "./super-admin/inputClass";
import { useDashboard } from "@/context/DashboardContext";

export default function index() {
  const { visible } = useDashboard();

  const dataUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Dashboard ", url: "/dashboard" },
        ]}
      />

      {visible && <InputClass />}

      {dataUser?.role == "master" && <DataClass />}

      {dataUser?.role == "superadmin" && <DataClass />}

      {dataUser?.role == "admin" && (
        <div>
          <div>
            <FetchData />
          </div>
          <div className="mt-4">
            <Tanaman />
          </div>
          <div className="mt-4">
            <Absensi />
          </div>
        </div>
      )}

      {dataUser?.role == "user" && (
        <div>
          <div>
            <Header />
          </div>
          <div className="mt-4">
            <Table />
          </div>
          <div className="mt-4">
            <Materi />
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import React from "react";
import ChartUser from "./admin/chart";
import DetailUser from "./admin/detail";
import QuestionerUser from "./user/questioner";
import { HomeFilled } from "@ant-design/icons";
import Breadcrumb from "../layouts/breadcrumb";
import DataClass from "./super-admin/dataClass";
import DataQuest from "./super-admin/dataQuest";
import InputQuest from "./super-admin/inputQuest";
import { useObservasi } from "@/context/ObservasiContext";

export default function index() {
  const { visible } = useObservasi();

  const dataUser = JSON.purse(localStorage.getItem("user"));

  return (
    <>
      <Breadcrumb
        breadcrumbs={[
          { label: <HomeFilled />, url: "/" },
          { label: "Observasi", url: "/observasi" },
        ]}
      />

      {visible && <InputQuest />}

      {dataUser?.role == "superadmin" && (
        <div>
          <DataQuest />
          <DataClass />
        </div>
      )}

      {dataUser?.role == "admin" && (
        <div>
          <div className="mt-1">
            <ChartUser />
          </div>
          <div className="mt-4">
            <DetailUser />
          </div>
        </div>
      )}

      {dataUser?.role == "user" && <QuestionerUser />}
    </>
  );
}

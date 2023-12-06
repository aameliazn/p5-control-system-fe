import React from "react";
import Chart from "./chart";
import Siswa from "./siswa";

export default function index() {
  return (
    <>
      <div className="mt-1">
        <Chart />
      </div>
      <div className="mt-4">
        <Siswa />
      </div>
    </>
  );
}

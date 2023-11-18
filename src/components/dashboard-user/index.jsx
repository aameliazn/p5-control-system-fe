import React from "react";
import Header from "./header";
import Table from "./table";
import Materi from "./materi";


export default function index() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-4">
        <Table />
      </div>
      <div className="mt-4">
        <Materi />
      </div>
    </>
  );
}

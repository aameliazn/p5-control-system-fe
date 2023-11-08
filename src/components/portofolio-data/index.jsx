import React from "react";
import FetchData from "./fetchData";
export default function index() {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <FetchData />
      </div>
    </>
  );
}

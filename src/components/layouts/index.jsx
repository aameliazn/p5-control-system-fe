import React from "react";
import Sidebar from "./sidebar";

export default function index({ children }) {
  return (
    <>
      <div>
        <Sidebar>{children}</Sidebar>
      </div>
    </>
  );
}

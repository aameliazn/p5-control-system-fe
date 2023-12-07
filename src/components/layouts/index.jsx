"use client";
import axios from "axios";
import Sidebar from "./sidebar";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/context/LoginContext";

export default function index({ children }) {
  const router = useRouter();
  const { tokenUser } = useLogin();

  useEffect(() => {
    if (localStorage.getItem("token") != undefined) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${tokenUser}`;
    } else {
      router.push("/login");
    }
  }, [localStorage.getItem("token")]);

  return (
    <>
      <div>
        <Sidebar>{children}</Sidebar>
      </div>
    </>
  );
}

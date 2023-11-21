"use client";
import axios from "axios";
import Sidebar from "./sidebar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useLogin } from "@/context/LoginContext";

export default function index({ children }) {
  const router = useRouter;
  const { tokenUser } = useLogin();

  useEffect(() => {
    if (!tokenUser) {
      router.push("/login");
    }
    if (tokenUser) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${tokenUser}`;
    }
  }, []);

  return (
    <>
      <div>
        <Sidebar>{children}</Sidebar>
      </div>
    </>
  );
}

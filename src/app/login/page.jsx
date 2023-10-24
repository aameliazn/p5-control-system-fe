import React from "react";
import Login from "@/components/login";
import LoginProvider from "@/context/LoginContext";

export default function page() {
  return (
    <LoginProvider>
      <Login />
    </LoginProvider>
  );
}

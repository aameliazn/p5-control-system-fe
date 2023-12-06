import React from "react";
import Landing from "@/components/landing";
import LandingProvider from "@/context/LandingContext";

export default function Home() {
  return (
    <LandingProvider>
      <Landing />
    </LandingProvider>
  );
}

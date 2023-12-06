import "./globals.css";
import axios from "axios";
import { ConfigProvider } from "antd";
import { Inter } from "next/font/google";
import LoginProvider from "@/context/LoginContext";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "P5 Control System",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider theme={{ token: {colorPrimary: '#15803d'} }}>
          <LoginProvider>{children}</LoginProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}

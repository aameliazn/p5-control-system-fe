"use client";
import Image from "next/image";
import { Card, Divider } from "antd";
import Style from "./style.module.css";
import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import Example from "../../../../../public/ngelamun.jpeg";
import { usePortofolio } from "@/context/PortofolioContext";

export default function fetchData() {
  const { table } = usePortofolio();

  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible((prev) => !prev);
  };

  return (
    <>
      <div className="mt-7">
        <div className="items-center justify-center flex">
          <div className={Style.cardWrapper}>
            <div className="w-full">
              <p className="max-w-full font-bold text-white md:w-[64%] md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
                <span style={{ fontSize: 40 }}>Portofolio</span> <br />
                <span style={{ fontSize: 25, opacity: "80%" }}>
                  Siti Hajima Maste Iruka
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {table.map((item, index) => (
        <div key={index} className="mt-6">
          <Card className={Style.tableAnt}>
            <div className="flex gap-2">
              <p
                style={{
                  fontSize: 19,
                  cursor: "pointer",
                  margin: "-7px 0px",
                  fontWeight: "bold",
                }}
                onClick={toggleContentVisibility}
              >
                {item?.pertanyaan}
              </p>
              <AiOutlineDownload
                size={25}
                style={{ marginTop: -5, cursor: "pointer" }}
              />
            </div>

            {isContentVisible && <Divider />}

            {isContentVisible && (
              <div className="mt-3 justify-center flex">
                {/* harusnya di map, sesuai dia input berapa image */}
                <Image
                  src={Example}
                  alt={`Pengumpulan Tugas ${item?.pertanyaan}`}
                />
              </div>
            )}
          </Card>
        </div>
      ))}
    </>
  );
}

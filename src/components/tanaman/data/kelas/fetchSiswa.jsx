"use client";
import React from "react";
import * as XLSX from "xlsx";
import Style from "./style.module.css";
import { useRouter } from "next/navigation";
import { Typography, List, Card } from "antd";
import { AiOutlineDownload } from "react-icons/ai";
import { useTanaman } from "@/context/TanamanContext";

const { Title } = Typography;
const { Meta } = Card;

export default function fetchSiswa() {
  const router = useRouter();
  const { siswa } = useTanaman();

  const pushRoute = (e, i) => {
    router.push(`/tanaman/data/siswa/${i}`);
  };

  //export xlsx
  const exportXLSX = () => {
    if (siswa.length > 0) {
      const ws = XLSX.utils.json_to_sheet(siswa);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Data siswa");
      XLSX.writeFile(wb, "data_siswa.xlsx");
    }
  };

  return (
    <>
      <div className="mt-5">
        <div className="flex flex-row gap-3">
          <Title level={3}>{`PPLG XII 2`}</Title>
          <AiOutlineDownload
            size={27}
            style={{ marginTop: 3, cursor: "pointer" }}
            onClick={exportXLSX}
          />
        </div>
      </div>
      <List
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={siswa}
        renderItem={(item, index) => (
          <List.Item>
            <Card
              key={index}
              style={{ borderBottom: "3px solid green" }}
              className="border border-gray-200 shadow hover:bg-gray-100"
            >
              <Meta
                onClick={(e) => pushRoute(e, index)}
                style={{ cursor: "pointer" }}
                title={item?.nama}
                description={
                  <div className="mt-3">
                    <span className="bg-green-100 text-green-700 rounded px-2 py-1">
                      {`${item?.data} Rangkuman`}
                    </span>
                  </div>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </>
  );
}

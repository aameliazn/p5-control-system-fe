"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Card, List, Typography } from "antd";
import { AiOutlineDownload } from "react-icons/ai";
import { useMateri } from "@/context/MateriContext";

const { Meta } = Card;
const { Title } = Typography;

export default function fetchData() {
  const router = useRouter();
  const { siswa } = useMateri();

  const pushRoute = (e, index) => {
    router.push(`/materi/data/siswa/${index}`);
  };

  return (
    <>
      <div className="mt-5">
        <div className="flex flex-row gap-3">
          <Title level={3}>{`PPLG XII 2`}</Title>
          <AiOutlineDownload size={27} style={{ marginTop: 3 }} />
        </div>
      </div>
      <List
        grid={{
          gutter: 16,
          column: 4,
        }}
        style={{ marginTop: 15 }}
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

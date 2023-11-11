import React from "react";
import { useRouter } from "next/navigation";
import { Typography, Row, Col } from "antd";
import { useKebersihanDiri } from "@/context/KebersihanDiriContext";

const { Title } = Typography;

export default function dataSiswa() {
  const router = useRouter();
  const { kelas } = useKebersihanDiri();

  const handleClick2 = (e, index) => {
    router.push(`/data-kelas-kebersihan/${index}`);
  };

  return (
    <>
      <div className="mt-5">
        <div className="flex flex-row justify-between">
          <Title level={3}>Data Kelas</Title>
        </div>
      </div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {kelas.map((item, index) => (
          <Col key={index} className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, index)}
                  style={{ cursor: "pointer" }}
                >
                  {item?.kelas}
                </Title>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

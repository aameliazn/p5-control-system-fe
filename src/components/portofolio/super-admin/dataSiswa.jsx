import React from "react";
import { useRouter } from "next/navigation";
import { Typography, Row, Col } from "antd";
import { usePortofolio } from "@/context/PortofolioContext";

const { Title } = Typography;

export default function dataSiswa() {
  const router = useRouter();
  const { siswa } = usePortofolio();

  const handleClick = (e, index) => {
    router.push(`/portofolio/data/kelas/${index}`);
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
        {siswa.map((item, index) => (
          <Col key={index} className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick(e, item?.rombel)}
                  style={{ cursor: "pointer" }}
                >
                  {item?.rombel}
                </Title>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

import React from "react";
import Image from "next/image";
import { useMateri } from "@/context/MateriContext";
import { Col, Row, Typography, Card, Pagination } from "antd";
import CoverPdf from "../../../../public/tanaman/tanaman1.jpg";
import {
  EyeOutlined,
  DownloadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Title } = Typography;

export default function materi() {
  const {
    visible,
    setVisible,
    handleDeletePDF,
    currentPage,
    setCurrentPage,
    uploadedFile,
    exportPDF,
  } = useMateri();

  const itemsPerPage = 4;

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="mt-5">
        <div className="flex flex-row justify-between">
          <Title level={3}>Materi</Title>
          <button
            className={
              "btn border-2 border-solid text-green-700 border-green-700 w-1/6 hover:bg-emerald-700 hover:border-emerald-700 hover:text-stone-50"
            }
            onClick={() => {
              setVisible(!visible);
            }}
          >
            Tambah Materi
          </button>
        </div>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {uploadedFile
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item, index) => (
              <Col key={index} className="gutter-row" span={6}>
                <div style={{ padding: "8px 0" }}>
                  <Card
                    style={{
                      width: 270,
                      height: 222.5,
                      borderBottom: "3px solid green",
                    }}
                    cover={
                      <div style={{ width: "100%", height: "110px" }}>
                        <Image
                          alt="image"
                          src={CoverPdf}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    }
                    actions={[
                      <EyeOutlined key="eye" />,
                      <DownloadOutlined key="download" onClick={() => exportPDF(item?._id)}/>,
                      <DeleteOutlined key="delete" />,
                    ]}
                  >
                    <Meta title={item?.title} style={{ textAlign: "center" }} />
                  </Card>
                </div>
              </Col>
            ))}
        </Row>
        <Pagination
          current={currentPage}
          total={uploadedFile?.length}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          pageSize={itemsPerPage}
          showSizeChanger={false}
          onChange={handleChangePage}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        />
      </div>
    </>
  );
}

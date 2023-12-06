"use client";
import Style from "./style.module.css";
import React, { useState } from "react";
import { Card, Divider, Pagination } from "antd";
import { AiOutlineDownload } from "react-icons/ai";
import { useObservasi } from "@/context/ObservasiContext";

export default function fetchTable() {
  const { pertanyaan, currentPage, setCurrentPage } = useObservasi();

  const itemsPerPage = 1;

  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

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
                <span style={{ fontSize: 40 }}>Observasi</span> <br />
                <span style={{ fontSize: 25, opacity: "80%" }}>
                  Siti Hajima Maste Iruka
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Card className={Style.tableAnt}>
          <div className="flex justify-center gap-2">
            <p
              style={{
                fontSize: 19,
                cursor: "pointer",
                margin: "-7px 0px",
                fontWeight: "bold",
              }}
              onClick={toggleContentVisibility}
            >
              Observasi Lingkungan Minggu 1
            </p>
            <AiOutlineDownload
              size={25}
              style={{ marginTop: -5, cursor: "pointer" }}
            />
          </div>

          {isContentVisible && <Divider style={{ marginBottom: -2 }} />}

          {isContentVisible && (
            <>
              {pertanyaan
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((item, index) => (
                  <div key={index} className="mt-5">
                    <p className="font-medium text-[17px] -mb-4">
                      {item?.pertanyaan}
                    </p>
                    <Divider />
                    <p
                      style={{
                        fontSize: 15,
                        textAlign: "justify",
                        marginTop: -7,
                      }}
                    >
                      {item?.jawaban}
                    </p>
                  </div>
                ))}

              <Pagination
                current={currentPage}
                total={pertanyaan?.length}
                showTotal={(total, range) => `${range[0]} of ${total} items`}
                pageSize={itemsPerPage}
                showSizeChanger={false}
                onChange={handleChangePage}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0",
                }}
              />
            </>
          )}
        </Card>
      </div>

      <div className="mt-6">
        <Card className={Style.tableAnt}>
          <div className="flex justify-center gap-2">
            <p
              style={{
                fontSize: 19,
                cursor: "pointer",
                margin: "-7px 0px",
                fontWeight: "bold",
              }}
              onClick={toggleContentVisibility}
            >
              Observasi Lingkungan Minggu 2
            </p>
            <AiOutlineDownload
              size={25}
              style={{ marginTop: -5, cursor: "pointer" }}
            />
          </div>

          {isContentVisible && <Divider style={{ marginBottom: -2 }} />}

          {isContentVisible && (
            <>
              {pertanyaan
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((item, index) => (
                  <div key={index} className="mt-5">
                    <p className="font-medium text-[17px] -mb-4">
                      {item?.pertanyaan}
                    </p>
                    <Divider />
                    <p
                      style={{
                        fontSize: 15,
                        textAlign: "justify",
                        marginTop: -7,
                      }}
                    >
                      {item?.jawaban}
                    </p>
                  </div>
                ))}

              <Pagination
                current={currentPage}
                total={pertanyaan?.length}
                showTotal={(total, range) => `${range[0]} of ${total} items`}
                pageSize={itemsPerPage}
                showSizeChanger={false}
                onChange={handleChangePage}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0",
                }}
              />
            </>
          )}
        </Card>
      </div>

      <div className="mt-6">
        <Card className={Style.tableAnt}>
          <div className="flex justify-center gap-2">
            <p
              style={{
                fontSize: 19,
                cursor: "pointer",
                margin: "-7px 0px",
                fontWeight: "bold",
              }}
              onClick={toggleContentVisibility}
            >
              Observasi Lingkungan Minggu 3
            </p>
            <AiOutlineDownload
              size={25}
              style={{ marginTop: -5, cursor: "pointer" }}
            />
          </div>

          {isContentVisible && <Divider style={{ marginBottom: -2 }} />}

          {isContentVisible && (
            <>
              {pertanyaan
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((item, index) => (
                  <div key={index} className="mt-5">
                    <p className="font-medium text-[17px] -mb-4">
                      {item?.pertanyaan}
                    </p>
                    <Divider />
                    <p
                      style={{
                        fontSize: 15,
                        textAlign: "justify",
                        marginTop: -7,
                      }}
                    >
                      {item?.jawaban}
                    </p>
                  </div>
                ))}

              <Pagination
                current={currentPage}
                total={pertanyaan?.length}
                showTotal={(total, range) => `${range[0]} of ${total} items`}
                pageSize={itemsPerPage}
                showSizeChanger={false}
                onChange={handleChangePage}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0",
                }}
              />
            </>
          )}
        </Card>
      </div>

      {/* <div className="max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div className="flex gap-4 text-md font-bold">
          Observasi Lingkungan Minggu 1
          <a
            style={{
              fontWeight: "700",
              fontSize: "25px",
              marginTop: "2px",
              cursor: "pointer",
            }}
          >
            <AiOutlineDownload />
          </a>
        </div>
        <div className={Style.cardQuest}>
          <div className="mb-4">Pertanyaan 1</div>
        </div>
      </div> */}
    </>
  );
}

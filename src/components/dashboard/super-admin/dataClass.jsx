"use client";
import Image from "next/image";
import React, { useState } from "react";
import Style from "./dashboard.module.css";
import { useRouter } from "next/navigation";
import { Col, Row, Typography } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import starWhite from "../../../../public/star-white.png";
import starYellow from "../../../../public/star-yellow.png";
import { useDashboard } from "@/context/DashboardContext";

const { Title } = Typography;

export default function dataClass() {
  const router = useRouter();

  const [isClicked, setIsClicked] = useState(starWhite);
  const { visible, setVisible } = useDashboard();

  const handleClick = () => {
    if (isClicked == starWhite) {
      setIsClicked(starYellow);
    } else {
      setIsClicked(starWhite);
    }
  };

  const handleClick2 = (e, i) => {
    router.push(`/dashboard/data/kelas/${i}`);
  };

  return (
    <>
      <div className="mt-5">
        <div className="flex flex-row justify-between">
          <Title level={3}>Data Kelas</Title>
          <button
            className={
              "btn border-2 border-solid text-green-700 border-green-700 w-1/6 hover:bg-emerald-700 hover:border-emerald-700 hover:text-stone-50"
            }
            onClick={() => {
              setVisible(!visible);
            }}
          >
            Tambah Kelas
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
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 0)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 1)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 2)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 3)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 0)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 1)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 2)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 3)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 0)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 1)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 2)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ padding: "8px 0" }}>
              <div
                style={{ borderBottom: "3px solid green" }}
                className="flex flex-row justify-between rounded p-4 bg-white border border-gray-200 shadow hover:bg-gray-100"
              >
                <Title
                  level={5}
                  onClick={(e) => handleClick2(e, 3)}
                  style={{ cursor: "pointer" }}
                >
                  PPLG XII 1
                </Title>
                <div className="flex">
                  <div>
                    <button className={Style.button1}>
                      <Image
                        src={isClicked}
                        onClick={handleClick}
                        alt="Star"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                  <div className="ml-2">
                    <button className={Style.button1}>
                      <AiOutlineDelete size={21} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

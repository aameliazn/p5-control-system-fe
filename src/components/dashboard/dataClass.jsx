"use client";
import React, { useState } from "react";
import { Col, Row } from "antd";
import Image from "next/image";
import Style from "./dashboard.module.css";
import starWhite from "../../../public/star-white.png";
import starYellow from "../../../public/star-yellow.png";
import { AiOutlineDelete } from "react-icons/ai";

export default function dataClass() {
  // data icon star
  const [isClicked, setIsClicked] = useState(starWhite);

  // data icon star
  const handleClick = () => {
    if (isClicked == starWhite) {
      setIsClicked(starYellow);
    } else {
      setIsClicked(starWhite);
    }
  };

  return (
    <>
      <div className="mt-10">
        <p className="text-2xl mb-3">
          <b>Data Kelas</b>
        </p>
        <Row>
          <Col span={8}>
            <div className="flex flex-row justify-between max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <h1 className="text-xl">
                <b>PPLG XII 1</b>
              </h1>
              <div className="flex">
                <div>
                  <button className={Style.button1}>
                    <Image
                      src={isClicked}
                      onClick={handleClick}
                      alt="Star"
                      width={23}
                      height={23}
                    />
                  </button>
                </div>
                <div className="ml-2">
                  <button className={Style.button1}>
                    <AiOutlineDelete size={27} />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex flex-row justify-between max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <h1 className="text-xl">
                <b>PPLG XII 2</b>
              </h1>
              <div className="flex">
                <div>
                  <button className={Style.button1}>
                    <Image
                      src={isClicked}
                      onClick={handleClick}
                      alt="Star"
                      width={23}
                      height={23}
                    />
                  </button>
                </div>
                <div className="ml-2">
                  <button className={Style.button1}>
                    <AiOutlineDelete size={27} />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex flex-row justify-between max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <h1 className="text-xl">
                <b>PPLG XII 3</b>
              </h1>
              <div className="flex">
                <div>
                  <button className={Style.button1}>
                    <Image
                      src={isClicked}
                      onClick={handleClick}
                      alt="Star"
                      width={23}
                      height={23}
                    />
                  </button>
                </div>
                <div className="ml-2">
                  <button className={Style.button1}>
                    <AiOutlineDelete size={27} />
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex flex-row justify-between max-w-sm w-full lg:max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <h1 className="text-xl">
                <b>PPLG XII 4</b>
              </h1>
              <div className="flex">
                <div>
                  <button className={Style.button1}>
                    <Image
                      src={isClicked}
                      onClick={handleClick}
                      alt="Star"
                      width={23}
                      height={23}
                    />
                  </button>
                </div>
                <div className="ml-2">
                  <button className={Style.button1}>
                    <AiOutlineDelete size={27} />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

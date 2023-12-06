"use client";
import { Card, Divider } from "antd";
import Style from "./style.module.css";
import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

export default function fetchRangkum() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible((prev) => !prev);
  };

  return (
    <>
      <div className="mt-7">
        <div className="items-center justify-center flex">
          <div className={Style.cardwarpper}>
            <div className="w-full">
              <p className="max-w-full font-bold text-white md:w-[64%] md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
                <span style={{ fontSize: 40 }}>Rangkuman Materi</span> <br />
                <span style={{ fontSize: 25, opacity: "80%" }}>
                  Siti Hajima Maste Iruka
                </span>
              </p>
              {/* <div className="flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
                <button className={Style.button}>
                  <AiOutlineDownload size={27} />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Card
          className="border border-gray-200 shadow hover:bg-gray-100"
          style={{ borderTop: "3px solid green" }}
        >
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
              Rangkuman Materi Menanam
            </p>
            <AiOutlineDownload size={25} style={{ marginTop: -5 }} />
          </div>

          {isContentVisible && <Divider />}

          {isContentVisible && (
            <p
              style={{
                fontSize: 15,
                textAlign: "justify",
                padding: "0px 30px",
                textIndent: "3em",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
              nam aliquam sem et. Orci porta non pulvinar neque laoreet
              suspendisse interdum consectetur. Massa sapien faucibus et
              molestie ac feugiat. Suscipit adipiscing bibendum est ultricies.
              Sed arcu non odio euismod lacinia at quis. Egestas egestas
              fringilla phasellus faucibus scelerisque eleifend donec pretium.
              Ipsum dolor sit amet consectetur. Est lorem ipsum dolor sit amet
              consectetur. Lacus luctus accumsan tortor posuere ac ut consequat
              semper. Sed id semper risus in hendrerit gravida rutrum quisque. A
              pellentesque sit amet porttitor eget dolor morbi non. Et netus et
              malesuada fames ac. Elementum sagittis vitae et leo duis ut diam.
              Vitae ultricies leo integer malesuada nunc. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam quis. Tempus
              imperdiet nulla malesuada pellentesque. Ultricies leo integer
              malesuada nunc vel risus. Consequat nisl vel pretium lectus quam
              id leo. Faucibus pulvinar elementum integer enim neque. Enim ut
              sem viverra aliquet eget sit amet. Placerat in egestas erat
              imperdiet. Diam volutpat commodo sed egestas egestas. Ac turpis
              egestas integer eget aliquet nibh praesent. Lobortis elementum
              nibh tellus molestie nunc non blandit massa. Id consectetur purus
              ut faucibus pulvinar elementum integer enim neque. Sed id semper
              risus in hendrerit gravida rutrum quisque non. Nunc sed velit
              dignissim sodales. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nec nam aliquam sem et. Orci porta non
              pulvinar neque laoreet suspendisse interdum consectetur. Massa
              sapien faucibus et molestie ac feugiat. Suscipit adipiscing
              bibendum est ultricies. Sed arcu non odio euismod lacinia at quis.
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend
              donec pretium. Ipsum dolor sit amet consectetur.
            </p>
          )}
        </Card>
      </div>
      <div className="mt-6">
        <Card
          className="border border-gray-200 shadow hover:bg-gray-100"
          style={{ borderTop: "3px solid green" }}
        >
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
              Rangkuman Materi Menanam
            </p>
            <AiOutlineDownload size={25} style={{ marginTop: -5 }} />
          </div>

          {isContentVisible && <Divider />}

          {isContentVisible && (
            <p
              style={{
                fontSize: 15,
                textAlign: "justify",
                padding: "0px 30px",
                textIndent: "3em",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
              nam aliquam sem et. Orci porta non pulvinar neque laoreet
              suspendisse interdum consectetur. Massa sapien faucibus et
              molestie ac feugiat. Suscipit adipiscing bibendum est ultricies.
              Sed arcu non odio euismod lacinia at quis. Egestas egestas
              fringilla phasellus faucibus scelerisque eleifend donec pretium.
              Ipsum dolor sit amet consectetur. Est lorem ipsum dolor sit amet
              consectetur. Lacus luctus accumsan tortor posuere ac ut consequat
              semper. Sed id semper risus in hendrerit gravida rutrum quisque. A
              pellentesque sit amet porttitor eget dolor morbi non. Et netus et
              malesuada fames ac. Elementum sagittis vitae et leo duis ut diam.
              Vitae ultricies leo integer malesuada nunc. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam quis. Tempus
              imperdiet nulla malesuada pellentesque. Ultricies leo integer
              malesuada nunc vel risus. Consequat nisl vel pretium lectus quam
              id leo. Faucibus pulvinar elementum integer enim neque. Enim ut
              sem viverra aliquet eget sit amet. Placerat in egestas erat
              imperdiet. Diam volutpat commodo sed egestas egestas. Ac turpis
              egestas integer eget aliquet nibh praesent. Lobortis elementum
              nibh tellus molestie nunc non blandit massa. Id consectetur purus
              ut faucibus pulvinar elementum integer enim neque. Sed id semper
              risus in hendrerit gravida rutrum quisque non. Nunc sed velit
              dignissim sodales. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nec nam aliquam sem et. Orci porta non
              pulvinar neque laoreet suspendisse interdum consectetur. Massa
              sapien faucibus et molestie ac feugiat. Suscipit adipiscing
              bibendum est ultricies. Sed arcu non odio euismod lacinia at quis.
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend
              donec pretium. Ipsum dolor sit amet consectetur.
            </p>
          )}
        </Card>
      </div>
      <div className="mt-6">
        <Card
          className="border border-gray-200 shadow hover:bg-gray-100"
          style={{ borderTop: "3px solid green" }}
        >
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
              Rangkuman Materi Menanam
            </p>
            <AiOutlineDownload size={25} style={{ marginTop: -5 }} />
          </div>

          {isContentVisible && <Divider />}

          {isContentVisible && (
            <p
              style={{
                fontSize: 15,
                textAlign: "justify",
                padding: "0px 30px",
                textIndent: "3em",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
              nam aliquam sem et. Orci porta non pulvinar neque laoreet
              suspendisse interdum consectetur. Massa sapien faucibus et
              molestie ac feugiat. Suscipit adipiscing bibendum est ultricies.
              Sed arcu non odio euismod lacinia at quis. Egestas egestas
              fringilla phasellus faucibus scelerisque eleifend donec pretium.
              Ipsum dolor sit amet consectetur. Est lorem ipsum dolor sit amet
              consectetur. Lacus luctus accumsan tortor posuere ac ut consequat
              semper. Sed id semper risus in hendrerit gravida rutrum quisque. A
              pellentesque sit amet porttitor eget dolor morbi non. Et netus et
              malesuada fames ac. Elementum sagittis vitae et leo duis ut diam.
              Vitae ultricies leo integer malesuada nunc. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam quis. Tempus
              imperdiet nulla malesuada pellentesque. Ultricies leo integer
              malesuada nunc vel risus. Consequat nisl vel pretium lectus quam
              id leo. Faucibus pulvinar elementum integer enim neque. Enim ut
              sem viverra aliquet eget sit amet. Placerat in egestas erat
              imperdiet. Diam volutpat commodo sed egestas egestas. Ac turpis
              egestas integer eget aliquet nibh praesent. Lobortis elementum
              nibh tellus molestie nunc non blandit massa. Id consectetur purus
              ut faucibus pulvinar elementum integer enim neque. Sed id semper
              risus in hendrerit gravida rutrum quisque non. Nunc sed velit
              dignissim sodales. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nec nam aliquam sem et. Orci porta non
              pulvinar neque laoreet suspendisse interdum consectetur. Massa
              sapien faucibus et molestie ac feugiat. Suscipit adipiscing
              bibendum est ultricies. Sed arcu non odio euismod lacinia at quis.
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend
              donec pretium. Ipsum dolor sit amet consectetur.
            </p>
          )}
        </Card>
      </div>
      <div className="mt-6">
        <Card
          className="border border-gray-200 shadow hover:bg-gray-100"
          style={{ borderTop: "3px solid green" }}
        >
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
              Rangkuman Materi Menanam
            </p>
            <AiOutlineDownload size={25} style={{ marginTop: -5 }} />
          </div>

          {isContentVisible && <Divider />}

          {isContentVisible && (
            <p
              style={{
                fontSize: 15,
                textAlign: "justify",
                padding: "0px 30px",
                textIndent: "3em",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
              nam aliquam sem et. Orci porta non pulvinar neque laoreet
              suspendisse interdum consectetur. Massa sapien faucibus et
              molestie ac feugiat. Suscipit adipiscing bibendum est ultricies.
              Sed arcu non odio euismod lacinia at quis. Egestas egestas
              fringilla phasellus faucibus scelerisque eleifend donec pretium.
              Ipsum dolor sit amet consectetur. Est lorem ipsum dolor sit amet
              consectetur. Lacus luctus accumsan tortor posuere ac ut consequat
              semper. Sed id semper risus in hendrerit gravida rutrum quisque. A
              pellentesque sit amet porttitor eget dolor morbi non. Et netus et
              malesuada fames ac. Elementum sagittis vitae et leo duis ut diam.
              Vitae ultricies leo integer malesuada nunc. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam quis. Tempus
              imperdiet nulla malesuada pellentesque. Ultricies leo integer
              malesuada nunc vel risus. Consequat nisl vel pretium lectus quam
              id leo. Faucibus pulvinar elementum integer enim neque. Enim ut
              sem viverra aliquet eget sit amet. Placerat in egestas erat
              imperdiet. Diam volutpat commodo sed egestas egestas. Ac turpis
              egestas integer eget aliquet nibh praesent. Lobortis elementum
              nibh tellus molestie nunc non blandit massa. Id consectetur purus
              ut faucibus pulvinar elementum integer enim neque. Sed id semper
              risus in hendrerit gravida rutrum quisque non. Nunc sed velit
              dignissim sodales. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nec nam aliquam sem et. Orci porta non
              pulvinar neque laoreet suspendisse interdum consectetur. Massa
              sapien faucibus et molestie ac feugiat. Suscipit adipiscing
              bibendum est ultricies. Sed arcu non odio euismod lacinia at quis.
              Egestas egestas fringilla phasellus faucibus scelerisque eleifend
              donec pretium. Ipsum dolor sit amet consectetur.
            </p>
          )}
        </Card>
      </div>
    </>
  );
}

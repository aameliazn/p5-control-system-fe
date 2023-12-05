"use client";

import React, { useRef, useState } from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { Button, Tour, Avatar, Card, carousel } from "antd";
import { GiDropletSplash } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";

const { Meta } = Card;
export default function tour() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: "Pilar P5",
      description: "Ini merupakan pilar yang menyandang 4 point yang difokuskan pada kegiatan ini seperti: kepedulian, kerja sama, kritis dan gaya hidup",
      target: () => ref1.current,
    },
    {
      title: "Kepedulian",
      description:
        "P5 Melatih kepedulian akan lingkungan hidup dan mengembangkan sikap kepedulian.",
      target: () => ref2.current,
    },
    {
      title: "Kerja Sama",
      description: "P5 Melatih kekeluargaan dan kekompakkan yang begitu erat.",
      target: () => ref3.current,
    },
    {
      title: "Kritis",
      description:
        "P5 Melatih Berpikiran kritis dalam menghadapi dan memecahkan masalah-masalah yang ada.",
      target: () => ref4.current,
    },
    {
      title: "Gaya Hidup",
      description:
        "P5 Melatih kita agar memiliki gaya hidup yang sehat untuk kehidupan di masa yang akan datang.",
      target: () => ref5.current,
    },
    {
      title: "P5 Budidaya tanaman",
      description:
        "P5 merupakan karakter dan kemampuan yang dibangun dalam keseharian dan dalam diri setiap individu peserta didik melalui budaya satuan pendidikan, pembelajaran intrakurikuler.",
      target: () => ref6.current,
    },
  ];
  return (
    <>
      <div className="flex flex-warp">
        <div ref={ref1} className="grid">
          {/*      
        <div ref={ref4} className="flex w-full m-auto justify-between bg-gradient-to-r from-green-700 via-green-800 to-green-900 p-6 gap-8 rounded-lg border-2 border-green-500">
    <div className="my-auto">
      <div className="text-4xl text-green-100">Kritis</div>
    </div>
    <div className="text-green-300 my-auto bg-gradient-to-l from-green-700 via-green-800 to-green-900 rounded-full p-4">
      <img src="./Handshake.png" alt="" />
    </div>
  </div>
       
    
  
    <div ref={ref2} className="flex w-full m-auto justify-between bg-gradient-to-r from-green-700 via-green-800 to-green-900 p-6 gap-8 rounded-lg border-2 border-green-500">
    <div className="my-auto">
      <div className="text-4xl text-green-100">Kepedulian</div>
    </div>
    <div className="text-green-300 my-auto bg-gradient-to-l from-green-700 via-green-800 to-green-900 rounded-full p-4">
      <img src="./Handshake.png" alt="" />
    </div>
  </div>
    
 

 <div ref={ref3} className="flex w-full m-auto justify-between bg-gradient-to-r from-green-700 via-green-800 to-green-900 p-6 gap-8 rounded-lg border-2 border-green-500">
    <div className="my-auto">
      <div className="text-4xl text-green-100">Kerja sama</div>
    </div>
    <div className="text-green-300 my-auto bg-gradient-to-l from-green-700 via-green-800 to-green-900 rounded-full p-4">
      <img src="./Handshake.png" alt="" />
    </div>
  </div>
 
 
 <div ref={ref5} className="flex w-full m-auto justify-between bg-gradient-to-r from-green-700 via-green-800 to-green-900 p-6 gap-8 rounded-lg border-2 border-green-500">
    <div className="my-auto">
      <div className="text-4xl text-green-100">Gaya hidup</div>
    </div>
    <div className="text-green-300 my-auto bg-gradient-to-l from-green-700 via-green-800 to-green-900 rounded-full p-4">
      <img src="./Handshake.png" alt="" />
    </div>
  </div>  */}

          <Card
            ref={ref2}
            style={{
              width: 300,
              borderRadius: '20px 0 0 0',
            }}
          >
            <Meta
              avatar={
                <Avatar src="./Group 6.png" />
              }
              title="Kepedulian"
              description="This is the description"
            />
          </Card>
          <Card
            style={{
              width: 300,
              borderRadius: '0 0 0 0',
            }}
            ref={ref3}
          >
            <Meta
              avatar={
                <Avatar src="./Group 8.png" />
              }
              title="Kerja Sama"
              description="This is the description"
            />
          </Card>
          <Card
            ref={ref4}
            style={{
              width: 300,
              borderRadius: '0 0 0 0',
            }}
          >
            <Meta
              avatar={
                <Avatar src="./Group 13.png" />
              }
              title="Kritis"
              description="This is the description"
            />
          </Card>
          <Card
            style={{
              width: 300,
              borderRadius: '0 0 0 20px',
            }}
            ref={ref5}
          >
            <Meta
              avatar={
                <Avatar src="./Group 14.png" />
              }
              title="Gaya Hidup"
              description="This is the description"
            />
          </Card>
        </div>

        <div>
          <img
            ref={ref6}
            src="./dokumentasi/IMG_20221114_142055.jpg"
            alt="dokumentasi"
            style={{ height: "100%" }}
          />
        </div>
      </div>

      <div className="mt-5 justify-center flex">
        <a  onClick={() => setOpen(true)} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-sm text-white transition duration-300 ease-out border-2 border-[var(--main-color)] rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[var(--main-color)] group-hover:translate-x-0 ease">
<FaPlay />
</span>
<span class="absolute flex items-center justify-center w-full h-full text-white text-semibold transition-all duration-300 transform group-hover:translate-x-full ease">Jelajahi</span>
<span class="relative invisible">Click untuk wahana</span>
</a>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      </div>
    </>
  );
}

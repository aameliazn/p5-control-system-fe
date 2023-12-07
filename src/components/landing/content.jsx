"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { Image, Button } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Style from "./landing.module.css";
import Tour from "./tour";
import Footer from "./footer";
import { Divider } from "antd";
import CountUp from "react-countup";
import { Statistic } from "antd";

const Formatter = (value) => <CountUp end={value} separator="," />;

export default function content() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setIsIntersecting(true);
    } else {
      setIsIntersecting(false);
    }
  }, [inView]);

  useEffect(() => {
    AOS.init();
  }, []);
  const bgNature = "url(./nature.jpg)";
  return (
    <>
      <section className={Style.home}>
        <div className={Style.content}>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="300"
            className={Style.contentBx}
          >
            <h1>
              Tingkatkan <span className={Style.span}>Kemampuanmu </span>
              dengan P5
            </h1>
            <p>
              Bakar semangatmu dengan mengikuti P5 Gaya Hidup Berkelanjutan yang
              diadakan dari sekolah sebagai ajang bagi dirimu untuk meningkatkan
              nilai dan sikap bagi para siswa.{" "}
            </p>
            <a>
              <Button
                type="primary"
                style={{ fontWeight: "500", textAlign: "center" }}
              >
                Data Sekarang
              </Button>
            </a>
          </div>
          <div className={Style.imgBx}>
            <img src="./p5-1.png" alt="" />
          </div>
        </div>
      </section>
      <section>
        {/* <div class="container flex flex-col gap-4 mx-8">
        <label class="text-gray-100 font-semibold tracking-wider text-lg">Last Week</label>
        <div class="bg-gray-100 rounded-lg w-full h-auto py-4 flex flex-row justify-between divide-x divide-solid divide-gray-400">
            <div class="relative flex-1 flex flex-col gap-2 px-4">
                <label class="text-gray-800 text-base font-semibold tracking-wider">Total Visitor</label>
                <label class="text-green-800 text-4xl font-bold">14K</label>
                <div class="absolute bg-red-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                    - 5%
                </div>
            </div>
            <div class="relative flex-1 flex flex-col gap-2 px-4">
                <label class="text-gray-800 text-base font-semibold tracking-wider">Total Click</label>
                <label class="text-green-800 text-4xl font-bold">6K</label>
                <div class="absolute bg-green-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                    + 10%
                </div>
            </div>
            <div class="relative flex-1 flex flex-col gap-2 px-4">
                <label class="text-gray-800 text-base font-semibold tracking-wider">Total Profit</label>
                <label class="text-green-800 text-4xl font-bold">$1.2M</label>
                <div class="absolute bg-green-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                    + 5%
                </div>
            </div>
        </div>
    </div> */}
      </section>
      <section id="statistic" className={Style.section}>
        <div
          data-aos="fade-in"
          data-aos-duration="300"
          class="container flex flex-col gap-4 mx-8"
        >
          <Divider>
            <label class="text-gray-800 font-semibold tracking-wider text-lg">
              Statistic
            </label>
          </Divider>
          <div class="bg-white rounded-lg w-full h-auto py-4 flex flex-row justify-between divide-x divide-solid divide-gray-400 shadow-md">
            <div class="relative flex-1 flex flex-col gap-2 px-4">
              <label class="text-gray-800 text-base font-semibold tracking-wider">
                Tanaman
              </label>
              <label class="text-green-800 text-4xl font-bold">
                {" "}
                <div ref={ref}>
                  {isIntersecting ? (
                    <Statistic value={2283493} formatter={Formatter} />
                  ) : (
                    <div style={{ height: "100px" }}></div>
                  )}
                </div>
              </label>
            </div>
            <div class="relative flex-1 flex flex-col gap-2 px-4">
              <label class="text-gray-800 text-base font-semibold tracking-wider">
                Tanaman
              </label>
              <label class="text-green-800 text-4xl font-bold">
                {" "}
                <div ref={ref}>
                  {isIntersecting ? (
                    <Statistic value={2283493} formatter={Formatter} />
                  ) : (
                    <div style={{ height: "100px" }}></div>
                  )}
                </div>
              </label>
            </div>
            <div class="relative flex-1 flex flex-col gap-2 px-4">
              <label class="text-gray-800 text-base font-semibold tracking-wider">
                Yang Bertugas
              </label>
              <label class="text-green-800 text-4xl font-bold">PPLG</label>
            </div>
          </div>
        </div>
      </section>

      {/* <div class={Style.spr}>
        <img src="./sprout.png" />
      </div> */}
      <div class="w-full h-full bg-gray-800 justify-center items-center">
        <section class={Style.section} id="about">
          <Divider>
            <label class="text-[var(--main-color)] font-semibold tracking-wider text-3xl">
              About
            </label>
          </Divider>
          <div data-aos="fade-left" data-aos-duration="300">
            <Tour />
          </div>
        </section>
        <section className={Style.section}>
          <Divider
            style={{
              color: "var(--main-color)",
              fontSize: "20px",
              fontWeight: "500",
            }}
            orientation="left"
            plain
          >
            Tidak hanya itu
          </Divider>
          <div
            class={Style.aboutText}
            data-aos="fade-right"
            data-aos-duration="300"
          >
            <p>
              {" "}
              P5{" "}
              <span
                style={{
                  color: "var(--main-color)",
                  textTransform: "uppercasey",
                }}
              >
                {" "}
                Gaya Hidup Berkelanjutan
              </span>{" "}
              juga membuat pengalaman lingkungan hidup yang keren dan
              berorientasi pada masa depan untuk kehidupan bumi pada masa depan.
              Berpikir kritis, inovasi, kerja sama, pemecahan masalah,
              kepedulian, berani, pola hidup, dan rajin.{" "}
            </p>
          </div>
          <section id="galeri" className={Style.section}>
            <div class="flex min-h-screen flex-wrap content-center justify-center">
              <Divider>
                <label class="text-[var(--main-color)] font-semibold tracking-wider text-3xl">
                  Galery
                </label>
              </Divider>
              <div
                class="grid grid-cols-2 gap-3"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                <div class="w-80 shadow-lg bg-white p-3">
                  <Image.PreviewGroup
                    items={[
                      "./dokumentasi/IMG_20221104_144256.jpg",
                      "./dokumentasi/IMG_20221104_144302.jpg",
                      "./kebersihan/kebersihan1.jpg",
                      "./kebersihan/kebersihan3.jpg",
                      "./kebersihan/kebersihan4.jpg",
                    ]}
                  >
                    <Image
                      height={190}
                      src="./dokumentasi/IMG_20221104_144256.jpg"
                    />
                  </Image.PreviewGroup>
                  <ul class="mt-3 flex flex-wrap">
                    <li class="mr-auto">
                      <a class="flex text-gray-400 hover:text-gray-600">
                        Kebersihan
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-80 shadow-lg bg-white p-3">
                  <Image.PreviewGroup
                    items={[
                      "./dokumentasi/IMG_20221114_142055.jpg",
                      "./dokumentasi/IMG_20221114_142122.jpg",
                      "./Daur-ulang/daurulang1.jpg",
                      "./Daur-ulang/daurulang2.jpg",
                      "./Daur-ulang/daurulang3.jpg",
                    ]}
                  >
                    <Image
                      height={190}
                      src="./dokumentasi/IMG_20221114_142055.jpg"
                    />
                  </Image.PreviewGroup>
                  <ul class="mt-3 flex flex-wrap">
                    <li class="mr-auto">
                      <a class="flex text-gray-400 hover:text-gray-600">
                        Karya Daur Ulang
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-80 shadow-lg bg-white p-3">
                  <Image.PreviewGroup
                    items={[
                      "./tanaman/tanaman1.jpg",
                      "./tanaman/tanaman2.jpg",
                      "./tanaman/tanaman3.jpg",
                      "./tanaman/tanaman4.jpg",
                      "./dokumentasi/IMG_20220809_114628.jpg",
                    ]}
                  >
                    <Image
                      height={190}
                      src="./dokumentasi/IMG_20220809_114618.jpg"
                    />
                  </Image.PreviewGroup>
                  <ul class="mt-3 flex flex-wrap">
                    <li class="mr-auto">
                      <a class="flex text-gray-400 hover:text-gray-600">
                        Tanaman
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-80 shadow-lg bg-white p-3">
                  <Image.PreviewGroup
                    items={[
                      "./milah-sampah/daur1.jpg",
                      "./milah-sampah/daur2.jpg",
                      "./milah-sampah/daur3.jpg",
                      "./milah-sampah/daur4.jpg",
                      "./milah-sampah/daur5.jpg",
                    ]}
                  >
                    <Image height={190} src="./milah-sampah/daur1.jpg" />
                  </Image.PreviewGroup>
                  <ul class="mt-3 flex flex-wrap">
                    <li class="mr-auto">
                      <a class="flex text-gray-400 hover:text-gray-600">
                        Pemilahan Sampah
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <footer className={Style.bgF} style={{ backgroundImage: bgNature }}>
        <section id="contact" class={Style.sectionquotes}>
          <div className={Style.bgquote}>
            <div class={Style.title}>
              <h1 className={Style.h1}>
                " <span className={Style.spantext}>Aku ada </span>lingkunganku{" "}
                <span className={Style.spantext}>bahagia</span> "
              </h1>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </footer>
    </>
  );
}

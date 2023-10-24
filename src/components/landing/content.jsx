"use client";
import Aos from "aos";
import { Image } from "antd";
import React, { useEffect } from "react";
import Style from "./landing.module.css";
import anime from "animejs/lib/anime.es.js";

export default function content() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section data-aos="fade-down" className={Style.home}>
        <div className={Style.content}>
          <div className={Style.contentBx}>
            <h1>
              P5 <span className={Style.span}>udah we</span>
            </h1>
            <p>
              Bakar semangatmu untuk mengikuti P5 Gaya Hidup Berkelanjutan yang
              diadakan{" "}
            </p>
            <a className={Style.btn}>Data Sekarang</a>
          </div>
          <div className={Style.imgBx}>
            <img src="./p5-1.png" alt="" />
          </div>
        </div>
        <div className={Style.infoBx}>
          <div className={Style.box}>
            <i className="far fa-user"></i>
            <div className={Style.info}>
              <h4>2400+</h4>
              <p>Plant</p>
            </div>
          </div>
          <div className={Style.box}>
            <i className="far fa-user"></i>
            <div className={Style.info}>
              <h4>200+</h4>
              <p>Plant</p>
            </div>
          </div>
          <div className={Style.box}>
            <i className="far fa-user"></i>
            <div className={Style.info}>
              <h4>PPLG</h4>
              <p>Yang Bertugas</p>
            </div>
          </div>
        </div>
      </section>
      <div class={Style.spr}>
        <img src="./sprout.png" />
      </div>
      <section class={Style.section} id="about">
        <div className={Style.bgicon}>
          <img src="./handshake.png" alt=""></img>
        </div>

        <div className={Style.about}>
          <div className={Style.aboutImg}>
            <img src="./p5-2.png" />
          </div>
          <div class={Style.aboutText}>
            <div></div>

            <div className={Style.card}>
              <div className={Style.cards}>
                <div class="px-3 py-2 ">
                  <div class={Style.titlecard}>
                    Kepedulian <br />
                  </div>
                  <div className={Style.textcard}>
                    P5 Melatih kepedulian akan lingkungan hidup dan
                    mengembangkan sikap kepedulian{" "}
                  </div>
                </div>
              </div>
              <div className={Style.cards}>
                <div class="px-3 py-2 ">
                  <div class={Style.titlecard}>Kerja sama</div>
                  <div className={Style.textcard}>
                    P5 Melatih kekeluargaan dan kekompakkan yang begitu erat
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.cards}>
                <div class="px-3 py-2 ">
                  <div class={Style.titlecard}>Kritis</div>
                  <div className={Style.textcard}>
                    P5 Melatih Berpikiran kritis dalam menghadapi dan memecahkan
                    masalah-masalah yang ada
                  </div>
                </div>
              </div>
              <div className={Style.cards}>
                <div class="px-3 py-2 ">
                  <div class={Style.titlecard}>Gaya Hidup</div>
                  <div className={Style.textcard}>
                    P5 Melatih kita agar memiliki gaya hidup yang sehat untuk
                    kehidupan di masa yang akan datang
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.bgicon2}>
            <img src="./idea.png" alt=""></img>
          </div>
        </div>
      </section>
      <div className={Style.bgdoc}>
        <img width={700} src="./dokumentasi.png" alt="" />
      </div>
      <section className={Style.section}>
        <div class={Style.aboutText}>
          <h2>
            <span className={Style.span}>
              ipson dolor amet amet ih jabang bayi
            </span>
          </h2>

          <p>
            {" "}
            memiliki minat di bidang IT. Saya memiliki beberapa pengalaman
            membuat project pemograman pembuatan website back-end dan front-end.
            Saya senang mengupgrade diri, menambah relasi, dan mengeksplor hal
            baru.{" "}
          </p>
        </div>
      </section>
      <section>
        <div className={Style.imgsak}>
          <img src="./sakura.png" alt="" />
        </div>
        <h1 className={Style.title}>Galeri</h1>
        <div class="flex min-h-screen flex-wrap content-center justify-center p-9">
          <div class="grid grid-cols-2 gap-3">
            <div class="w-80 shadow-lg bg-white p-3">
              <Image.PreviewGroup
                items={[
                  "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                  "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
                  "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
                ]}
              >
                <Image
                  height={190}
                  src="./dokumentasi/IMG_20220809_114618.jpg"
                />
              </Image.PreviewGroup>
              <ul class="mt-3 flex flex-wrap">
                <li class="mr-auto">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    Kebersihan
                  </a>
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
              </ul>
            </div>
            <div class="w-80 shadow-lg bg-white p-3">
              <Image.PreviewGroup
                items={[
                  "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                  "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
                  "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
                ]}
              >
                <Image
                  height={190}
                  src="./dokumentasi/IMG_20220809_114618.jpg"
                />
              </Image.PreviewGroup>
              <ul class="mt-3 flex flex-wrap">
                <li class="mr-auto">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    Karya Daur Ulang
                  </a>
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
              </ul>
            </div>
            <div class="w-80 shadow-lg bg-white p-3">
              <Image.PreviewGroup
                items={[
                  "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                  "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
                  "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
                ]}
              >
                <Image
                  height={190}
                  src="./dokumentasi/IMG_20220809_114618.jpg"
                />
              </Image.PreviewGroup>
              <ul class="mt-3 flex flex-wrap">
                <li class="mr-auto">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    Tanaman
                  </a>
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
              </ul>
            </div>
            <div class="w-80 shadow-lg bg-white p-3">
              <Image.PreviewGroup
                items={[
                  "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                  "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
                  "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
                ]}
              >
                <Image
                  height={190}
                  src="./dokumentasi/IMG_20220809_114618.jpg"
                />
              </Image.PreviewGroup>
              <ul class="mt-3 flex flex-wrap">
                <li class="mr-auto">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    Pemilahan Sampah
                  </a>
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex text-gray-400 hover:text-gray-600"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class={Style.sectionquotes}>
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
        <footer>
          <div class={Style.socialMedia}>
            <p>Social Media</p>
            <div class={Style.icon}>
              <a href="https://www.instagram.com/smkwikrama/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  width="24"
                  height="24"
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                  <circle cx="16.806" cy="7.207" r="1.078"></circle>
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                </svg>
              </a>
              <a href="https://twitter.com/smkwikrama">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  width="24"
                  height="24"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

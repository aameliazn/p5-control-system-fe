"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/context/LoginContext";
import { Image, Form, Input, Button, message } from "antd";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function form() {
  const router = useRouter();

  const { setDataUser, tokenUser, setTokenUser } = useLogin();

  useEffect(() => {
    if (tokenUser) {
      router.push("/dashboard");
    }
  }, [tokenUser]);

  const onFinish = (values) => {
    axios
      .post(`/api/v1/auth/login`, values)
      .then((res) => {
        setTokenUser(res?.data?.data?.access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res?.data?.data?.access_token}`;

        axios
          .get(`/api/v1/auth/me`)
          .then((res) => {
            setDataUser(res?.data);
            message.success("Login successfully");
            router.push("/dashboard");
          })
          .catch((err) => {
            console.log(err);
            message.error(err?.response?.data?.message);
          });
      })
      .catch((err) => {
        console.log(err);
        message.error(err?.response?.data?.message);
      });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="300"
        class="w-full max-w-3xl h-screen flex items-center justify-center m-auto"
      >
        <div class="bg-white shadow-2xl rounded-lg p-7 flex gap-10 ">
          <div class="w-full">
            <Image src="/milah-sampah/daur2.jpg" height="100%" alt="milah" />
          </div>
          <div className="costum-width">
            <div className="grid text-center mb-7">
              <div className="font-bold text-2xl text-[var(--second-color)]">Masuk</div>
              <div className="font-light text-sm">Selamat Datang di P5 !!</div>
            </div>

            <Form
              layout="vertical"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                style={{
                  paddingBottom: "10px",
                }}
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 24,
                }}
              >
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
                <div className="text-center mt-3 font-light text-xs">
                  Data nama dan password <br />
                  harus <b className="font-bold text-[var(--second-color)]">benar</b>
                </div>
              </Form.Item>
            </Form>
            <div class="flex items-center justify-center">
              <div class="grid grid-cols-3 gap-4">
                <a  href="https://www.instagram.com/smkwikrama">
                <button
                  id="instagram"
                  class=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 "
                >
                  <i style={{ textAlign: "-webkit-center" }}>
                    <FaInstagram />
                  </i>
                </button>
                </a>
                <a href="https://wa.me/6281310346123?text=Halo,%20saya%20ingin%20bertanya%20tentang%20p5!">
                <button
                  id="whatsapp"
                  class="bg-white duration-500    w-12 h-12 border-2 rounded-full border-green-600 transform hover:-translate-y-3  text-2xl text-green-500 hover:bg-green-600 hover:text-white"
                >
                  <i style={{ textAlign: "-webkit-center" }}>
                    <FaWhatsapp />
                  </i>
                </button>
                </a>
                <a href="https://www.linkedin.com/school/smkwikramabogor/">
                <button
                  id="linkedin"
                  class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl"
                >
                  <i style={{ textAlign: "-webkit-center" }}>
                    <FaLinkedin />
                  </i>
                </button>
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import AOS from "aos";
import "aos/dist/aos.css"
import React, {useEffect} from "react";
import axios from "axios";
import { Image, Form, Input, Button, message } from "antd";
import { useRouter } from "next/navigation";
import { useLogin } from "@/context/LoginContext";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function form() {
  const router = useRouter();

  // data login
  const { setDataUser, setTokenUser } = useLogin();
 
  // login
  const onFinish = (values) => {
    axios
      .post(`/api/v1/auth/login`, values)
      .then((res) => {
        setTokenUser(res?.data?.data?.access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res?.data?.data?.access_token}`;
        router.push("/dashboard");
        message.success("Login successfully");

        axios
          .get(`/api/v1/auth/me`)
          .then((res) => {
            setDataUser(res?.data);
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
      <div data-aos="zoom-in"
            data-aos-duration="300" class="w-full max-w-3xl h-screen flex items-center justify-center m-auto">
        <form
          class="bg-white shadow-2xl rounded-lg p-7  flex gap-10 "
          onSubmit={onFinish}
        >
          <div class="w-full">
            <Image src="/milah-sampah/daur2.jpg" height="100%" alt="milah" />
          </div>
          <div className="costum-width">
            <div className="grid text-center mb-7">
              <div className="font-bold text-2xl">Masuk</div>
              <div className="font-light text-sm">
               Selamat Datang di P5 !!
              </div>
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
          <Button style={{ width: "100%" }} type="default" htmlType="submit">
            Login
          </Button>
          <div className="text-center mt-3 font-light text-xs">
                Data nama dan password <br />
                harus <b className="font-bold">benar</b>
              </div>
        </Form.Item>
      </Form>
          </div>
          <div></div>
        </form>
      </div>
    </>
  );
}

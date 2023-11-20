"use client";
import React from "react";
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

  return (
    <>
      {/* <div class="w-full max-w-3xl h-screen flex items-center justify-center m-auto">
        <form
          class="bg-white shadow-2xl rounded-lg p-7  flex gap-10 "
          onSubmit={onFinish}
        >
          <div class="w-full">
            <Image src="/kiko.jpeg" height="100%" alt="" />
          </div>
          <div className="costum-width">
            <div className="grid text-center mb-7">
              <div className="font-bold text-2xl">Login</div>
              <div className="font-light text-xs">
                Data nama dan password <br />
                harus benar
              </div>
            </div>

            <div class="mb-6 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>
              <input
                class=" w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                name="username"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e?.target?.value);
                }}
              />
            </div>
            <div class="mb-6 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>

              <input
                class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                name="password"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => {
                  setPassword(e?.target?.value);
                }}
              />
            </div>
            <div class="grid items-center">
              <button
                class="bg-[#4c8e06]  hover:bg-[#94d153] hover:-translate-y-1 transition-all duration-500 text-white font-bold py-2 px-4 ml-10 mr-10  rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <hr class="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <p class="text-center text-gray-500 text-xs">
                Jika anda tidak mempunyai akun, sadarlah bahwa anda bukan murid
                wikrama. Namun jika anda wikrama beneran, maka mintalah data ke
                kesiswaan sekolah SMK Wikrama Bogor untuk pendataan
              </p>
            </div>
          </div>
          <div></div>
        </form>
      </div> */}
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
        </Form.Item>
      </Form>
    </>
  );
}

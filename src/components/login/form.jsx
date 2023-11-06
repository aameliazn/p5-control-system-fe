"use client";
import axios from "axios";
import { Image } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/context/LoginContext";

export default function form() {
  const router = useRouter();

  // data login
  const { setDataUser, setTokenUser } = useLogin;

  // data form login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // login
  const onFinish = (e) => {
    axios
      .post(`/api/v1/auth/login`, e)
      .then((res) => {
        // setTokenUser(res?.data);
        // setDataUser(res?.data);
        // axios.defaults.headers.common["Authorization"] = `Bearer ${res?.data}`;
        // router.push("/dashboard");
        e.preventDefault()
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <>
      <div class="w-full max-w-3xl h-screen flex items-center justify-center m-auto">
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
      </div>
    </>
  );
}

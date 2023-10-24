import React from "react";
import Style from "./landing.module.css";
import Link from "next/link";

export default function navbar() {
  return (
    <>
      <div data-aos="fade-down" className={Style.header}>
        <div
          x-data="{ open: false }"
          class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
          <div class="p-4 flex flex-row items-center justify-between">
            <a
              href="#"
              class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              P5 GAYA HIDUP BERKELANJUTAN
            </a>
            <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path
                  x-show="!open"
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
                <path
                  x-show="open"
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <ul className={Style.navlist}>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
          </ul>
          <div className=" pb-4 md:pb-0 hidden md:flex md:justify-center md:flex-row">
            <Link href={"/login"}>
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

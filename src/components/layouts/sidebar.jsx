"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { TbLogout2 } from "react-icons/tb";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";
import { MdGrass, MdOutlineRecycling } from "react-icons/md";
import { GiObservatory } from "react-icons/gi";
import { TbMessage2Question } from "react-icons/tb";
import Avatar from "../../../public/iconUserOutlined.png";
import Logo from "../../../public/logo/logo_wikrama.png";

export default function sidebar({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const dataUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="flex flex-row sm:gap-10">
        <div className="sm:w-full sm:max-w-[18rem]">
          <input
            type="checkbox"
            id="sidebar-mobile-fixed"
            className="sidebar-state"
          />
          <label
            htmlFor="sidebar-mobile-fixed"
            className="sidebar-overlay"
          ></label>
          <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
            <section className="sidebar-title items-center p-4">
              <Image src={Logo} alt="Logo" height={50} width={50} />
              <div className="flex flex-col ml-2">
                <span>P5 Control System</span>
                <span className="text-xs font-normal text-content2">
                  Gaya Hidup Berkelanjutan
                </span>
              </div>
            </section>
            <section className="sidebar-content">
              <nav className="menu rounded-md">
                <section className="menu-section px-4">
                  <span className="menu-title">Main menu</span>
                  <ul className="menu-items">
                    <Link href={"/dashboard"}>
                      <li
                        className={`menu-item ${
                          pathname == "/dashboard" ? "menu-active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>Dashboard</span>
                      </li>
                    </Link>
                    <Link href={"/materi"}>
                      <li
                        className={`menu-item ${
                          pathname == "/materi" ? "menu-active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span>Materi</span>
                      </li>
                    </Link>
                    <li>
                      <input
                        type="checkbox"
                        id="menu-1"
                        className="menu-toggle"
                      />
                      <label
                        className={`justify-between menu-item ${
                          pathname == "/kebersihan-sekolah" ||
                          pathname == "/kebersihan-diri" ||
                          pathname == "/piket-wc"
                            ? "menu-item-disabled"
                            : ""
                        }`}
                        htmlFor="menu-1"
                      >
                        <div className="flex gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span>Kebersihan</span>
                        </div>

                        <span className="menu-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </label>

                      <div
                        className={`${
                          pathname == "/kebersihan-sekolah" ||
                          pathname == "/kebersihan-diri" ||
                          pathname == "/piket-wc"
                            ? "menu-active"
                            : "menu-item-collapse"
                        }`}
                      >
                        <div className="min-h-0">
                          {/* <label className="menu-item menu-item-disabled ml-6">
                            Change Email
                          </label> */}

                          {dataUser?.role != "user" && (
                            <Link href={"/kebersihan-diri"}>
                              <label
                                className={`menu-item ${
                                  pathname == "/kebersihan-diri"
                                    ? "menu-active"
                                    : ""
                                }`}
                              >
                                Kebersihan Diri
                              </label>
                            </Link>
                          )}

                          {dataUser?.role == "user" && (
                            <Link href={"/piket-wc"}>
                              <label
                                className={`menu-item ${
                                  pathname == "/piket-wc" ? "menu-active" : ""
                                }`}
                              >
                                Piket WC
                              </label>
                            </Link>
                          )}

                          <Link href={"/kebersihan-sekolah"}>
                            <label
                              className={`menu-item ${
                                pathname == "/kebersihan-sekolah"
                                  ? "menu-active"
                                  : ""
                              }`}
                            >
                              Kebersihan Sekolah
                            </label>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <Link href={"/tanaman"}>
                      <li
                        className={`menu-item ${
                          pathname == "/tanaman" ? "menu-active" : ""
                        }`}
                      >
                        <MdGrass   className="h-5 w-5  opacity-75"/>
                        <span>Tanaman</span>
                      </li>
                    </Link>
                    <Link href={"/daur-ulang"}>
                      <li
                        className={`menu-item ${
                          pathname == "/daur-ulang" ? "menu-active" : ""
                        }`}
                      >
                        <MdOutlineRecycling className="h-5 w-5 opacity-75" />
                        <span>Daur Ulang</span>
                      </li>
                    </Link>
                    <Link href={"/observasi"}>
                      <li
                        className={`menu-item ${
                          pathname == "/observasi" ? "menu-active" : ""
                        }`}
                      >
                        <GiObservatory className="h-5 w-5 opacity-75"/>
                        <span>Observasi</span>
                      </li>
                    </Link>
                    <Link href={"/portofolio"}>
                      <li
                        className={`menu-item ${
                          pathname == "/portofolio" ? "menu-active" : ""
                        }`}
                      >
                       <TbMessage2Question className="h-5 w-5 opacity-75"/>
                        <span>Portofolio</span>
                      </li>
                    </Link>
                  </ul>
                </section>
                {/* <div className="divider my-0"></div>
                <section className="menu-section px-4">
                  <span className="menu-title">Settings</span>
                  <ul className="menu-items">
                    <li className="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-75"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M3 21l18 0"></path>
                        <path d="M3 10l18 0"></path>
                        <path d="M5 6l7 -3l7 3"></path>
                        <path d="M4 10l0 11"></path>
                        <path d="M20 10l0 11"></path>
                        <path d="M8 14l0 3"></path>
                        <path d="M12 14l0 3"></path>
                        <path d="M16 14l0 3"></path>
                      </svg>
                      Payments
                    </li>
                    <li className="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-75"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
                        <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"></path>
                      </svg>
                      Balances
                    </li>
                    <li className="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-75"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                      </svg>
                      Customers
                    </li>
                    <li className="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-75"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M7 10l5 -6l5 6"></path>
                        <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
                        <path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      </svg>
                      Products
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="menu-2"
                        className="menu-toggle"
                      />
                      <label
                        className="menu-item justify-between"
                        htmlFor="menu-2"
                      >
                        <div className="flex gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-75"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                            <path d="M9 7l4 0"></path>
                            <path d="M9 11l4 0"></path>
                          </svg>
                          <span>Contracts</span>
                        </div>

                        <span className="menu-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </label>

                      <div className="menu-item-collapse">
                        <div className="min-h-0">
                          <label className="menu-item menu-item-disabled ml-6">
                            Create contract
                          </label>
                          <label className="menu-item ml-6">
                            All contracts
                          </label>
                          <label className="menu-item ml-6">
                            Pending contracts
                          </label>
                          <label className="menu-item ml-6">Security</label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section> */}
              </nav>
            </section>
            <section className="sidebar-footer justify-end bg-gray-2 pt-2">
              <div className="divider my-0"></div>
              <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
                <label
                  className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
                  tabIndex="0"
                >
                  <div className="flex flex-row gap-4 p-4">
                    <div className="avatar-square avatar avatar-md">
                        <Image src={Avatar} alt="avatar" />
                    </div>

                    <div className="flex flex-col">
                      <span
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "190px",
                        }}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={
                          dataUser?.username
                            ? dataUser?.username.charAt(0).toUpperCase() +
                              dataUser?.username.slice(1).replace(/\d/g, "")
                            : "User"
                        }
                      >
                        {dataUser?.username
                          ? dataUser?.username.charAt(0).toUpperCase() +
                            dataUser?.username.slice(1).replace(/\d/g, "")
                          : "User"}
                      </span>
                      <Tooltip id="my-tooltip" style={{ maxWidth: "300px" }} />
                      <span className="text-xs font-normal text-content2">
                        {dataUser?.username ? dataUser?.username : "User"}
                      </span>
                    </div>
                  </div>
                </label>
                <div className="dropdown-menu-right-top dropdown-menu ml-2 mb-5">
                  {/* <a className="dropdown-item text-sm">Profile</a> */}
                  <a
                    tabIndex="-1"
                    className="dropdown-item text-[15px] text-rose-600"
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("user");
                      router.push("/login");
                    }}
                  >
                    <span className="flex gap-2">
                      <TbLogout2 size={23} />
                      Logout
                    </span>
                  </a>
                  {/* <a tabIndex="-1" className="dropdown-item text-sm">
                    Account settings
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm">
                    Change email
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm">
                    Subscriptions
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm">
                    Change password
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm">
                    Refer a friend
                  </a>
                  <a tabIndex="-1" className="dropdown-item text-sm">
                    Settings
                  </a> */}
                </div>
              </div>
            </section>
          </aside>
        </div>
        <div className="flex w-full flex-col p-4">
          <div className="w-fit">
            <label
              htmlFor="sidebar-mobile-fixed"
              className="sm:hidden cursor-pointer"
            >
              <HiOutlineMenuAlt2 size={27} />
            </label>
          </div>

          <div className="mr-0 mt-4 sm:mr-10">{children}</div>
        </div>
      </div>
    </>
  );
}

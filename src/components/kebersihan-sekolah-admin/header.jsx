import React from "react";
import { BsDownload } from "react-icons/bs";
import { Button } from "antd";

export default function header() {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="relative flex flex-col jus items-center overflow-hidden p-2 w-full sm:py-10  ">
          <div className="bg-white  shadow-xl shadow-gray-100 w-full flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4   border-b-2 border-[var(--main-color)] rounded-lg">
          <h3 className="font-bold mt-px">Jurnal Kebersihan Sekolah</h3>
            <div>
              <Button
                shape="circle"
                style={{
                  boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BsDownload size={15} />{" "}
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col jus items-center overflow-hidden p-2 w-full sm:py-10  ">
          <div className="bg-white  shadow-xl shadow-gray-100 w-full flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4   border-b-2 border-[var(--main-color)] rounded-lg">
          <h3 className="font-bold mt-px">Jurnal Kebersihan Diri</h3>
            <div>
              <Button
                shape="circle"
                style={{
                  boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BsDownload size={15} />{" "}
              </Button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

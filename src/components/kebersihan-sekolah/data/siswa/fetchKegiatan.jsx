"use client";
import Style from "./style.module.css";
import React, { useState } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { Card, Table, Divider, Input, Space, Button } from "antd";
import { useKebersihanSekolah } from "@/context/KebersihanSekolahContext";

export default function fetchKegiatan() {
  const {
    table,
    setCurrentPage,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
    searchInput,
    pagination,
    setPagination,
    itemsPerPage,
  } = useKebersihanSekolah();

  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible((prev) => !prev);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const handleChangePage = (pagination, page, filters, sorter, extra) => {
    setCurrentPage(page),
      setPagination({
        total: filters?.length,
        pageSize: itemsPerPage,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        showSizeChanger: false,
        position: ["bottomCenter"],
      });
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="default"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            style={{ color: "green" }}
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            style={{ color: "green" }}
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "green" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#4ade80",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      width: "10%",
      align: "center",
      sorter: {
        compare: (a, b) => a.id - b.id,
      },
    },
    {
      title: "Kegiatan",
      dataIndex: "kegiatan",
      key: "kegiatan",
      sorter: {
        compare: (a, b) => a.kegiatan.localeCompare(b.kegiatan),
      },
      ...getColumnSearchProps("kegiatan"),
    },
    {
      title: "Kondisi",
      dataIndex: "kondisi",
      key: "kondisi",
      sorter: {
        compare: (a, b) => a.kondisi.localeCompare(b.kondisi),
      },
      ...getColumnSearchProps("kondisi"),
    },
    {
      title: "Skor",
      dataIndex: "skor",
      key: "skor",
      align: "center",
      sorter: {
        compare: (a, b) => a.skor.localeCompare(b.skor),
      },
      ...getColumnSearchProps("skor"),
    },
    {
      title: "Checklist",
      key: "checklist",
      width: "10%",
      align: "center",
      render: () => (
        <div ClassName="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            ClassName="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },

    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },

    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  return (
    <>
      <div className="mt-7">
        <div className="items-center justify-center flex">
          <div className={Style.cardwrapper}>
            <div className="w-full">
              <p className="max-w-full font-bold text-white md:w-[64%] md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
                <span style={{ fontSize: 40 }}>Kebersihan Sekolah</span> <br />
                <span style={{ fontSize: 25, opacity: "80%" }}>
                  Siti Hajima Maste Iruka
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Card
          className={isContentVisible ? Style.tableAnt : Style.tableAntVisible}
        >
          <div className="flex justify-center gap-2">
            <p
              style={{
                fontSize: 19,
                cursor: "pointer",
                margin: "-7px 0px",
                fontWeight: "bold",
              }}
              onClick={toggleContentVisibility}
            >
              Kebersihan Sekolah Minggu 1
            </p>
            <AiOutlineDownload size={25} style={{ marginTop: -5 }} />
          </div>

          {isContentVisible && <Divider />}

          {isContentVisible && (
            <div className="mb-5 -mt-1 flex gap-4">
              <div>
                <span className="bg-teal-100 text-teal-700 rounded px-3 py-2 font-medium">
                  {`Gedung: Pajajaran 2`}
                </span>
              </div>
              <div>
                <span className="bg-lime-100 text-lime-700 rounded px-3 py-2 font-medium">
                  {`Lantai: 2`}
                </span>
              </div>
            </div>
          )}

          {isContentVisible && (
            <Table
              columns={columns}
              dataSource={table}
              pagination={pagination}
              onChange={handleChangePage}
            />
          )}
        </Card>
      </div>
      <div className="mt-6">
        <Card
          className={isContentVisible ? Style.tableAnt : Style.tableAntVisible}
        >
          <div className="flex justify-center gap-2">
            <p
              style={{
                fontSize: 19,
                cursor: "pointer",
                margin: "-7px 0px",
                fontWeight: "bold",
              }}
              onClick={toggleContentVisibility}
            >
              Kebersihan Sekolah Minggu 2
            </p>
            <AiOutlineDownload size={25} style={{ marginTop: -5 }} />
          </div>

          {isContentVisible && <Divider />}

          {isContentVisible && (
            <div className="mb-5 -mt-1 flex gap-4">
              <div>
                <span className="bg-teal-100 text-teal-700 rounded px-3 py-2 font-medium">
                  {`Gedung: Pajajaran 2`}
                </span>
              </div>
              <div>
                <span className="bg-lime-100 text-lime-700 rounded px-3 py-2 font-medium">
                  {`Lantai: 2`}
                </span>
              </div>
            </div>
          )}

          {isContentVisible && (
            <Table
              columns={columns}
              dataSource={table}
              pagination={pagination}
              onChange={handleChangePage}
            />
          )}
        </Card>
      </div>
    </>
  );
}

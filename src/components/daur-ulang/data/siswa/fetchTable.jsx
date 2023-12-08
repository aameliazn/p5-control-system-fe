"use client";
import Style from "./style.module.css";
import React, { useState } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { useDaurUlang } from "@/context/DaurUlangContext";
import { Card, Table, Divider, Input, Space, Button } from "antd";

export default function fetchTable() {
  const {
    dataPemilahan,
    setCurrentPage,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
    searchInput,
    pagination,
    setPagination,
    itemsPerPage,
  } = useDaurUlang();

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

  const dataColumns = [
    {
      title: "Ruangan",
      dataIndex: "id",
      key: "id",
      width: "10%",
      align: "center",
      sorter: {
        compare: (a, b) => a.id - b.id,
      },
      ...getColumnSearchProps("id"),
    },
    {
      title: "An-organik",
      children: [
        {
          title: "Bruto",
          dataIndex: "bruto",
          key: "bruto",
          sorter: {
            compare: (a, b) => a.bruto.localeCompare(b.bruto),
          },
          ...getColumnSearchProps("bruto"),
        },
        {
          title: "Netto",
          dataIndex: "netto",
          key: "netto",
          sorter: {
            compare: (a, b) => a.netto.localeCompare(b.netto),
          },
          ...getColumnSearchProps("netto"),
        },
      ],
    },
    {
      title: "Residu",
      children: [
        {
          title: "Bruto",
          dataIndex: "bruto",
          key: "bruto",
          sorter: {
            compare: (a, b) => a.bruto.localeCompare(b.bruto),
          },
          ...getColumnSearchProps("bruto"),
        },
        {
          title: "Netto",
          dataIndex: "netto",
          key: "netto",
          sorter: {
            compare: (a, b) => a.netto.localeCompare(b.netto),
          },
          ...getColumnSearchProps("netto"),
        },
      ],
    },
    {
      title: "Organik",
      children: [
        {
          title: "Bruto",
          dataIndex: "bruto",
          key: "bruto",
          sorter: {
            compare: (a, b) => a.bruto.localeCompare(b.bruto),
          },
          ...getColumnSearchProps("bruto"),
        },
        {
          title: "Netto",
          dataIndex: "netto",
          key: "netto",
          sorter: {
            compare: (a, b) => a.netto.localeCompare(b.netto),
          },
          ...getColumnSearchProps("netto"),
        },
      ],
    },
  ];

  return (
    <>
      <div className="mt-7">
        <div className="items-center justify-center flex">
          <div className={Style.cardWrapper}>
            <div className="w-full">
              <p className="max-w-full font-bold text-white md:w-[64%] md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
                <span style={{ fontSize: 40 }}>Daur Ulang</span> <br />
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
              Daur Ulang Minggu 1
            </p>
            <AiOutlineDownload
              size={25}
              style={{ marginTop: -5, cursor: "pointer" }}
            />
          </div>

          {isContentVisible && <Divider />}

          {isContentVisible && (
            <Table
              columns={dataColumns}
              dataSource={dataPemilahan}
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
              Daur Ulang Minggu 2
            </p>
            <AiOutlineDownload
              size={25}
              style={{ marginTop: -5, cursor: "pointer" }}
            />
          </div>

          {isContentVisible && <Divider />}

          {isContentVisible && (
            <Table
              columns={dataColumns}
              dataSource={dataPemilahan}
              pagination={pagination}
              onChange={handleChangePage}
            />
          )}
        </Card>
      </div>
    </>
  );
}

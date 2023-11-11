"use client";
import React from "react";
import Style from "./style.module.css";
import Highlighter from "react-highlight-words";
import { AiOutlineDelete } from "react-icons/ai";
import { SearchOutlined } from "@ant-design/icons";
import { useKebersihanDiri } from "@/context/KebersihanDiriContext";
import { Table, Typography, Button, Input, Space, Card } from "antd";

const { Title } = Typography;

export default function kegiatanTable() {
  const {
    visible,
    setVisible,
    kegiatanTable,
    handleDelete,
    setCurrentPage,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
    searchInput,
    pagination,
    setPagination,
    itemsPerPage
  } = useKebersihanDiri();

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

  const columnKegiatan = [
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
      title: "Action",
      key: "action",
      width: "10%",
      align: "left",
      render: (text, record) => (
        <a
          onClick={() => handleDelete(record?.id)}
          style={{ cursor: "pointer" }}
        >
          <AiOutlineDelete color={"red"} size={24} />
        </a>
      ),
    },
  ];

  return (
    <>
      <div className="mt-5">
        <div className="flex flex-row justify-between">
          <Title level={3}>Kebersihan Diri</Title>
          <button
            className={
              "btn border-2 border-solid text-green-700 border-green-700 w-1/6 hover:bg-emerald-700 hover:border-emerald-700 hover:text-stone-50"
            }
            onClick={() => {
              setVisible(!visible);
            }}
          >
            Tambah Kegiatan
          </button>
        </div>
        <Card size="small" className={Style.tableAnt}>
          <Table
            columns={columnKegiatan}
            dataSource={kegiatanTable}
            pagination={pagination}
            onChange={handleChangePage}
          />
        </Card>
      </div>
    </>
  );
}

"use client";
import React from "react";
import Style from "./style.module.css";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { AiOutlineDownload } from "react-icons/ai";
import { usePiketWc } from "@/context/PiketWcContext";
import { Table, Button, Spin, Space, Input, Card, Divider } from "antd";

export default function TableComponent() {
  const {
    kegiatan,
    loading,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
    setCurrentPage,
    searchInput,
    pagination,
    setPagination,
    itemsPerPage,
  } = usePiketWc();

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

  const column = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      width: "7%",
      align: "center",
      sorter: {
        compare: (a, b) => a.id - b.id,
      },
    },
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
      width: "21%",
      sorter: {
        compare: (a, b) => a.nama.localeCompare(b.nama),
      },
      ...getColumnSearchProps("nama"),
    },
    {
      title: "Rombel",
      dataIndex: "rombel",
      key: "rombel",
      width: "15%",
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.rombel.includes(value),
      sorter: {
        compare: (a, b) => a.rombel.localeCompare(b.rombel),
      },
      filters: [...new Set(kegiatan.map((item) => item.rombel))].map((el) => {
        return { text: el, value: el };
      }),
    },
    {
      title: "Rayon",
      dataIndex: "rayon",
      key: "rayon",
      width: "15%",
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.rayon.includes(value),
      sorter: {
        compare: (a, b) => a.rayon.localeCompare(b.rayon),
      },
      filters: [...new Set(kegiatan.map((item) => item.rayon))].map((el) => {
        return { text: el, value: el };
      }),
    },
    {
      title: "Kode",
      dataIndex: "code",
      key: "code",
      width: "9%",
      align: "center",
      filterMode: "tree",
      onFilter: (value, record) => record.code.includes(value),
      sorter: {
        compare: (a, b) => a.code.localeCompare(b.code),
      },
      filters: [...new Set(kegiatan.map((item) => item.code))].map((el) => {
        return { text: el, value: el };
      }),
    },
    {
      title: "Tempat Piket",
      dataIndex: "tempatPiket",
      key: "tempatPiket",
      width: "16%",
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.tempatPiket.includes(value),
      sorter: {
        compare: (a, b) => a.tempatPiket.localeCompare(b.tempatPiket),
      },
      filters: [...new Set(kegiatan.map((item) => item.tempatPiket))].map(
        (el) => {
          return { text: el, value: el };
        }
      ),
    },
    {
      title: "Sesi",
      dataIndex: "sesi",
      key: "sesi",
      width: "9%",
      align: "center",
      filterMode: "tree",
      onFilter: (value, record) => record.sesi.includes(value),
      sorter: {
        compare: (a, b) => a.sesi.localeCompare(b.sesi),
      },
      filters: [...new Set(kegiatan.map((item) => item.sesi))].map((el) => {
        return { text: el, value: el };
      }),
    },
    {
      title: "Bersih",
      key: "bersih",
      width: "8%",
      render: () => (
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
          <div className={Style.cardWrapper}>
            <div className="w-full">
              <p className="max-w-full font-bold text-white md:w-[64%] md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
                <span style={{ fontSize: 40 }}>Piket Wc</span> <br />
                <span style={{ fontSize: 25, opacity: "80%" }}>
                  Senin, 02 Oktober 2023
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Spin spinning={loading}>
          {/* kurang tombol submit */}
          <Card className={Style.tableAnt}>
            <div className="flex justify-center gap-2">
              <p
                style={{
                  fontSize: 19,
                  margin: "-7px 0px",
                  fontWeight: "bold",
                }}
              >
                Senin, 02 Oktober 2023
              </p>
              <AiOutlineDownload size={25} style={{ marginTop: -5 }} />
            </div>
            <Divider />
            <Table
              columns={column}
              dataSource={kegiatan}
              pagination={pagination}
              onChange={handleChangePage}
            />
          </Card>
        </Spin>
      </div>
    </>
  );
}

import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, PageHeader } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  getChildsFromParentWithAddress,
  getAllUser,
} from "../../shared/contractDeploy";
/* import "./UsersSearch.css"; */

const UsersSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [allUsers, setAllUsers] = useState([]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
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
            type="primary"
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
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  useEffect(() => {
    const loadUsers = async () => {
      try {
        console.log("a");
        const res = await getAllUser();
        console.log(res);
        setAllUsers(res);
      } catch (e) {
        console.error(e);
      }
    };
    loadUsers();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
      ...getColumnSearchProps("firstName"),
    },
    {
      title: "Surname",
      dataIndex: "lastName",
      key: "lastName",
      ...getColumnSearchProps("lastName"),
    },
    {
      title: "Address",
      dataIndex: "addresses",
      key: "addresses",
      ...getColumnSearchProps("addresses"),
    },
  ];

  const childColumns = [
    {
      dataIndex: "firstName",
      key: "firstName",
      ...getColumnSearchProps("firstName"),
    },
    {
      dataIndex: "lastName",
      key: "lastName",
      ...getColumnSearchProps("lastName"),
    },
    {
      dataIndex: "addresses",
      key: "addresses",
      ...getColumnSearchProps("addresses"),
    },
  ];
  return (
    <div>
      <div className="ok">
        <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png"></img>

        <h1>USERS</h1>
      </div>

      <Table columns={columns} dataSource={allUsers || []} />
      <div> Yeni</div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              <Table columns={childColumns} dataSource={allUsers || []} />
            </p>
          ),
          rowExpandable: (record) => record.firstName !== "Not Expandable",
        }}
        dataSource={allUsers || []}
      />
    </div>
  );
};

export default UsersSearch;

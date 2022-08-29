import React, { useEffect, useRef, useState } from "react";
import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  Space,
  Table,
  PageHeader,
  Tag,
  Skeleton,
  Typography,
  Layout,
} from "antd";
import {
  getChildsFromParentWithAddress,
  getAllParent,
} from "../../shared/contractDeploy";
import "./UsersSearch.css";
import users from "./users.png";
import { useNavigate } from "react-router-dom";

const { Text, Link } = Typography;
const { Content } = Layout;

const UsersSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [allUsers, setAllUsers] = useState([]);
  const [allChildren, setAllChildren] = useState({});
  let navigate = useNavigate();

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
        const res = await getAllParent();
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
      render: (text) => (
        <Link
          href={`https://rinkeby.etherscan.io/address/${text}`}
          target="_blank"
        >
          {text}
        </Link>
      ),
      ...getColumnSearchProps("addresses"),
    },
    {
      width: 1,
      render: () => {
        return <Tag color={"green"}>Parent</Tag>;
      },
    },
  ];

  const childColumns = [
    {
      title: "Childrens",
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
      render: (text) => (
        <Link
          href={`https://rinkeby.etherscan.io/address/${text}`}
          target="_blank"
        >
          {text}
        </Link>
      ),
      ...getColumnSearchProps("addresses"),
    },
    {
      width: 1,
      render: () => {
        return (
          <Tag color={"volcano"} key="Parent">
            Child
          </Tag>
        );
      },
    },
  ];

  const routes = [
    {
      path: "admin",
      breadcrumbName: "Admin",
    },
    {
      path: "userlist",
      breadcrumbName: "UserList",
    },
  ];

  return (
    <Layout>
      <Content
        style={{
          background: "#17357A",
          marginTop: "64px",
          minHeight: "1000px",
        }}
      >
        <PageHeader
          className="site-page-header tx-header"
          title="UserList Page"
          breadcrumb={{
            routes,
          }}
          style={{ backgroundColor: "#5089C6" }}
          onBack={() => {
            navigate("../admin", { replace: true });
          }}
          subTitle="Users Details"
        />
        <div className="ok">
          <img src={users} style={{ width: 300, textAlign: "center" }}></img>

          <h1>USERS</h1>
        </div>
        <Table
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
          className="user"
          rowKey="addresses"
          columns={columns}
          expandable={{
            expandedRowRender: (a, record) => {
              let children = allChildren[a.addresses] || {};
              console.log("Satır durumu: ", children);
              if (!children.list && !children.pending) {
                setAllChildren((prev) => {
                  return { ...prev, [a.addresses]: { pending: true } };
                });

                getChildsFromParentWithAddress(a.addresses).then((res) => {
                  console.log("GetChildren: ", res);
                  setAllChildren((prev) => {
                    return {
                      ...prev,
                      [a.addresses]: { list: res, pending: false },
                    };
                  });
                });
              }
              console.log("Bütün cocuklar: ", allChildren);

              if (!children.list)
                return (
                  <div>
                    <Skeleton active />
                  </div>
                );

              return (
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  {console.log("Satır", { record, a })}
                  {
                    <Table
                      columns={childColumns}
                      dataSource={children.list || []}
                    />
                  }
                </p>
              );
            },
            rowExpandable: (record) => record.firstName !== "Not Expandable",
          }}
          dataSource={allUsers || []}
        />
      </Content>
    </Layout>
  );
};

export default UsersSearch;

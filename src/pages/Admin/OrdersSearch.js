import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  Space,
  Table,
  Tag,
  Row,
  Col,
  PageHeader,
  Layout,
} from "antd";
import React, { useRef, useState, useEffect } from "react";
import { API_Normal_Transaction } from "../../shared/contractDeploy";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import "./OrdersSearch.css";

const { Content } = Layout;
const data = [];

const OrdersSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [txList, setTxList] = useState([]);
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

  const columns = [
    {
      title: "TxHash",
      dataIndex: "hash",
      key: "hash",
      fixed: "left",
      width: 80,
      render: (text) => (
        <a
          href={`https://rinkeby.etherscan.io/tx/${text}`}
          target={"_blank"}
          className={"tx-a"}
        >
          {text}
        </a>
      ),
      ...getColumnSearchProps("hash"),
    },
    {
      title: "Method",
      dataIndex: "methodId",
      key: "methodId",
      fixed: "left",
      width: 30,
      render: (text) => <Tag color={"orange"}>{text}</Tag>,
      ...getColumnSearchProps("methodId"),
    },

    {
      title: "Relevant",
      dataIndex: "relevantDate",
      key: "relevantDate",
      fixed: "left",
      width: 30,
      render: (text) => <Tag color={"orange"}>{text}</Tag>,
      ...getColumnSearchProps("relevantDate"),
      /* sorter: (a, b) => a.date - b.date,
              sortDirections: ['descend', 'ascend'], */
    },
    {
      title: "Date",
      dataIndex: "date",
      defaultSortOrder: "descend",
      key: "date",
      width: 40,
      render: (text) => <Tag color={"orange"}>{text}</Tag>,
      ...getColumnSearchProps("date"),
      /* sorter: (a, b) => a.date - b.date,
            sortDirections: ['descend', 'ascend'], */
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
      width: 100,
      render: (text) => (
        <a
          href={`https://rinkeby.etherscan.io/address/${text}`}
          target={"_blank"}
        >
          {text}
        </a>
      ),
      ...getColumnSearchProps("from"),
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
      width: 100,
      render: (text) => (
        <a
          href={`https://rinkeby.etherscan.io/address/${text}`}
          target={"_blank"}
        >
          {text}
        </a>
      ),
      ...getColumnSearchProps("to"),
    },

    {
      title: "Function",
      dataIndex: "functionName",
      key: "functionName",
      render: (text) => <Tag color={"orange"}>{text}</Tag>,
      width: 100,
    },
    {
      title: "Amount",
      dataIndex: "value",
      key: "value",
      width: 10,
      fixed: "right",
      render: (text) => <Tag color={"orange"}>{text}</Tag>,
      ...getColumnSearchProps("amount"),
    },
  ];
  const convertRelevantDate = (list) => {
    for (let i = 0; i < list.length; i++) {
      console.log(list);
      let date = new Date();
      let nowTimestamp = Math.floor(date.getTime() / 1000);
      console.log(nowTimestamp);
      console.log(parseInt(list[i].timeStamp));
      let txTimestamp = Math.floor(parseInt(list[i].timeStamp));

      let relevantTime = nowTimestamp - txTimestamp;
      console.log(relevantTime);
      let output = ``;
      if (relevantTime < 60) {
        output = `${relevantTime} seconds ago`;
      } else if (relevantTime < 3600) {
        output = `${Math.floor(relevantTime / 60)} minutes ago`;
      } else if (relevantTime < 86400) {
        output = `${Math.floor(relevantTime / 3600)} hours ago`;
      } else if (relevantTime < 2620800) {
        output = `${Math.floor(relevantTime / 86400)} days ago`;
      } else if (relevantTime < 31449600) {
        output = `${Math.floor(relevantTime / 2620800)} months ago`;
      } else {
        output = `${Math.floor(relevantTime / 31449600)} years ago`;
      }
      list[i].relevantDate = output;
      console.log(list[i].relevantDate);
      console.log();
    }
  };

  const routes = [
    {
      path: "admin",
      breadcrumbName: "Admin",
    },
    {
      path: "ordersearch",
      breadcrumbName: "OrderSearch",
    },
  ];

  useEffect(() => {
    const loadTransaction = async () => {
      const res = await axios.get(API_Normal_Transaction);
      console.log(res.data.result);
      convertRelevantDate(res.data.result);
      res.data.result = res.data.result.reverse();
      setTxList(
        res.data.result.map((x) => ({
          ...x,
          date: dayjs.unix(parseInt(x.timeStamp)).format("DD/MM/YYYY"),
        }))
      );
    };
    loadTransaction();
  }, []);

  return (
    <Layout>
      <Content
        style={{
          background: "#17357A",
          minHeight: "800px",
          marginTop: "60px",
        }}
      >
        <PageHeader
          className="site-page-header tx-header"
          title="OrderSearch Page"
          breadcrumb={{
            routes,
          }}
          style={{ backgroundColor: "#5089C6" }}
          onBack={() => {
            navigate("../admin", { replace: true });
          }}
          subTitle="Transaction Details"
        />
        <Table
          scroll={{
            x: 3000,
          }}
          size={"small"}
          columns={columns}
          dataSource={txList}
          className={"ant-table tx"}
        />
      </Content>
    </Layout>
  );
};

export default OrdersSearch;

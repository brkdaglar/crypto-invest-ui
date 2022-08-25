import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Space, Table, Tag } from "antd";
import Modal from "react-modal";

import Send from "./SendPopup";
import Withdraw from "./WithdrawPopup";

const ChildsListItem = (props) => {
  const { childsArray } = props;
  const [getArray, setGetArray] = useState();

  const getParentObj = async () => {
    setGetArray(childsArray);
  };

  useEffect(() => {
    getParentObj();
  }, []);
  console.log("child:", childsArray);

  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Surname",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Address",
      dataIndex: "addresses",
      key: "addresses",
    },
    {
      title: "Access Date",
      dataIndex: "accessDateTimeStamp",
      key: "accessDateTimeStamp",
    },
    {
      title: "Date Of Birth",
      dataIndex: "dateOfBirthTimeStamp",
      key: "dateOfBirthTimeStamp    ",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
    {
      width: 1,
      render: (_, record) => {
        return <Withdraw balance={record.balance} address={record.addresses} />;
      },
    },
    {
      width: 1,
      render: (_, record) => {
        return (
          <>
            <Send address={record.addresses} />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={childsArray || []} />
    </>
  );
};

export default ChildsListItem;

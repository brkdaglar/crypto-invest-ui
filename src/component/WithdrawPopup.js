import "antd/dist/antd.css";
import React, { useState,useEffect } from "react";
import { Button, Modal, Form, Input, Select, DatePicker } from "antd";
import {  getParent,parentWithdraw } from "../shared/contractDeploy";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const WithdrawPopup = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [parent, setParent] = useState();
  const [amount, setAmount] = useState();

  const getParentObj = async () => {
    setParent(await getParent());
  }

  useEffect(() => {
    getParentObj();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    await parentWithdraw(props.address, amount);
    form.resetFields();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Button type="primary" onClick={()=>showModal()}>
        Withdraw
      </Button>

      <Modal
        title="Withdraw"
        visible={isModalVisible}
        cancelText="Cancel"
        okText="Withdraw"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="Balance"
            label="Balance"
            rules={[{ required: true }]}
          >
            <Input disabled={true} placeholder={props.balance} />
          </Form.Item>

          <Form.Item
            name="Amount"
            label="Amount"
            
            rules={[{ required: true, message: "Please input your amount!" }]}
          >
            <Input onChange={(e) => setAmount(e.target.value)} type="number"/>
          </Form.Item>

          {/* <Form.Item
            name="Name"
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Surname"
            label="Surname"
            rules={[{ required: true, message: "Please input your surname!" }]}
          >
            <Input />
          </Form.Item> */}

          <Form.Item
            name="Address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input disabled={true} placeholder={props.address}/>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default WithdrawPopup;

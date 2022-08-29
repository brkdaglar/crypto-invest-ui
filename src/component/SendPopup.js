import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, Select, DatePicker } from "antd";

import { getParent, storeETH } from "../shared/contractDeploy";

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

const SendPopup = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [parent, setParent] = useState();
  const [amount, setAmount] = useState();
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    //form.required();
    await storeETH(props.address, amount);
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

  const getParentObj = async () => {
    setParent(await getParent());
  };

  useEffect(() => {
    getParentObj();
  }, []);

  return (
    <div>
      <Button
        type="danger"
        onClick={() =>
          setTimeout(() => {
            showModal();
          }, 1000)
        }
      >
        Send
      </Button>

      <Modal
        title="Send"
        visible={isModalVisible}
        cancelText="Cancel"
        okText="Send"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="parent" label="From" rules={[{ required: true }]}>
            <Input
              disabled={true}
              placeholder={parent != undefined ? parent.addresses : ""}
            />
          </Form.Item>

          <Form.Item name="To" label="To" rules={[{ required: true }]}>
            <Input disabled={true} placeholder={props.address} />
          </Form.Item>

          {/* <Form.Item
            name="Date Of Transaction"
            label="Date Of Transaction"
            rules={[
              {
                required: true,
                message: "Please input your date of transaction!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item> */}

          <Form.Item
            name="Amount"
            label="Amount"
            rules={[{ required: true, message: "Please input your amount!" }]}
          >
            <Input onChange={(e) => setAmount(e.target.value)} type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default SendPopup;

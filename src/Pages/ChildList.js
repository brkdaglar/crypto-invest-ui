import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, DatePicker } from 'antd';

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

const ChildList = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (values) => {
        console.log(values);
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

            <Button type="primary" onClick={showModal}>
             Add Children
            </Button>

        <Modal title="Add Children" visible={isModalVisible} cancelText="Cancel" okText="submit" onOk={handleOk} onCancel={handleCancel}>
            
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>

            <Form.Item name="Name" label="Name" rules={[{required: true, message: 'Please input your name!',},]}>
            <Input />
            </Form.Item>

            <Form.Item name="Surname" label="Surname" rules={[{required: true, message: 'Please input your surname!'},]}>
            <Input />
            </Form.Item>

            <Form.Item name="Address" label="Address" rules={[{required: true, message: 'Please input your address!'},]}>
            <Input />
            </Form.Item>

            <Form.Item name="Date Of Birth"label="Date Of Birth" rules ={[{required: true, message: 'Please input your date of birth!'},]}>
            <DatePicker />
            </Form.Item>
            
            </Form>

        </Modal>      
        </div>
    );
}
export default ChildList;
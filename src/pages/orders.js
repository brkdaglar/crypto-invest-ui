import { React, useEffect, useState } from "react";
import "./orders.css";
import {
  getParent,
  getChildsFromParent,
  addChild,
  getChild,
} from "../shared/contractDeploy.js";
import { Button, Modal, Form, Input, Select, DatePicker,Layout,Row,Col } from "antd";
import "antd/dist/antd.css";
import logo from "../pages/Home/logo-last.png"
import dayjs from "dayjs";
import Foot from '../component/footer/footer';

const { Header, Content, Footer } = Layout;

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

const Orders = () => {
  const [childsArray, setChildsArray] = useState();

  const [dateOfBirth, setDateOfBirth] = useState();
  const [accessDateOfBirth, setAccessDateOfBirth] = useState();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  const handleOk = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success", values);
    console.log(values.childFirstName);
    addChild(
      values.childAddress,
      values.childFirstName,
      values.childLastName,
      dateOfBirth,
      accessDateOfBirth
    );
    getChild(values.childAddress);
    form.resetFields();
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const loadChild = async () => {
      try {
        const res = await getChildsFromParent();
        setChildsArray(
          res.map((x) => ({
            ...x,
            balance: x.balance.toString(),
            accessDateTimeStamp: dayjs
              .unix(x.accessDateTimeStamp)
              .format("DD/MM/YYYY"),
            dateOfBirthTimeStamp: dayjs
              .unix(x.dateOfBirthTimeStamp)
              .format("DD/MM/YYYY"),
          }))
        );
        console.log(childsArray);
      } catch {
        console.log(console.error());
      }
    };
    loadChild();
  }, []);

  const onChangeDate = (date, dateString) => {
    let dateSplit = dateString.split("-");
    let dateSplitYear = parseInt(dateSplit[0]) + 18;
    dateSplit[0] = dateSplitYear.toString();
    const accessDateString = dateSplit.join("-");
    const birthDate = new Date(dateString);
    const accessDate = new Date(accessDateString);

    const timestampSecondsBirthDate = Math.floor(birthDate.getTime() / 1000);
    const timestampSecondsAccessDate = Math.floor(accessDate.getTime() / 1000);
    console.log(timestampSecondsBirthDate);
    console.log(timestampSecondsAccessDate);
    setDateOfBirth(timestampSecondsBirthDate);
    setAccessDateOfBirth(timestampSecondsAccessDate);
  };

  // Modaldaki alttaki iki buton kaldırılamadı.
  return (
    <div>
      <Layout>
        <Header className="header"
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
          }}
        >
          <div className="logo" />
          <Row>
            <Col span={1}>
              <img src={logo}  className="logo-last" />
            </Col>
            <Col span={8}>
            <a className="legacy" href="#">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEGACY CRYPTO</a>
            </Col>
            <Col span={6}>
            </Col>
            <Col span={6} >
              <button className="homebutton">
                <a className="legacy" href="#">Home Page</a>
              </button>
            </Col>
          </Row>

        </Header>

        <Content className="home" style={{width: '100%'}}>
        
        </Content>



        <Foot />
      
      
      </Layout>




    </div>
  );
};

export default Orders;

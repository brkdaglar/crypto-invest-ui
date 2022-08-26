import { React, useEffect, useState } from "react";
import "./users.css";
import {
  getParent,
  getChildsFromParent,
  addChild,
  getChild,
} from "../../shared/contractDeploy";
import { Button, Modal, Form, Input, Select, DatePicker,Layout,Row,Col } from "antd";
import "antd/dist/antd.css";
import logo from "../Home/logo-last.png"
import dayjs from "dayjs";
import Foot from '../../component/footer/footer';

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

const users = () => {
  
  
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

export default users;

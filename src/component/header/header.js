import React from "react";
import "../../pages/Home/Home.css";
import { Button, Modal, Layout, Menu, Row, Col, Divider } from "antd";
const { Header, Content, Footer } = Layout;

const HeaderLayout = () => {
  return (
    <Header
      className="header"
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="logo" />
      <Row>
        <Col span={1}>
          <img
            src={require("../../pages/Home/logo-last.png")}
            className="logo-last"
          />
        </Col>
        <Col span={8}>
          <a className="legacy" href="#">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEGACY CRYPTO
          </a>
        </Col>
        <Col span={6}></Col>
        <Col span={6}>
          <button className="homebutton">
            <a className="legacy" href="#">
              Home Page
            </a>
          </button>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderLayout;

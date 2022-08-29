import React from "react";
import { useState, useEffect } from "react";
import "./Parent.css";
import line from "./line.png";
import kids from "./kids.png";

import { getParent } from "../../shared/contractDeploy";

import { useNavigate, useLocation } from "react-router-dom";
import Foot from "../../component/footer/footer";
import { Button, Modal, Layout, Menu, Row, Col, Divider } from "antd";
const { Header, Content, Footer } = Layout;
import ProfileComponent from "../../component/ProfileComponent";

const ParentMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [parent, setParent] = useState();

  const getParentObj = async () => {
    setParent(await getParent());
  };

  useEffect(() => {
    getParentObj();
  }, []);

  return (
    <Layout>
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
            <img src={require("../Home/logo-last.png")} className="logo-last" />
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

      <Content
        className="home"
        style={{
          width: "100%",
        }}
      >
        <div className="root">
          <div className="divProfile">
            <ProfileComponent />
            <h4>
              {parent != undefined ? parent.firstName : "gelmedi"}{" "}
              {parent != undefined ? parent.lastName : "gelmedi"}
            </h4>
            <img src={line} className="line" />
          </div>
          <div className="div">
            <div id="divOrders">
              <button
                id="orders"
                className="icons"
                onClick={() => navigate("/parent/orders")}
              />
              <h4>Orders</h4>
            </div>

            <div id="divKids" className="divButton">
              <button id="kids" onClick={() => navigate("/kids")} />
              <h4>Kids</h4>
            </div>
          </div>
        </div>
      </Content>

      <Foot />
    </Layout>
  );
};

export default ParentMenu;

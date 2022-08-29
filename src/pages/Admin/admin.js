import React from "react";
import { useState, useEffect } from "react";
import "./admin.css";
import line from "./line.png";
import hash from "./hash.png";
import { getParent } from "../../shared/contractDeploy";
import logo from "../Home/logo-last.png";
import { Button, Modal, Layout, Menu, Row, Col, Divider } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Foot from '../../component/footer/footer';

const { Header, Content, Footer } = Layout;

const ParentMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [parent, setParent] = useState();


  const getParentObj = async () => {
    console.log("parent: ", parent);
    setParent(await getParent());
  }

  useEffect(() => {
    getParentObj();
  }, []);

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
              <img src={logo} className="logo-last" />
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

        <Content
          className="home"
          style={{

            width: '100%'
          }}
        ><div className="root">
        <div className="divProfile">
          
          <h4 className="admintext">Admin</h4>
          <img src={line} className="line"/>
        </div>
        <div className="div">
          <div id="divhash" className="hashbutton">
            <button id="hash"
              onClick={() => navigate("/hash")} />
            <h4 className="hashtext">Hash</h4>
          </div>  
          <div id="diusers" className="usersbutton">
            <button id="users"
              onClick={() => navigate("/users")} />
            <h4 className="userstext">Users</h4>
          </div>
        </div>
        
  
      </div>
        </Content>



        <Foot />
      </Layout>




    </div>
  );
};

export default ParentMenu;

/*<div className="root">
      <div className="divProfile">
        <img src={require("./image.png")} width="150px" height="150px" />
        <h4>{parent != undefined ? parent.firstName : "gelmedi"} {parent != undefined ? parent.lastName : "gelmedi"}</h4>
        <div style={{ height: "7px", backgroundColor: "white", borderRadius: 5 }} />
      </div>
      <div className="div">
        <div id="divhash" className="divButton">
          <button id="hash"
            onClick={() => navigate("/hash")} />
          <h4>Hash</h4>
        </div>  
        <div id="diusers" className="divButton">
          <button id="users"
            onClick={() => navigate("/users")} />
          <h4 className="userstext">Users</h4>
        </div>
      </div>
      

    </div>*/
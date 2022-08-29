import React from "react";
import { useState, useEffect } from "react";
import "./admin.css";
import line from "./line.png";
import hash from "./hash.png";
import { getParent } from "../../shared/contractDeploy";
import logo from "../Home/logo-last.png";
import { Button, Modal, Layout, Menu, Row, Col, Divider, Card } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const ParentMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [parent, setParent] = useState();

  const getParentObj = async () => {
    console.log("parent: ", parent);
    setParent(await getParent());
  };

  useEffect(() => {
    getParentObj();
  }, []);

  return (
    <div>
      <Layout>
        <Content
          className="home"
          style={{
            width: "100%",
            background: "#17357A",
          }}
        >
          <div className="root">
            <Card
              title="Admin"
              bordered={false}
              style={{
                width: 300,
                background: "#5089C6",
                marginTop: "80px",
              }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <div className="div">
              <div id="divhash" className="hashbutton">
                <img
                  id="hash"
                  onClick={() => navigate("../admin/ordersearch")}
                />
                <Button
                  className="hashtext"
                  type="primary"
                  style={{
                    background: "#F89C35",
                    borderColor: "#F89C35",
                    marginRight: "20px",
                  }}
                  onClick={() => navigate("../admin/ordersearch")}
                >
                  Transaction
                </Button>
              </div>
              <div id="diusers" className="usersbutton">
                <img id="users" onClick={() => navigate("../admin/userlist")} />
                <Button
                  className="userstext"
                  type="primary"
                  style={{ background: "#F89C35", borderColor: "#F89C35" }}
                  onClick={() => navigate("../admin/userlist")}
                >
                  Users
                </Button>
              </div>
            </div>
          </div>
        </Content>
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

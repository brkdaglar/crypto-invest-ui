import React from "react";
import { useState, useEffect } from "react";
import "./admin.css";
import { API_Balance, roleValue } from "../../shared/contractDeploy";
import { Button, Layout, Card, Statistic } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { Content } = Layout;

const AdminMenu = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState();

  useEffect(() => {
    const loadBalance = async () => {
      const res = await axios.get(API_Balance);
      if (roleValue == 0) {
        console.log(roleValue);
      }

      setBalance(res.data.result);
    };
    loadBalance();
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
              title="Admin Panel"
              bordered={false}
              style={{
                width: 400,
                height: 200,
                background: "#FFAA4C", // #5089C6
                marginTop: "100px",
                marginLeft: "40px",
                overflowY: "hidden",
              }}
            >
              <Statistic
                title="Total Balance"
                value={balance}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                suffix={"wei"}
              />
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

export default AdminMenu;

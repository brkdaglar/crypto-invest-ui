import React from "react";
import { useState, useEffect } from "react";
import "./Parent.css";
import kids from "../../assets/kids.png";

import { getParent, getContract } from "../../shared/contractDeploy";
import ProfileComponent from "../../component/ProfileComponent";

import { useNavigate, useLocation } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;

const ParentMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [parent, setParent] = useState();

  const getParentObj = async () => {
    const cont = await getContract();
    setParent(await getParent());
  };

  useEffect(() => {
    getParentObj();
  }, []);

  return (
    <Layout>
      <Content
        className="home"
        style={{
          width: "100%",
          marginTop: "60px",
          background: "#17357A",
        }}
      >
        <div className="root">
          <ProfileComponent />
          <div className="divParent">
            <div id="divKids" className="divButton">
              <button id="kids" onClick={() => navigate("/kids")} />
              <h4>Kids</h4>
            </div>
            <div id="divOrders" className="divButton">
              <button id="orders" onClick={() => navigate("/parent/orders")} />
              <h4>Orders</h4>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ParentMenu;

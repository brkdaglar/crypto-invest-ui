import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "./logo2.svg";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import { connectWalletHandler, addParent } from "../../shared/contractDeploy";
import { Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  // MODAL
  const [isModalVisible, setIsModalVisible] = useState(false);
  let navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    connectWalletHandler();
    addParent("Burak", "Daglar");
    navigate("../parent", { replace: true });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [name, setName] = useState(null);

  return (
    <div className="home">
      <h1 className="welcome">WELCOME TO CRYPTO LEGACY</h1>
      <img src={logo} className="logo" />
      <button type="primary" className="button" onClick={showModal}>
        Connect Wallet
      </button>
      <Modal
        className="modal"
        title="Warning"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <h4>
            You will be connected your metamask account.Dou you want to
            continue?
          </h4>
          <label>Name : </label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
              console.log(name);
            }}
          />
          <label> Surname : </label>
          <input type="text" />
        </form>
      </Modal>
    </div>
  );
}

export default Home;

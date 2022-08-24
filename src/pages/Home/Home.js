import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "./logo2.svg";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import {
  connectWalletHandler,
  addParent,
  getParent,
  getChild,
} from "../../shared/contractDeploy";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Spin } from "antd";

function Home() {
  // MODAL
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalWait, setIsModalWait] = useState(false);
  const [user, setUser] = useState();

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  let navigate = useNavigate();

  const Role = {
    admin: 0,
    child: 1,
    parent: 2,
    unregister: 3,
  };

  const showModal = async () => {
    const roleValue = await connectWalletHandler();
    console.log(roleValue);

    if (roleValue === Role.unregister) {
      setIsModalVisible(true);
    } else if (roleValue === Role.parent) {
      navigate("../parent", { replace: true });
    } else if (roleValue === Role.child) {
      navigate("../child", { replace: true });
    } else if (roleValue === Role.admin) {
      navigate("../admin", { replace: true });
    }
  };

  const handleOk = async () => {
    await addParent(name, surname);
    setIsModalVisible(false);
    setIsModalWait(true);
    setTimeout(() => {
      navigate("../parent", { replace: true });
      setIsModalWait(false);
    }, 10000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
        {/* Burası çıkan pop up formu */}
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
            }}
          />
          <label> Surname : </label>
          <input
            type="text"
            onChange={(event) => {
              setSurname(event.target.value);
            }}
          />
        </form>
      </Modal>
      <Modal className="modal" title="Waiting" visible={isModalWait}>
        <Spin />
      </Modal>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import "./Home.css";
import logo from "../../assets/logo-last.png";
import metalogo from "../../assets/logo2.svg";
import eth from "../../assets/ETH.png";
import { Button, Modal, Layout, Menu, Row, Col, Divider } from "antd";
import "antd/dist/antd.css";
import { connectWalletHandler, addParent } from "../../shared/contractDeploy";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import div1 from "../../assets/div1.png";
import div2 from "../../assets/div2.png";
import div3 from "../../assets/div3-1.png";
import div32 from "../../assets/div3-2.png";
import div33 from "../../assets/div3-3.png";

const { Header, Content } = Layout;

export let roleVal = 4;

const Role = {
  admin: 0,
  child: 1,
  parent: 2,
  unregister: 3,
};

function Home() {
  // MODAL
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalWait, setIsModalWait] = useState(false);
  const [user, setUser] = useState();

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  let navigate = useNavigate();

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
    <Layout>
      <Header
        className="header"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: "#5089C6",
        }}
      >
        <div className="logo" />
        <Row>
          <Col span={1}>
            <img src={logo} className="logo-last" />
          </Col>
          <Col span={9}>
            <a className="legacy" href="#">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEGACY CRYPTO
            </a>
          </Col>
          <Col span={9}></Col>
          <Col span={4} style={{ background: "#5089C6" }}>
            <Menu
              className="menu"
              mode="horizontal"
              style={{ background: "#5089C6" }}
            >
              <a className="aboutbutton" href="#/about">
                About&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
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
                  <h3 style={{ font: "black" }}>
                    You will be connected your metamask account.Dou you want to
                    continue?
                  </h3>
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
              <Modal
                className="modal"
                title="Waiting"
                visible={isModalWait}
                footer={null}
              >
                <Spin />
              </Modal>
            </Menu>
          </Col>
        </Row>
      </Header>

      <Content
        className="home"
        style={{
          width: "100%",
        }}
      >
        <div className="div-1">
          <img src={div1} className="div1pict" />
          <h1 className="div1text1"> LET'S CREATE FUTURE PLANS </h1>
          <h1 className="div1text12"> FOR YOUR CHILDREN TOGETHER!</h1>
        </div>
      </Content>

      <Content
        className="home"
        style={{
          width: "100%",
        }}
      >
        <div className="div-1">
          <img src={div2} className="div2pict" />
          <h1 className="div2text1"> WHAT IS LEGACY CRYPTO ?</h1>
          <img className="eth1" src={eth} />
          <p className="div2sub1">
            {" "}
            LegacyCrypto is a web app that allows parents to save crypto money
            for their children.{" "}
          </p>
          <img className="eth2" src={eth} />
          <p className="div2sub2">
            {" "}
            With LegacyCrypto, transfer ethereum to the account you have opened
            for your children so that they can use it in the future.{" "}
          </p>
          <img className="eth3" src={eth} />
          <p className="div2sub3"> Build the future of your children! </p>
          <img className="eth4" src={eth} />
          <p className="div2sub4">
            {" "}
            You can also cancel these operations without transaction fee before
            the date you set.{" "}
          </p>
        </div>
      </Content>

      <Content
        className="home"
        style={{
          width: "100%",
        }}
      >
        <div>
          <img src={metalogo} className="logo" />
          <h1 className="div3text1"> WHAT IS METAMASK ?</h1>
          <p className="div3prg">
            {" "}
            A crypto wallet and gateway to blockchain apps.
          </p>
          <p className="div3prg2">
            {" "}
            Available as a browser extension and as a mobile app, MetaMask
            equips you with <br />a key vault, secure login, token wallet, and
            token exchange—everything you need
            <br /> to manage your digital assets.
          </p>
          <p className="div3prg3">
            {" "}
            MetaMask provides the simplest yet most secure way to connect to
            blockchain-based <br />
            applications. You are always in control when interacting on the new
            decentralized web.
          </p>
          <Button
            className="metabuton"
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            target="_blank"
            style={{
              background: "#F89C35",
              borderColor: "#F89C35",
              marginRight: "20px",
            }}
          >
            Download Metamask Extension
          </Button>
        </div>
      </Content>

      <Content
        className="home"
        style={{
          width: "100%",
        }}
      >
        <div>
          <h1 className="div4text1"> CRYPTO LEGACY ? </h1>
          <Divider type="vertical" />
          <img className="div4img1" src={div3} />
          <h1 className="guven">SAFE</h1>
          <Divider type="vertical" />
          <img className="div4img2" src={div32} />
          <h1 className="hiz">FAST</h1>
          <Divider type="vertical" />
          <img className="div4img3" src={div33} />
          <h1 className="kolay ">EASY USE</h1>
        </div>
      </Content>
    </Layout>
  );
}

export default Home;

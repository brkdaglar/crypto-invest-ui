import React, { useEffect, useState } from "react";
import { getChild, childWithdraw, con } from "../../shared/contractDeploy";
import "./ChildPage.css";
import line from "./line.png";
import dayjs from "dayjs";
import wallet from "./wallet.JPG";
import calender from "./calender.PNG";
import Foot from "../../component/footer/footer";
import { Button, Modal, Layout, Menu, Row, Col, Divider } from "antd";
const { Header, Content, Footer } = Layout;

const ChildPage = () => {
  const [child, setChild] = useState({});
  const [active, isActive] = useState(true);

  const getChildInformations = async () => {
    try {
      const res = await getChild();
      setChild({
        firstName: res.firstName,
        lastName: res.lastName,
        balance: (res.balance || 0).toString(),
        accessDateTimeStamp: dayjs
          .unix(res.accessDateTimeStamp)
          .format("DD/MM/YYYY"),
        dateOfBirthTimeStamp: dayjs
          .unix(res.dateOfBirthTimeStamp)
          .format("DD/MM/YYYY"),
      });
      let balanceString = parseInt(res.balance.toString());
      console.log("deger: ", balanceString > 0);
      console.log(
        "deger: ",
        dayjs().unix() >= res.accessDateTimeStamp.toNumber()
      );
      if (
        dayjs().unix() >= res.accessDateTimeStamp.toNumber() &&
        balanceString > 0
      ) {
        console.log("girdi");
        console.log(balanceString);
        isActive(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getChildInformations();
  }, []);

  return (
    <div>
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
              <img
                src={require("../Home/logo-last.png")}
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

        <Content
          className="home"
          style={{
            width: "100%",
          }}
        >
          <div className="ChildPage">
            <div className="divProfile">
              <h3 className="childname">
                {console.log("Gelen child:", child)}
                {child.firstName} {child.lastName}
              </h3>
              <img src={line} className="line" />
            </div>

            <p id="firstparagraph">{child.balance}</p>
            <p id="secondparagraph">{child.accessDateTimeStamp}</p>
            <img
              className="icons"
              id="bigetherimage"
              src={wallet}
              width="300"
              height="300"
            ></img>
            <img
              className="icons"
              id="dateimage"
              src={calender}
              width="300"
              height="300"
            ></img>
            <button className="buttonwithdraw">withdraw </button>
          </div>
        </Content>

        <Foot />
      </Layout>
    </div>
  );
};

export default ChildPage;

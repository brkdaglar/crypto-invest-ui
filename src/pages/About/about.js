import React from "react";
import "./about.css";
import { Layout, Divider, Collapse } from "antd";
import aylinhanım from "../../assets/AylinHanım.jpg";
import oğuzhanbey from "../../assets/OğuzhanBey.jpg";
import Arda from "../../assets/Arda.jpg";
import Burak from "../../assets/Burak.jpg";
import Elif from "../../assets/Elif.jpg";
import Furkan from "../../assets/Furkan.jpg";
import Kıvanc from "../../assets/Kıvanc.jpg";
import Kubra from "../../assets/Kubra.jpg";
import Reyta from "../../assets/Reyta.jpg";
import Talu from "../../assets/Talu.jpg";
import Kuter from "../../assets/Kuter.jpg";

import "antd/dist/antd.css";
const { Content } = Layout;
const { Panel } = Collapse;
function About() {
  return (
    <div>
      <Layout>
        <Content
          className="home"
          style={{
            width: "100%",
          }}
        >
          <div className="question">
            <h1> Have questions? </h1>
            <h1> We have answers.</h1>
          </div>

          <Collapse className="collapse" ghost accordion>
            <Panel header="Why should I use Legacy Crypto?" key="1">
              <p>
                Whether you're a beginner or an expert in investing in the
                cryptocurrency market, Legacy Crypto let you raise your children
                without worrying about financial issues in the future. Legacy
                Crypto helps you to save an Ethereum cryptocurrency (ETH) for
                your children.
              </p>
            </Panel>

            <Panel header="What can I do with my Account?" key="2">
              <p>
                {" "}
                An account allows you to send ETH to your child. It also allows
                you to withdraw ETH from the account in case of anything occurs.
                You can visualize the account balances of the children's
                accounts that are connected to your account.{" "}
              </p>
            </Panel>
            <Panel header="What is a Child Account?" key="3">
              <p>
                A child account allows parents to open an investing account for
                their children. Parents who open it can send and withdraw the
                ETH to the account. Transferred ETH is stored in the child
                account until the determined time has come.{" "}
              </p>
            </Panel>
            <Panel header="How does pricing work?" key="4">
              <p>
                It is free to open an account both for yourselves and your
                children. It is also free to store the ETH in your account for
                an unlimited time. There is only a 0.5% transaction fee.
              </p>
            </Panel>
            <Panel header="Can I withdraw my money whenever I want?" key="5">
              <p>Yes. You can withdraw your money anytime.</p>
            </Panel>
            <Panel
              header="What happens if I accidentally send money to another account?"
              key="6"
            >
              <p>
                In order to avoid this problem, Legacy Crypto only allows you to
                send money to the children's accounts that are connected to you.
              </p>
            </Panel>
          </Collapse>
        </Content>

        <Content
          className="home"
          style={{
            width: "100%",
          }}
        >
          <div>
            <h1 className="team"> OUR TEAM </h1>
            <img className="oğuzhanbey" src={oğuzhanbey} />
            <h1 className="oguzhanozkaya">Oğuzhan Özkaya</h1>
            <h2 className="productowner">Product Owner</h2>
            <Divider type="vertical" />
            <img className="aylinhanım" src={aylinhanım} />
            <h1 className="aylincelik">Aylin Çelik</h1>
            <h2 className="agilecoach">Agile Coach</h2>
          </div>

          <div>
            <img className="talu" src={Talu} />
            <h1 className="taluname">Talu Kutay Derin</h1>
            <h2 className="bussanaly1">Scrum Master</h2>
            <Divider type="vertical" />
            <img className="elif" src={Elif} />
            <h1 className="elifname">Elif Özçelik</h1>
            <h2 className="bussanaly2">Business Analyst</h2>
            <Divider type="vertical" />
            <img className="burak" src={Burak} />
            <h1 className="burakname">Burak Dağlar</h1>
            <h2 className="fullstack1">Full Stack Developer</h2>
          </div>
        </Content>

        <Content
          className="home"
          style={{
            width: "100%",
          }}
        >
          s
          <div>
            <img className="furkan" src={Furkan} />
            <h1 className="furkanname">Ahmet Furkan Sevindik</h1>
            <h2 className="frontenddev1">Frontend Developer</h2>
            <Divider type="vertical" />
            <img className="reyta" src={Reyta} />
            <h1 className="reytaname">Reyta Gül MURAN</h1>
            <h2 className="frontenddev2">Frontend Developer</h2>
            <Divider type="vertical" />
            <img className="kıvanc" src={Kıvanc} />
            <h1 className="kıvancname">Kıvanç Değirmenci</h1>
            <h2 className="frontenddev3">Frontend Developer</h2>
          </div>
        </Content>

        <Content
          className="home2"
          style={{
            width: "100%",
          }}
        >
          <div>
            <img className="arda" src={Arda} />
            <h1 className="ardaname">Arda Altıntaş</h1>
            <h2 className="backenddev1">Backend Developer</h2>
            <Divider type="vertical" />
            <img className="kubra" src={Kubra} />
            <h1 className="kubraname">Hatice Kübra Öçal</h1>
            <h2 className="backenddev2">Backend Developer</h2>
            <Divider type="vertical" />
            <img className="kuter" src={Kuter} />
            <h1 className="kutername">Kuter Çalık</h1>
            <h2 className="backenddev3">Backend Developer</h2>
          </div>
        </Content>
        <Content
          className="home2"
          style={{
            width: "100%",
          }}
        >
          <div></div>
        </Content>
      </Layout>
    </div>
  );
}

export default About;

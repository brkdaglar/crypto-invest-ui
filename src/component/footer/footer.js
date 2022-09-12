import { Layout, Divider } from "antd";
import React from "react";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/Youtube.png";
import twitter from "../../assets/Twitter.png";
import linkedin from "../../assets/Linkedin.png";
import "./footer.css";

const { Footer } = Layout;

function FooterLayout() {
  return (
    <Footer
      style={{
        backgroundColor: "#5089C6",
        textAlign: "center",
      }}
    >
      <h2 className="Powered">Powered by Intertech - All Rights Reserved</h2>
      <Divider />

      <a href="https://www.facebook.com/IntertechIT/" target={"_blank"}>
        {" "}
        <img src={facebook} className="facebooklogo" />
      </a>
      <Divider type="vertical" />
      <a href="https://www.instagram.com/intertechteyasam/" target={"_blank"}>
        {" "}
        <img src={instagram} className="instagramlogo" />
      </a>
      <Divider type="vertical" />
      <a href="https://twitter.com/intertechIT" target={"_blank"}>
        {" "}
        <img src={twitter} className="twitterlogo" />
      </a>
      <Divider type="vertical" />
      <a
        href="https://www.youtube.com/channel/UCXC8pcaXM5cSatFeqYbzxlg"
        target={"_blank"}
      >
        {" "}
        <img src={youtube} className="youtubelogo" />
      </a>
      <Divider type="vertical" />
      <a
        href="https://www.linkedin.com/company/intertech-information-technology-and-marketing-inc-/mycompany/verification/"
        target={"_blank"}
      >
        {" "}
        <img src={linkedin} className="linkedinlogo" />
      </a>

      <Divider />
      <div className="FooterDiv">
        <a
          className="FooterDiv"
          href="https://www.intertech.com.tr/en/terms-of-use"
        >
          {" "}
          Terms of Use
        </a>
        <Divider type="vertical" />
        <a
          className="FooterDiv"
          href="https://www.intertech.com.tr/en/privacy-policy"
        >
          Privacy Policy
        </a>
        <Divider type="vertical" />
        <a
          className="FooterDiv"
          href="https://www.intertech.com.tr/en/cookies-policy"
        >
          Cookies Policy
        </a>
        <Divider type="vertical" />
        <a
          className="FooterDiv"
          href="https://www.intertech.com.tr/en/contact#"
        >
          Contact Us
        </a>
      </div>
    </Footer>
  );
}

export default FooterLayout;

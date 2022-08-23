import React from "react";
import { useState, useEffect } from "react";
import "./Parent.css";
import line from "./line.png";
import kids from "./kids.png";

import { getParent } from "../../shared/contractDeploy";


import { useNavigate, useLocation } from "react-router-dom";

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
    <div className="root">
      <div className="divProfile">
        <img src={require("./image.png")} width="150px" height="150px" />
        <h4>{parent != undefined ? parent.firstName : "gelmedi"} {parent != undefined ? parent.lastName : "gelmedi"}</h4>
        <div style={{ height: "7px", backgroundColor: "white", borderRadius: 5 }} />
      </div>
      <div className="div">
        <div id="divOrders" className="divButton">
          <button id="orders"
            onClick={() => navigate("/parent/orders")} />
          <h4>Orders</h4>
        </div>
        <div id="divKids" className="divButton">
          <button id="kids"
            onClick={() => navigate("/kids")} />
          <h4>Kids</h4>
        </div>
      </div>
      {/* {console.log("Gelen parent:", parent)}
      <h1 className="h1-parent">Welcome to Crypto Legacy</h1>
      <text>{parent != undefined ? parent.firstName:"gelmedi"}</text>
      <text>{parent != undefined ? parent.lastName:"gelmedi"}</text>
      <i class="fa-brands fa-ethereum"></i>
      
      <button className="button button1" onClick={() => navigate("/kids")}></button>
      <img src={image} className="ethlogo"></img>
      <img src={line} className="line"></img>
      <h2>Kids</h2>
      <h3>Orders</h3> */}

    </div>
  );
};

export default ParentMenu;

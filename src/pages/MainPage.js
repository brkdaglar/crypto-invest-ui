import React from "react";
import {
  connectWallet,
  addParent,
  getParent,
} from "../shared/contractDeploy.js";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    navigate("../kids", { replace: true });
  }
  return (
    <div>
      <button onClick={connectWallet}>ConnectWallet</button>
      <button onClick={addParent}> addParent </button>
      <button onClick={handleSubmit}> Next</button>
    </div>
  );
};

export default MainPage;

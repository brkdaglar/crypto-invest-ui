import React from "react";
import { getParent } from "../shared/contractDeploy.js";

const ChildList = () => {
  return (
    <div>
      <button onClick={getParent}> getParent </button>
    </div>
  );
};

export default ChildList;

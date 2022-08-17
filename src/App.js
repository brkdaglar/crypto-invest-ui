import logo from "./logo.svg";
import "./App.css";
import ChildList from "./pages/ChildList.js";
import {
  connectWallet,
  addParent,
  getParent,
} from "./shared/contractDeploy.js";

function App() {
  return (
    <div>
      <button onClick={connectWallet}>ConnectWallet</button>
      <button onClick={addParent}> addParent </button>
      <button onClick={getParent}> getParent </button>
    </div>
  );
}

export default App;

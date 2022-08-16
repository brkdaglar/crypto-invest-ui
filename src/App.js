import logo from "./logo.svg";
import "./App.css";
import ChildList from "./pages/ChildList.js";
import { onClickWallet, getContractAddress } from "./shared/contractDeploy.js";

const onClickButton = () => {
  getContractAddress();
};

function App() {
  return <button onClick={onClickWallet}>ConnectWallet</button>;
}

export default App;

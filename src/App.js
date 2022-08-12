import logo from "./logo.svg";
import "./App.css";
import { ethers } from "ethers";
import abi from "./data/contract.json";

const CONTRACT_ADDRESS = "0x1B48129Fa3AA02d182f5e65811Cdc74D8ce554Bb";

function App() {
  console.log("abi", abi);
  const onClickWallet = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      abi,
      provider.getSigner()
    );

    const tx = await contract.setBalanceAccessAge(25);
    const txResult = await tx.wait();
    console.log("Balance: ", { tx, txResult });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onClickWallet}> Connect</button>
      </header>
    </div>
  );
}

export default App;

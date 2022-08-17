import { ethers } from "ethers";
import abi from "../data/contract.json";

let contract;
const CONTRACT_ADDRESS = "0x1B48129Fa3AA02d182f5e65811Cdc74D8ce554Bb";

export const connectWallet = async () => {
  console.log("a");
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider.getSigner());

  console.log(provider.getSigner());

  //const tx = await contract.setBalanceAccessAge(25);
  //const txResult = await tx.wait();
  //console.log("Balance: ", { tx, txResult });
  console.log(contract);
};

export const addParent = async () => {
  console.log("addParent");
  console.log(contract);
  const tx = await contract.addParent("Burak", "Daglar");
  console.log(tx);
  console.log("added");
};

export const getParent = async () => {
  console.log("getParent");
  const parent = await contract.getParent();
  console.log(parent.firstName);
  console.log(parent);
  console.log("get");
};

export const getContractAddress = () => {
  console.log(contract.address);
  return contract.address;
};

import { ContractFactory, ethers } from "ethers";
import abi from "../data/contract.json";
import { Routes, Route, useNavigate } from "react-router-dom";

export let contract;

const CONTRACT_ADDRESS = "0x1B48129Fa3AA02d182f5e65811Cdc74D8ce554Bb";

export const connectWalletHandler = async () => {
  let provider;

  if (window.ethereum) {
    // set ethers provider
    provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(contract);

    // connect to metamask
    await window.ethereum.request({ method: "eth_requestAccounts" });

    contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider.getSigner());
    console.log(contract);
  } else if (!window.ethereum) {
    console.log("Need to install MetaMask");
  }
};

export const addParent = async (_firstName, _lastName) => {
  console.log("addParent");
  console.log(contract);
  const tx = await contract.addParent(_firstName, _lastName);
  console.log(tx);
  console.log("added");
  console.log("");
};

export const getParent = async () => {
  console.log("getParent");
  const parent = await contract.getParent();
  console.log(parent.firstName);
  console.log(parent);
  console.log("get");
  console.log("");
};

export const addChild = async (
  _adres,
  _firstName,
  _lastName,
  _dateOfBirth,
  _accessDate
) => {
  console.log("addChild");
  const tx = await contract.addChild(
    _adres,
    _firstName,
    _lastName,
    _dateOfBirth,
    _accessDate
  );
  console.log("added Child");
};

export const getChildsFromParent = async () => {
  console.log("getChildsFromParent");
  const childArray = await contract.getChildsFromParent();
  console.log(childArray);
  return childArray;
};

export const getChild = async (_adres) => {
  console.log("getChild");
  const child = await contract.getChild();
  console.log(child);
  console.log("gettedChild");
  return child;
};

import React, { useState, useEffect } from "react";
import { ContractFactory, ethers } from "ethers";
import abi from "../data/contract.json";
import { Routes, Route, useNavigate } from "react-router-dom";

export let contract;
const ENDPOINT = "https://api-rinkeby.etherscan.io/api";
const CONTRACT_ADDRESS = "0xB2887c51c705eBB159d930187A1CAeE60dAc6A4a";
const API_KEY = "1HFBV46X2Y78BTUCJ6UVC4BMXJI2SEYI58";
export const con = `${ENDPOINT}?module=logs&action=getLogs&fromBlock=379224&toBlock=latest&address=${CONTRACT_ADDRESS}&topic0=0xf63780e752c6a54a94fc52715dbc5518a3b4c3c2833d301a204226548a2a8545&apikey=${API_KEY}`;

const API_Balance = `${ENDPOINT}?module=account&action=balance&address=${CONTRACT_ADDRESS}&tag=latest&apikey=${API_KEY}`;
export const API_Normal_Transaction = `${ENDPOINT}?module=account&action=txlist&address=${CONTRACT_ADDRESS}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY};
`;
const API_log = `${ENDPOINT}?module=logs&action=getLogs&address=${CONTRACT_ADDRESS}&fromBlock=12878196&toBlock=12878196&page=1&offset=1000&apikey=${API_KEY}`;

export let userAddress;

export const connectWalletHandler = async () => {
  let provider;

  if (window.ethereum) {
    // set ethers provider
    provider = new ethers.providers.Web3Provider(window.ethereum);

    // connect to metamask
    await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((result) => {})
      .catch((error) => {});

    contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider.getSigner());
    userAddress = await provider.getSigner().getAddress();

    const roleValue = addressControl(userAddress);

    console.log(API_Balance);
    console.log(API_Normal_Transaction);
    console.log(API_log);
    console.log(con);

    return roleValue;
  } else if (!window.ethereum) {
    console.log("Need to install MetaMask");
  }
};

export const addressControl = async (_address) => {
  const tx = await contract.addressControl(_address);
  return tx;
};

export const addParent = async (_firstName, _lastName) => {
  try {
    const tx = await contract.addParent(_firstName, _lastName);
    tx.wait();
    //console.log(tx);
  } catch (e) {
    if (e.reason.includes("user_already_exists")) {
      console.log("Kullanıcı zaten kayıtlı!");
    } else {
      console.log("Beklenmedik hata: ", e);
    }
  }
};

export const getParent = async () => {
  const parent = await contract.getParent();
  return parent;
};

export const addChild = async (_adres, _firstName, _lastName, _accessDate) => {
  const tx = await contract.addChild(
    _adres,
    _firstName,
    _lastName,
    _accessDate
  );
  await tx.wait();
};

export const getChildsFromParent = async () => {
  const childArray = await contract.getChildsFromParent();
  console.log(childArray);
  return childArray;
};

export const getChild = async (_adres) => {
  const child = await contract.getChild();
  return child;
};

export const storeETH = async (address, amount) => {
  console.log(address, " ", amount);
  const store = await contract.storeETH(address, { value: amount });
  await store.wait();
  console.log(store);
};

export const parentWithdraw = async (address, amount) => {
  console.log(address, " ", amount);
  const withdraw = await contract.parentWithdraw(address, amount);
  console.log(withdraw);
  await withdraw.wait();
};

export const childWithdraw = async (date) => {
  const withdraw = await contract.childWithdraw(date);
  console.log(withdraw);
  await withdraw.wait();
};

export const getAllParent = async () => {
  console.log("getAllParents");
  console.log(contract);
  const allParents = await contract.getAllParent();
  console.log(allParents);
  console.log("gettedAllParents");
  return allParents;
};

export const getAllChild = async () => {
  console.log("getAllChild");
  const allChilds = await contract.getAllChild();
  console.log(allChilds);
  console.log("gettedAllChild");
  return allChilds;
};

export const getAllUser = async () => {
  console.log("getAllUsers");
  let allUsers = await getAllParent();
  allUsers = [...allUsers, ...(await getAllChild())];

  console.log(allUsers);
  return allUsers;
};

export const getChildsFromParentWithAddress = async (_address) => {
  console.log("getChildsFromParent");
  const childParent = await contract.getChildsFromParentWithAddress(_address);
  console.log(childParent);
  return childParent;
};

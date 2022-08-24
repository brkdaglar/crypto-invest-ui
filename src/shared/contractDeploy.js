import React, { useState, useEffect } from "react";
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
    await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((result) => {})
      .catch((error) => {});

    contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider.getSigner());
    const userAddress = await provider.getSigner().getAddress();

    const roleValue = addressControl(userAddress);

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
  console.log("parent, ", parent);
  return parent;
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

export const getAllParents = async () => {
  console.log("getAllParents");
  console.log(contract);
  const allParents = await contract.getAllParents();
  console.log(allParents);
  console.log("gettedAllParents");
  return allParents;
};

export const getAllChild = async () => {
  console.log("getAllChild");
  const allChilds = await contract.getAllChilds();
  console.log(allChilds);
  console.log("gettedAllChild");
  return allChilds;
};

export const getAllUsers = async () => {
  console.log("getAllUsers");
  let allUsers = await getAllParents();
  allUsers = [...(await getAllChild())];
  console.log(allUsers);
  return allUsers;
};

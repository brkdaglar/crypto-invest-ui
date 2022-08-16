import { ethers } from "ethers";
import abi from "../data/contract.json";

let contract;
const CONTRACT_ADDRESS = "0x1B48129Fa3AA02d182f5e65811Cdc74D8ce554Bb";

export const onClickWallet = async () => {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    abi,
    provider.getSigner()
  );

  console.log(contract.address);

  //const tx = await contract.setBalanceAccessAge(25);
  //const txResult = await tx.wait();
  //console.log("Balance: ", { tx, txResult });
};

export const getContractAddress = () => {
  console.log(contract.address);
  return contract.address;
};

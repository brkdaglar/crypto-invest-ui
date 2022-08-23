import React, { useEffect, useState } from "react";
import { getChild } from "../../shared/contractDeploy";
import "./ChildPage.css";
import dayjs from "dayjs";

const ChildPage = () => {
  const [child, setChild] = useState({});

  useEffect(() => {
    const getChildInformations = async () => {
      try {
        const res = await getChild();
        console.log("result: ", res);
        setChild({
          firstName: res.firstName,
          lastName: res.lastName,
          balance: (res.balance || 0).toString(),
          accessDateTimeStamp: dayjs
            .unix(res.accessDateTimeStamp)
            .format("DD/MM/YYYY"),
          dateOfBirthTimeStamp: dayjs
            .unix(res.dateOfBirthTimeStamp)
            .format("DD/MM/YYYY"),
        });

        console.log(res);
      } catch (e) {
        console.error(e);
      }
    };
    getChildInformations();
  }, []);

  return (
    <div className="ChildPage">
      <h1>Welcome to Crypto Legacy</h1>
      <h3>
        {console.log("Gelen child:", child)}
        {child.firstName} {child.lastName}
      </h3>
      <p id="firstparagraph">{child.balance}</p>
      <p id="secondparagraph">{child.accessDateTimeStamp}</p>
      <img
        id="etherimage"
        src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png"
        width="100"
        height="100"
      ></img>
      <img
        id="bigetherimage"
        src="https://icons-for-free.com/iconfiles/png/512/eth+ethcoin+etherium+icon-1320162857971241492.png"
        width="300"
        height="300"
      ></img>
      <img
        id="dateimage"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Blank_Calendar_page_icon.svg/1693px-Blank_Calendar_page_icon.svg.png"
        width="300"
        height="300"
      ></img>
      <button className="buttonwithdraw">withdraw </button>
    </div>
  );
};

export default ChildPage;

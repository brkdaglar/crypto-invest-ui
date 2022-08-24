import React, { useEffect, useState } from "react";
import { getChild } from "../../shared/contractDeploy";
import "./ChildPage.css";
import dayjs from "dayjs";
import wallet from "./wallet.JPG";
import calender from "./calender.PNG"

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
      <div className="divProfile">
        <img src={require("../Parent/image.png")} width="150px" height="150px" />
        <h3>
        {console.log("Gelen child:", child)}
        {child.firstName} {child.lastName}
      </h3>
        <div style={{ height: "7px", backgroundColor: "white", borderRadius: 5 }} />
      </div>
      
      <p id="firstparagraph">{child.balance}</p>
      <p id="secondparagraph">{child.accessDateTimeStamp}</p>
      <img
        id="bigetherimage"
        src={wallet}
        width="300"
        height="300"
      ></img>
      <img
        id="dateimage"
        src={calender}
        width="300"
        height="300"
      ></img>
      <button className="buttonwithdraw">withdraw </button>
    </div>
  );
};

export default ChildPage;

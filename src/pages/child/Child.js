import React, { useEffect, useState } from "react";
import { getChild, childWithdraw, con } from "../../shared/contractDeploy";
import "./Child.css";
import dayjs from "dayjs";
import ProfileComponent from "../../component/ProfileComponent";
import { Button } from "antd";

const ChildPage = () => {
  const [child, setChild] = useState({});
  const [active, isActive] = useState(true);

  const getChildInformations = async () => {
    try {
      const res = await getChild();
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
      let balanceString = parseInt(res.balance.toString());
      console.log("deger: ", balanceString > 0)
      console.log("deger: ", dayjs().unix() >= res.accessDateTimeStamp.toNumber())
      if (dayjs().unix() >= res.accessDateTimeStamp.toNumber() && balanceString > 0) {
        console.log("girdi");
        console.log(balanceString);
        isActive(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getChildInformations();
  }, []);

  return (
    <div className="root">
      <ProfileComponent />
      <div className="divChild">
        <div id="divBalance">
          <div id="balance" />
          <h4>{child.balance}</h4>
        </div>
        <div id="divButton">
          {console.log(active)}
          <Button
            type="primary"
            onClick={async () => {
              await childWithdraw(dayjs().unix());
              setTimeout(()=>{getChildInformations()},50000)
            }}
            disabled={active}
          >
            Withdraw
          </Button>
        </div>
        <div id="divDate">
          <div id="date" />
          <h4>{child.accessDateTimeStamp}</h4>
        </div>
      </div>
    </div>
  );
};

export default ChildPage;

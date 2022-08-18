import { React, useState } from "react";
import "./ChildList.css";
import {
  getParent,
  getChildsFromParent,
  addChild,
  getChild,
} from "../shared/contractDeploy.js";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";

const ChildList = () => {
  const [dateOfBirth, setDateOfBirth] = useState();
  const [accessDateOfBirth, setAccessDateOfBirth] = useState();

  const onChangeDate = (date, dateString) => {
    let dateSplit = dateString.split("-");
    let dateSplitYear = parseInt(dateSplit[0]) + 18;
    dateSplit[0] = dateSplitYear.toString();
    const accessDateString = dateSplit.join("-");
    const birthDate = new Date(dateString);
    const accessDate = new Date(accessDateString);

    const timestampSecondsBirthDate = Math.floor(birthDate.getTime() / 1000);
    const timestampSecondsAccessDate = Math.floor(accessDate.getTime() / 1000);
    console.log(timestampSecondsBirthDate);
    console.log(timestampSecondsAccessDate);
    setDateOfBirth(timestampSecondsBirthDate);
    setAccessDateOfBirth(timestampSecondsAccessDate);
  };

  const onClickAddChild = () => {
    addChild(
      "0xA745240Fe1D25819FCA6143D15139d44fD7832C4",
      "Jack",
      "Sparrow",
      0,
      0
    );
  };

  const onClickChild = () => {
    getChild("0xA745240Fe1D25819FCA6143D15139d44fD7832C4");
  };

  return (
    <div id="mainpage">
      <h1>
        {" "}
        <ins> CHİLDREN </ins>{" "}
      </h1>

      <table id="children">
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Birth Date</th>
          <th>Public Adress</th>
          <th> Balance </th>
          <th> </th>
          <th> </th>
        </tr>
        <tr>
          <td>İlkkan</td>
          <td>Kurt</td>
          <td>18/04/2006</td>
          <td>F61th6gd8J08s7H7d</td>
          <td>7 ETH </td>
          <td>
            <button type="button">Send </button>
          </td>
          <td>
            <button type="button">Withdraw </button>
          </td>
        </tr>
        <tr>
          <td>Ecemşah</td>
          <td>Kurt</td>
          <td>22/07/2010</td>
          <td>Qx1m3gd8J0K7Oph2</td>
          <td>11 ETH </td>
          <td>
            <button type="button">Send </button>
          </td>
          <td>
            <button type="button">Withdraw </button>
          </td>
        </tr>
        <tr>
          <td>Yılmaz</td>
          <td>Kurt</td>
          <td>15/04/2015</td>
          <td>Hkj381bHlaq76V51</td>
          <td>No Data </td>
          <td>
            <button type="button">Send </button>
          </td>
          <td>
            <button type="button">Withdraw </button>
          </td>
        </tr>
      </table>
      <button class="button5" onClick={getParent}>
        {" "}
        getParent{" "}
      </button>
      <button class="button5" onClick={getChildsFromParent}>
        {" "}
        getChildsFromParent{" "}
      </button>
      <button class="button5" onClick={onClickAddChild}>
        {" "}
        addChild{" "}
      </button>
      <button onClick={onClickChild}> Getchild </button>
      {/*DATE PİCKER*/}
      <Space direction="vertical">
        <DatePicker onChange={onChangeDate} />
      </Space>
      {/*---------------------*/}
    </div>
  );
};

export default ChildList;

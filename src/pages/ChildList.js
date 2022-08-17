import React from "react";
import "./ChildList.css";

const ChildList = () => {
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
      <button class="button5"> + </button>
    </div>
  );
};

export default ChildList;

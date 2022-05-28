import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Record.css";

const serverURL = "http://localhost:8080";

// For CORS communication possible
axios.defaults.withCredentials = true; // withCredentials global Setting

const TeamRecord = (props) => {
  return (
    <tr>
      <td>{props.ranking + 1} </td>
      <td>{props.teamName}</td>
      <td>props.gameNumber</td>
      <td>props.win</td>
      <td>props.draw</td>
      <td>props.defeat</td>
      <td>props.score</td>
      <td>props.lose</td>
      <td>props.score-props.lose</td>
      <td>3*props.win + props.draw</td>
      <td>총 경기</td>
    </tr>
  );
};

const Record = () => {
  const [Records, setRecords] = useState([]);

  useEffect(() => {
    const asyncFun = async () => {
      const { data } = await axios.get(serverURL + `/team/showTeams`);
      setRecords(data);
    };
    asyncFun().catch((e) => {
      window.alert(`Error: ${e}`);
    });
  }, []);

  return (
    <>
      <table className="Ranking">
        <tr>
          <th>순위</th>
          <th>클럽</th>
          <th>경기수</th>
          <th>승</th>
          <th>무</th>
          <th>패</th>
          <th>득점</th>
          <th>실점</th>
          <th>GD</th>
          <th>승점</th>
          <th>최근 5개 경기</th>
        </tr>
        {Records.map((val, i) => (
          <TeamRecord ranking={i} teamName={val.teamName} />
        ))}
      </table>
    </>
  );
};

export default Record;

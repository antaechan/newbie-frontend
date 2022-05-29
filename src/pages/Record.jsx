import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Record.css";

const serverURL = "http://localhost:8080";

// For CORS communication possible
axios.defaults.withCredentials = true; // withCredentials global Setting

const TeamRecord = (props) => {
  return (
    <tr>
      <td>{props.ranking} </td>
      <td>{props.teamName}</td>
      <td>{props.matchCount}</td>
      <td>{props.win}</td>
      <td>{props.draw}</td>
      <td>{props.defeat}</td>
      <td>{props.score}</td>
      <td>{props.lose}</td>
      <td>{props.GD}</td>
      <td>{props.point}</td>
      <td>총 경기</td>
    </tr>
  );
};

const Record = () => {
  const [TeamRecords, setTeamRecords] = useState([]);
  const [MatchRecords, setMatchRecords] = useState([]);
  const [TeamRecordSorted, setTeamRecordSorted] = useState([]);

  const updateTeamRecord = (teamName) => {
    var matchCount = 0;
    var win = 0;
    var draw = 0;
    var defeat = 0;
    var score = 0;
    var lose = 0;

    for (var i = 0; i < MatchRecords.length; i++) {
      const { team1, team2, team1Score, team2Score } = MatchRecords[i];
      if (team1 === teamName) {
        matchCount++;
        if (team1Score > team2Score) {
          win++;
        } else if (team1Score === team2Score) {
          draw++;
        } else {
          defeat++;
        }
        score += team1Score;
        lose += team2Score;
      } else if (team2 === teamName) {
        matchCount++;
        if (team2Score > team1Score) {
          win++;
        } else if (team2Score === team1Score) {
          draw++;
        } else {
          defeat++;
        }
        score += team2Score;
        lose += team1Score;
      }
    }

    const GD = score - lose;
    const point = 3 * win + draw;

    return { teamName, matchCount, win, draw, defeat, score, lose, GD, point };
  };

  const SortTeamRecord = () => {
    const TeamRecordClone = TeamRecords.map((val, i) =>
      updateTeamRecord(val.teamName)
    );

    // sort TeamRecordClone
    setTeamRecordSorted(TeamRecordClone.sort((a, b) => b.point - a.point));
  };

  useEffect(() => {
    const asyncFun = async () => {
      const { data: teamData } = await axios.get(serverURL + `/team/showTeams`);
      const { data: matchData } = await axios.get(
        serverURL + `/match/showPreMatches`
      );
      setTeamRecords(teamData);
      setMatchRecords(matchData);
    };
    asyncFun().catch((e) => {
      window.alert(`Error: ${e}`);
    });
  }, []);

  useEffect(() => {
    if (MatchRecords && TeamRecords) {
      SortTeamRecord();
    }
  }, [MatchRecords, TeamRecords]);

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
        {TeamRecordSorted.map((val, i) => (
          <TeamRecord
            key={i}
            ranking={i + 1}
            teamName={val.teamName}
            matchCount={val.matchCount}
            win={val.win}
            draw={val.draw}
            defeat={val.defeat}
            score={val.score}
            lose={val.lose}
            GD={val.GD}
            point={val.point}
          />
        ))}
      </table>
    </>
  );
};

export default Record;

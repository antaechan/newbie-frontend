import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Record.css";

// For CORS communication possible
axios.defaults.withCredentials = true; // withCredentials global Setting

const TeamRecord = (props) => {
  return (
    <tr>
      <td className="td_ranking">{props.ranking} </td>
      <td className="td_teamName">{props.teamName}</td>
      <td>{props.matchCount}</td>
      <td>{props.win}</td>
      <td>{props.draw}</td>
      <td>{props.defeat}</td>
      <td>{props.score}</td>
      <td>{props.lose}</td>
      <td>{props.GD}</td>
      <td className="td_point">{props.point}</td>
      <td>{props.recentMatches}</td>
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
    setTeamRecordSorted(
      TeamRecordClone.sort((a, b) => {
        if (b.point !== a.point) {
          return b.point - a.point;
        } else {
          return b.GD - a.GD;
        }
      })
    );
  };

  const GetRecentMatches = (teamName) => {
    const MatchRecordClone = [...MatchRecords];
    const res = MatchRecordClone.filter(
      (e) => e.team1 === teamName || e.team2 === teamName
    );
    const sortedRes = res.sort((a, b) => {
      const a_date = new Date(a.date).getTime();
      const b_date = new Date(b.date).getTime();
      return b_date - a_date;
    });
    const recentMatches = sortedRes.slice(
      0,
      5 < sortedRes.length ? 5 : sortedRes.length
    );
    const mask = ["⚫", "⚫", "⚫", "⚫", "⚫"];

    for (var i = 0; i < recentMatches.length; i++) {
      const match = recentMatches[i];
      if (teamName === match.team1) {
        if (match.team1Score > match.team2Score) {
          mask[i] = "✅";
        } else if (match.team1Score === match.team2Score) {
          mask[i] = "⚪";
        } else {
          mask[i] = "⛔";
        }
      } else if (teamName === match.team2) {
        if (match.team2Score > match.team1Score) {
          mask[i] = "✅";
        } else if (match.team2Score === match.team1Score) {
          mask[i] = "⚪";
        } else {
          mask[i] = "⛔";
          // ❌
          // ⚽
          //⚪
          //⚫
        }
      }
    }
    return mask.join("");
  };

  useEffect(() => {
    const asyncFun = async () => {
      const { data: teamData } = await axios.get(
        axios.defaults.baseURL + `/team/showTeams`
      );
      const { data: matchData } = await axios.get(
        axios.defaults.baseURL + `/match/showPreMatches`
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
      <div className="instruction">
        <p>✅ 승리 ⚪ 무승부 ⛔ 패배 ⚫ 경기예정</p>
      </div>
      <div className="tableDiv">
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
              recentMatches={GetRecentMatches(val.teamName)}
            />
          ))}
        </table>
      </div>
    </>
  );
};

export default Record;

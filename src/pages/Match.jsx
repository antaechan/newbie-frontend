import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateMatchScore from "../components/updateMatchScore";
import UpdateMatchDate from "../components/updateMatchDate";

import "./Match.css";
import "./Apply.css";

// For CORS communication possible
axios.defaults.withCredentials = true; // withCredentials global Setting

const Match = () => {
  const [matches, setMatches] = useState([]);
  const [sortedMatches, setSortedMatches] = useState([]);
  const [scoreButton, setScoreButton] = useState(false);
  const [dateButton, setDateButton] = useState(false);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [date, setDate] = useState(new Date());
  const [updateId, setUpdateId] = useState("");

  useEffect(() => {
    const asyncFun = async () => {
      const { data } = await axios.get(
        axios.defaults.baseURL + `/match/showMatches`
      );
      console.log(data);
      setMatches(data);
    };
    asyncFun().catch((e) => {
      window.alert(`Error: ${e}`);
    });
  }, [scoreButton, dateButton]);

  useEffect(() => {
    if (matches) {
      setSortedMatches(
        matches.sort((a, b) => {
          const a_date = new Date(a.date);
          const b_date = new Date(b.date);
          return a_date - b_date;
        })
      );
    }
  }, [matches]);

  const updateMatchScore = async () => {
    const asyncFun = async () => {
      await axios.post(axios.defaults.baseURL + `/match/updateMatchScore`, {
        id: updateId,
        team1Score: team1Score,
        team2Score: team2Score,
      });
      setTeam1Score(0);
      setTeam2Score(0);
      setUpdateId("");
      setScoreButton(false);
    };
    asyncFun().catch((e) => window.alert(`Error: ${e}`));
  };

  const updateMatchDate = async () => {
    const asyncFun = async () => {
      await axios.post(axios.defaults.baseURL + `/match/updateMatchDate`, {
        id: updateId,
        date: date,
      });
      setDate("");
      setUpdateId("");
      setDateButton(false);
    };
    asyncFun().catch((e) => window.alert(`Error: ${e}`));
  };

  const Mark = (team1Score, team2Score) => {
    const res = team1Score > team2Score ? "◀" : " ";
    return res;
  };

  return (
    <div className="total">
      {/* show all matches */}
      <div className="matches">
        {sortedMatches.map((val, i) => (
          <div key={i} className="matchItem">
            <div key={i} className="matchView">
              <div className="matchTeamPart">
                <h2>⚽ {val.team1}</h2>
                <h2>⚽ {val.team2}</h2>
              </div>
              <div className="matchScorePart">
                <h2>
                  {val.team1Score} {() => Mark(val.team1Score, val.team2Score)}
                </h2>
                <h2>
                  {val.team2Score} {() => Mark(val.team2Score, val.team1Score)}
                </h2>
              </div>
              <hr />
              <div className="matchDatePart">
                <p className="MatchDate">
                  {new Date(val.date).toLocaleString().slice(0, -3)}
                </p>
                {new Date(val.date).getTime() < new Date().getTime() ? (
                  <h3 className="end">경기완료</h3>
                ) : (
                  <h3>경기예정</h3>
                )}
              </div>
            </div>
            <div className="matchUpdatePart">
              <div
                className="matchScoreUpdatePart"
                onClick={() => {
                  setUpdateId(`${val._id}`);
                  setScoreButton((prev) => !prev);
                }}
              >
                <h3>ScoreUpdate</h3>
              </div>
              <div
                className="matchDateUpdatePart"
                onClick={() => {
                  setUpdateId(`${val._id}`);
                  setDateButton((prev) => !prev);
                }}
              >
                <h3>DateUpdate</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* update score */}
      {scoreButton && (
        <div className="background">
          <div className="createBox">
            <div
              className="backButton"
              onClick={() => setScoreButton((prev) => !prev)}
            >
              Back👈
            </div>
            <UpdateMatchScore
              team1Score={team1Score}
              team2Score={team2Score}
              setTeam1Score={setTeam1Score}
              setTeam2Score={setTeam2Score}
            />
            <div className="updateButton" onClick={updateMatchScore}>
              update
            </div>
          </div>
        </div>
      )}

      {/* date score */}
      {dateButton && (
        <div className="background">
          <div className="createBox">
            <div
              className="backButton"
              onClick={() => setDateButton((prev) => !prev)}
            >
              Back👈
            </div>
            <UpdateMatchDate date={date} setDate={setDate} />
            <div className="updateButton" onClick={updateMatchDate}>
              ⚡Update⚡
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Match;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Match.css";

const serverURL = "http://localhost:8080";

// For CORS communication possible
axios.defaults.withCredentials = true; // withCredentials global Setting

const Match = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const asyncFun = async () => {
      const { data } = await axios.get(serverURL + `/match/showMatches`);
      console.log(data);
      setMatches(data);
    };
    asyncFun().catch((e) => {
      window.alert(`Error: ${e}`);
    });
  }, []);

  const updateMatch = () => {
    return;
  };

  return (
    <div className="total">
      <p>This is Match page</p>
      <div className="matches">
        {matches.map((val, i) => (
          <>
            <div key={i} className="matchItem">
              <div className="matchTeamPart">
                <h2>{val.team1}</h2>
                <h2>{val.team2}</h2>
              </div>
              <div className="matchScorePart">
                <h2>{val.team1Score}</h2>
                <h2>{val.team2Score}</h2>
              </div>
              <hr />
              <div className="matchDatePart">
                <p>{val.date}</p>
              </div>
            </div>
            <div className="matchUpdatePart">
              <div className="matchScoreUpdatePart">
                <h3>ScoreUpdate</h3>
              </div>
              <div className="matchDateUpdatePart">
                <h3>DateUpdate</h3>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Match;

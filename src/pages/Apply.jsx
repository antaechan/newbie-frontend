import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Apply.css";
import CreateButtonPage from "../components/CreateButtonPage";

const serverURL = "http://localhost:8080";

// For CORS communication possible
axios.defaults.withCredentials = true; // withCredentials global Setting

const Apply = () => {
  // state
  const [Teams, setTeams] = useState([]);
  const [targetId, setTargetId] = useState("");
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [button, setButton] = useState(false);
  const [changedDetected, setChangedDetected] = useState(false);

  useEffect(() => {
    const asyncFun = async () => {
      const { data } = await axios.get(serverURL + `/team/showTeams`);
      setTeams(data);
    };
    asyncFun().catch((e) => {
      return;
      // window.alert(`Error: ${e}`)
    });
  }, [button, changedDetected]);

  // implement CRUD
  const createTeam = () => {
    const asyncFun = async () => {
      await axios.post(serverURL + "/team/createTeam", {
        teamName,
        leaderName,
      });
      setTeamName("");
      setLeaderName("");
      setButton(false);
      setChangedDetected((prev) => !prev);
    };
    asyncFun().catch((e) => window.alert(`Error: ${e}`));
  };

  const updateTeam = () => {
    const asyncFun = async () => {
      await axios.post(serverURL + "/team/updateTeam", {
        id: targetId,
        teamName,
        leaderName,
      });
      setTeamName("");
      setLeaderName("");
      setTargetId("");
      setChangedDetected((prev) => !prev);
    };
    asyncFun().catch((e) => window.alert(`Error: ${e}`));
  };

  const deleteTeam = (id) => {
    const asyncFun = async () => {
      await axios.post(serverURL + "/team/deleteTeam", { id: id });
      setChangedDetected((prev) => !prev);
    };
    asyncFun().catch((e) => window.alert(`Error: ${e}`));
  };

  // HTML Apply page
  return (
    <div className="teams">
      {/* teams list */}
      {Teams.map((val, i) => (
        <div key={i} className="team">
          <h2>{val.teamName}</h2>
          <h3>{val.leaderName}</h3>
          <div onClick={(e) => deleteTeam(`${val._id}`)}>delete</div>
        </div>
      ))}

      {/* button: align right-bottom */}
      <div className="button" onClick={() => setButton((prev) => !prev)}>
        Addbutton
      </div>
      {/* CRUD Implementation */}

      {button ? (
        <div className="background">
          <div className="createBox">
            <div
              className="backButton"
              onClick={() => setButton((prev) => !prev)}
            >
              back
            </div>
            <CreateButtonPage
              teamName={teamName}
              setTeamName={setTeamName}
              leaderName={leaderName}
              setLeaderName={setLeaderName}
            />
            <div className="createButton" onClick={createTeam}>
              create
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Apply;

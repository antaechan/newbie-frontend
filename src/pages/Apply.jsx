import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Apply.css";

const serverURL = "http://localhost:8080";

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
      const { teamsData } = await axios.get(serverURL + `/showTeams`);
      setTeams(teamsData);
    };
    asyncFun().catch((e) => window.alert(`Error: ${e}`));
  }, [button, changedDetected]);

  // implement CRUD
  const createTeam = () => {
    const asyncFun = async () => {
      await axios.post(serverURL + "/createTeam", { teamName, leaderName });
      setTeamName("");
      setLeaderName("");
      setButton(false);
      setChangedDetected((prev) => !prev);
    };
    asyncFun().catch((e) => window.alert(`Error: ${e}`));
  };

  const updateTeam = () => {
    const asyncFun = async () => {
      await axios.post(serverURL + "/updateTeam", {
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
      await axios.post(serverURL + "/deleteTeam", { id: id });
      setChangedDetected((prev) => !prev);
    };
    asyncFun().catch((e) => window.alert(`Error: ${e}`));
  };

  const CreateButtonPage = () => {
    return (
      <div className="background">
        <div className="createBox">
          <div
            className="backButton"
            onClick={() => setButton((prev) => !prev)}
          >
            back
          </div>
          <p>teamName: </p>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <p>leaderName: </p>
          <input
            type="text"
            value={leaderName}
            onChange={(e) => setLeaderName(e.target.value)}
          />
          <div className="createButton" onClick={createTeam}>
            create
          </div>
        </div>
      </div>
    );
  };

  // HTML Apply page
  return (
    <div className="teams">
      {/* teams list */}
      {Teams.map((val, i) => (
        <div key={i} className="team">
          <p>{val.teamName}</p>
          <p>{val.leaderName}</p>
          <nav className="revision">
            <li>
              <div onClick={(e) => deleteTeam(`${val.id}`)}>delete</div>
            </li>
          </nav>
        </div>
      ))}

      {/* button: align right-bottom */}
      <div className="button" onClick={() => setButton((prev) => !prev)}>
        button
      </div>

      {/* CRUD Implementation */}
      {button ? <CreateButtonPage /> : <div></div>}
    </div>
  );
};

export default Apply;

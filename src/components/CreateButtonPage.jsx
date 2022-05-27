import "./CreateButtonPage.css";

const CreateButtonPage = (props) => {
  return (
    <div className="question">
      <h2>Add Information</h2>
      <h3 className="Q">teamName</h3>
      <input
        name="teamNameQuestion"
        type="text"
        placeholder="type your team name"
        value={props.teamName}
        onChange={(e) => props.setTeamName(e.target.value)}
      />
      <h3 className="Q">leaderName</h3>
      <input
        name="leaderNameQuestion"
        type="text"
        placeholder="type your leader name"
        value={props.leaderName}
        onChange={(e) => props.setLeaderName(e.target.value)}
      />
    </div>
  );
};

export default CreateButtonPage;

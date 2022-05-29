import "./CreateButtonPage.css";

const UpdateMatchScore = (props) => {
  return (
    <div className="question">
      <h2>Add Information</h2>
      <h3 className="Q">team1Score</h3>
      <input
        name="team1NameQuestion"
        type="text"
        placeholder="type team1 score"
        value={props.team1Score}
        onChange={(e) => props.setTeam1Score(e.target.value)}
      />
      <h3 className="Q">leaderName</h3>
      <input
        name="leaderNameQuestion"
        type="text"
        placeholder="type team2 score"
        value={props.team2Score}
        onChange={(e) => props.setTeam2Score(e.target.value)}
      />
    </div>
  );
};

export default UpdateMatchScore;

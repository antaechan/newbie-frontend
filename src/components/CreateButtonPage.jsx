const CreateButtonPage = (
  button,
  setButton,
  teamName,
  setTeamName,
  leaderName,
  setLeaderName,
  createTeam
) => {
  return (
    <>
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
    </>
  );
};

export default CreateButtonPage;

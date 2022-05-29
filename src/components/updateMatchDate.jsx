import "./CreateButtonPage.css";

const UpdateMatchDate = (props) => {
  return (
    <div className="question">
      <h2>Add Information</h2>
      <h3 className="Q">match date</h3>
      <input
        name="MatchDate"
        type="datetime-local"
        placeholder="type match data"
        value={props.date}
        onChange={(e) => props.setDate(e.target.value)}
      />
    </div>
  );
};

export default UpdateMatchDate;

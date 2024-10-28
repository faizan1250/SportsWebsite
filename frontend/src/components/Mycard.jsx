import React from "react";

const Mycard = ({ match }) => {
  return (
    <div>
      <div>team1 - {match["team-1"]}</div>
      <div>team2 - {match["team-2"]}</div>
      <div>start time - {new Date(match.dateTimeGMT).toLocaleString()}</div>
    </div>
  );
};

export default Mycard;

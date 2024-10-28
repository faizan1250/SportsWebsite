import React, { Fragment, useEffect, useState } from "react";
import Mycard from "../components/Mycard";
import axios from "axios";
import { getMatches } from "../api/Api";

const Test = () => {
  const [matches, setMatches] = useState([]);
  //const [a, setA] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.data);
        console.log(data.data);
      })
      .catch();
  }, []);
  return (
    <div>
      <div className="text-2xl">TEST</div>
      {matches.map((match) => (
        <Fragment>
          {match.matchType == "test" ? (
            // <Mycard key={match.unique.id} match={match} />
            <div>
              <div>team1 - {match.teams[0]}</div>
              <div>team2 - {match.teams[1]}</div>
              <div>
                start time - {new Date(match.dateTimeGMT).toLocaleString()}
              </div>
            </div>
          ) : (
            ""
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Test;

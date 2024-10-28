import React, { Fragment, useEffect, useState } from "react";
import { getMatches } from "../api/Api"; // Adjust the path based on your project structure
import Nav from "../components/Nav"; // Adjust the path based on your project structure

const Cricketscore = () => {
  const [matches, setMatches] = useState([]); // State to store matches
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Fetch matches only if the matches state is empty
    if (matches.length === 0) {
      getMatches()
        .then((data) => {
          setMatches(data.data); // Assuming `data.data` holds your matches
          console.log(data.data); // Log to check the data structure
        })
        .catch((error) => {
          console.error("Error fetching matches:", error); // Log the error for debugging
        })
        .finally(() => {
          setLoading(false); // Stop loading state once data is fetched
        });
    } else {
      setLoading(false); // If matches already exist, stop loading
    }
  }, [matches]); // Run effect only when matches change

  return (
    <div className="bg-white text-black">
      <div>
        <Nav /> {/* Navigation component */}
      </div>
      <div className="flex justify-evenly flex-wrap p-4">
        {loading ? ( // Check if data is still loading
          <div>Loading matches...</div> // Loading message
        ) : matches.length > 0 ? ( // Check if there are matches to display
          matches.map((match) => (
            <Fragment key={match.id}> {/* Provide a unique key for each match */}
              {match.matchType === "t20" || match.matchType === "test" ? (
                <div className="flex flex-col shadow-2xl  m-8 rounded-2xl" style={{ width: "500px" }}>
                  <div className="bg-slate-200 font-bold text-xl flex items-center justify-center p-1">{match.matchType}</div>
                  {/* Display team images and names */}
                  <div className="flex items-center justify-between mb-4 p-4">
                    <div className="flex items-center">
                      <img src={match.teamInfo[0]?.img} alt={match.teamInfo[0]?.name} className="w-12 h-12 mr-4" /> {/* Team 1 Image */}
                      <div className="text-2xl font-semibold text-blue-400">{match.teamInfo[0]?.shortname}</div> {/* Team 1 Short Name */}
                    </div>
                    <div className="text-xl">Vs</div>
                    <div className="flex items-center">
                      <div className="text-2xl font-semibold text-red-400">{match.teamInfo[1]?.shortname}</div> {/* Team 2 Short Name */}
                      <img src={match.teamInfo[1]?.img} alt={match.teamInfo[1]?.name} className="w-12 h-12 ml-4" /> {/* Team 2 Image */}
                    </div>
                  </div>

                  {/* Display match score */}
                  <div className="mb-4 pl-2 pr-2">
                    {/* <strong className="font-medium">Score:</strong> */}
                    {match.score && match.score.length > 0 ? (
                      <div className="flex justify-between flex-row-reverse">
                        <div className="font-bold text-xl text-black bg-gray-200 p-1 rounded-md">{match.score[0]?.r} / {match.score[0]?.w} ( {match.score[0]?.o} ) </div> {/* Team 1 Score */}
                        <div className="font-bold text-xl text-black bg-gray-200 p-1 rounded-md">{match.score[1]?.r} / {match.score[1]?.w} ( {match.score[1]?.o} ) </div> {/* Team 2 Score */}
                      </div>
                    ) : (
                      <div>Score not available</div>
                    )}
                  </div>

                  {/* Display venue and date */}
                  <div className="mb-4 pl-2 pr-2">
                    <strong>Venue:</strong> {match.venue || "N/A"}
                  </div>
                  <div className="mb-4 pl-2 pr-2">
                    <strong>Date & Time:</strong> {new Date(match.dateTimeGMT).toLocaleString()} {/* Convert to local time */}
                  </div>

                  {/* Display match result/status */}
                  <div className="pl-2 pr-2 pb-3">
                    <strong className="text-gray-400">Result:</strong> <span className="font-bold text-xl ml-1">{match.status || "N/A"}</span> {/* Display match result */}
                  </div>
                </div>
              ) : null} {/* Use null instead of empty string for better practice */}
            </Fragment>
          ))
        ) : (
          <div>No matches available</div> // Fallback message when no matches are present
        )}
      </div>
    </div>
  );
};

export default Cricketscore;

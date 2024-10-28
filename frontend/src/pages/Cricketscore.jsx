import React, { Fragment, useEffect, useState } from "react";
import { getMatches } from "../api/Api"; // Adjust the path based on your project structure
import Nav from "../components/Nav"; // Adjust the path based on your project structure

const Cricketscore = () => {
  const [matches, setMatches] = useState([]); // State to store matches
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Fetch matches once when the component mounts
    getMatches()
      .then((data) => {
        console.log("Fetched data:", data); // Log to check the data structure
        setMatches(data?.data || []); // Set matches data if available, else an empty array
      })
      .catch((error) => {
        console.error("Error fetching matches:", error); // Log the error for debugging
      })
      .finally(() => {
        setLoading(false); // Stop loading state once data is fetched
      });
  }, []); // Empty dependency array to fetch data only once on mount

  return (
    <div className="bg-white text-black">
      <Nav /> {/* Navigation component */}
      <div className="flex justify-evenly flex-wrap p-4">
        {loading ? ( 
          <div>Loading matches...</div>
        ) : matches.length > 0 ? ( 
          matches.map((match) => (
            <Fragment key={match.id}>
              {(match?.matchType === "t20" || match?.matchType === "test") && (
                <div className="flex flex-col shadow-2xl m-8 rounded-2xl" style={{ width: "500px" }}>
                  <div className="bg-slate-200 font-bold text-xl flex items-center justify-center p-1">{match?.matchType}</div>
                  
                  <div className="flex items-center justify-between mb-4 p-4">
                    <div className="flex items-center">
                      <img src={match?.teamInfo?.[0]?.img || ""} alt={match?.teamInfo?.[0]?.name || "Team 1"} className="w-12 h-12 mr-4" />
                      <div className="text-2xl font-semibold text-blue-400">{match?.teamInfo?.[0]?.shortname || "N/A"}</div>
                    </div>
                    <div className="text-xl">Vs</div>
                    <div className="flex items-center">
                      <div className="text-2xl font-semibold text-red-400">{match?.teamInfo?.[1]?.shortname || "N/A"}</div>
                      <img src={match?.teamInfo?.[1]?.img || ""} alt={match?.teamInfo?.[1]?.name || "Team 2"} className="w-12 h-12 ml-4" />
                    </div>
                  </div>

                  <div className="mb-4 pl-2 pr-2">
                    {match?.score && match.score.length > 0 ? (
                      <div className="flex justify-between flex-row-reverse">
                        <div className="font-bold text-xl text-black bg-gray-200 p-1 rounded-md">
                          {match?.score?.[0]?.r} / {match?.score?.[0]?.w} ({match?.score?.[0]?.o})
                        </div>
                        <div className="font-bold text-xl text-black bg-gray-200 p-1 rounded-md">
                          {match?.score?.[1]?.r} / {match?.score?.[1]?.w} ({match?.score?.[1]?.o})
                        </div>
                      </div>
                    ) : (
                      <div>Score not available</div>
                    )}
                  </div>

                  <div className="mb-4 pl-2 pr-2">
                    <strong>Venue:</strong> {match?.venue || "N/A"}
                  </div>
                  <div className="mb-4 pl-2 pr-2">
                    <strong>Date & Time:</strong> {new Date(match?.dateTimeGMT).toLocaleString() || "N/A"}
                  </div>

                  <div className="pl-2 pr-2 pb-3">
                    <strong className="text-gray-400">Result:</strong> <span className="font-bold text-xl ml-1">{match?.status || "N/A"}</span>
                  </div>
                </div>
              )}
            </Fragment>
          ))
        ) : (
          <div>No matches available</div>
        )}
      </div>
    </div>
  );
};

export default Cricketscore;

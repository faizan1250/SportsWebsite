import React, { useState } from 'react';
import Nav from '../components/Nav';
import axios from 'axios';

const CricketStats = () => {
  const [playerName, setPlayerName] = useState(''); // State to store player name
  const [playerStats, setPlayerStats] = useState(null); // State to store fetched player stats
  const [error, setError] = useState(null); // State to handle errors
  const [showBatting, setShowBatting] = useState(true); // State to toggle between batting and bowling

  // Function to fetch player stats based on player name
  const fetchApi = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/stats/cricket/stats/${playerName}`);
      setPlayerStats(response.data);
      setError(null); // Clear any previous errors

      // Log the fetched player stats to the console
      console.log("Fetched Player Stats:", response.data);

    } catch (error) {
      setError("Player not found or error fetching data"); // Set error message
      console.error("Error fetching data:", error);
      setPlayerStats(null); // Clear previous stats on error
    }
  };

  // Function to render player statistics
  const renderPlayerStats = () => {
    if (!playerStats) return null; // Return null if there's no stats to render

    const { data1, data2, data3, data4, data5, data6, data7, data8 } = playerStats;

    return (
      <div className='mt-4'>
        <div className='bg-white shadow-2xl rounded-2xl p-4' style={{ width: "600px" }}>
          {/* Toggle Buttons for Batting and Bowling */}
          
          {/* Batting Career Summary */}
          {showBatting && (
            <>
              {data1.map((summary, index) => (
                <div key={index}>
                  {/* Add player image */}
                  <img src={summary.Image} alt={`${summary["Player Name"]}`} className="w-32 h-32 object-cover rounded" />
                  <h3 className='text-2xl mt-2 text-black font-semibold'>{summary["Player Name"]} - {summary.Country} ({summary.Role})</h3>
                  <div className='flex mb-4 mt-4 '>
            <button 
              onClick={() => setShowBatting(true)} 
              className={`p-2 rounded ${showBatting ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              Batting
            </button>
            <button 
              onClick={() => setShowBatting(false)} 
              className={`ml-5 p-2 rounded ${!showBatting ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              Bowling
            </button>
          </div>

                  <p className='mt-2 font-medium text-xl text-black mb-2'>Batting Career Summary:</p>
                  <p className='bg-slate-200 p-1 text-xl text-black font-medium flex items-center justify-center'>
                    <strong>{summary["Batting Career Summary 1"].Mode1}</strong>
                  </p>

                  <div className='flex justify-evenly mt-6'>
                    <div className='p-4 shadow-xl rounded-xl'>
                      <p className='font-bold text-2xl text-blue-500'>{summary["Batting Career Summary 1"].Matches}</p>
                      <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Matches</p>
                    </div>
                    <div className='p-4 shadow-xl rounded-xl'>
                      <p className='font-bold text-2xl text-blue-500'>{summary["Batting Career Summary 1"].Runs}</p>
                      <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Runs</p>
                    </div>
                    <div className='p-4 shadow-xl rounded-xl'>
                      <p className='font-bold text-2xl text-blue-500'>{summary["Batting Career Summary 1"].Avg}</p>
                      <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Average</p>
                    </div>
                    <div className='p-4 shadow-xl rounded-xl'>
                      <p className='font-bold text-2xl text-blue-500'>{summary["Batting Career Summary 1"].SR}</p>
                      <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>S.R</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Batting Summaries */}
              {data2 && data2.length > 0 && data2.map((summary, index) => {
                const battingSummary = summary['Batting Career Summary2']; // Use bracket notation for keys with spaces
                return (
                  <div key={index}>
                    <h3 className='bg-slate-200 p-1 text-xl text-black font-medium flex items-center justify-center mt-5'>{battingSummary.Mode2}</h3>
                    <div className='flex justify-evenly mt-6'>
                      <div className='p-4 shadow-xl rounded-xl'>
                        <p className='font-bold text-2xl text-blue-500'>{battingSummary.Matches}</p>
                        <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Matches</p>
                      </div>
                      <div className='p-4 shadow-xl rounded-xl'>
                        <p className='font-bold text-2xl text-blue-500'>{battingSummary.Runs}</p>
                        <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Runs</p>
                      </div>
                      <div className='p-4 shadow-xl rounded-xl'>
                        <p className='font-bold text-2xl text-blue-500'>{battingSummary.Avg}</p>
                        <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Average</p>
                      </div>
                      <div className='p-4 shadow-xl rounded-xl'>
                        <p className='font-bold text-2xl text-blue-500'>{battingSummary.SR}</p>
                        <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>S.R</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {data3.map((summary, index) => (
                <div key={index}>
                  <h3 className='bg-slate-200 p-1 text-xl font-semibold flex text-black items-center justify-center mt-5'>{summary["Batting Career Summary3"].Mode3}</h3>
                  <div className='flex justify-evenly mt-6'>
                    <div className='p-4 shadow-xl rounded-xl'>
                      <p className='font-bold text-2xl text-blue-500'>{summary["Batting Career Summary3"].Matches}</p>
                      <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Matches</p>
                    </div>
                    <div className='p-4 shadow-xl rounded-xl'>
                      <p className='font-bold text-2xl text-blue-500'>{summary["Batting Career Summary3"].Runs}</p>
                      <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Runs</p>
                    </div>
                    <div className='p-4 shadow-xl rounded-xl'>
                      <p className='font-bold text-2xl text-blue-500'>{summary["Batting Career Summary3"].Avg}</p>
                      <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Average</p>
                    </div>
                    <div className='p-4 shadow-xl rounded-xl'>
                      <p className='font-bold text-2xl text-blue-500'>{summary["Batting Career Summary3"].SR}</p>
                      <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>S.R</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Bowling Career Summary */}
          {!showBatting && (
            <><div className='flex mb-4 '>
            <button 
              onClick={() => setShowBatting(true)} 
              className={`p-2 rounded ${showBatting ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              Batting
            </button>
            <button 
              onClick={() => setShowBatting(false)} 
              className={`ml-4 p-2 rounded ${!showBatting ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              Bowling
            </button>
          </div>

              <h3 className='font-semibold text-black text-xl'>Bowling Career Summary</h3>
              {data5.map((summary, index) => (
                <div key={index}>
                  <h4 className='bg-slate-200 p-1 text-xl text-black font-semibold flex items-center justify-center mt-5'>{summary["Bowling Career Summary1"].Mode5}</h4>
                  <div className='flex justify-evenly mt-6'>

                  <div className='p-4 shadow-xl rounded-xl'>
                  <p className='font-bold text-2xl text-blue-500'>{summary["Bowling Career Summary1"].Matches}</p>
                  <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Matches </p>
                  </div>

                  <div className='p-4 shadow-xl rounded-xl'>
                  <p className='font-bold text-2xl text-blue-500'>{summary["Bowling Career Summary1"].Wickets}</p>
                  <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Wickets </p>
                  </div>

                  <div className='p-4 shadow-xl rounded-xl'>
                  <p className='font-bold text-2xl text-blue-500'>{summary["Bowling Career Summary1"].Econ}</p>
                  <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Economy </p>
                  </div>

                  </div>
                </div>
              ))}

              {/* Additional Bowling Summaries */}
              {data6.map((summary, index) => (
                <div key={index}>
                  <h4 className='bg-slate-200 text-black p-1 text-xl font-semibold flex items-center justify-center mt-5'>{summary["Bowling Career Summary2"].Mode6}</h4>

                  <div className='flex justify-evenly mt-6'>

                  <div className='p-4 shadow-xl rounded-xl'>
                  <p className='font-bold text-2xl text-blue-500'>{summary["Bowling Career Summary2"].Matches}</p>
                  <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Matches </p>
                  </div>

                  <div className='p-4 shadow-xl rounded-xl'>
                  <p className='font-bold text-2xl text-blue-500'>{summary["Bowling Career Summary2"].Wickets}</p>
                  <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Wickets </p>
                  </div>

                  <div className='p-4 shadow-xl rounded-xl'>
                  <p className='font-bold text-2xl text-blue-500'>{summary["Bowling Career Summary2"].Econ}</p>
                  <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Economy </p>
                  </div>
                  </div>
                </div>
              ))}

                {data7.map((summary, index) => (
                <div key={index}>
                  <h4 className='bg-slate-200 text-black p-1 text-xl font-semibold flex items-center justify-center mt-5'>{summary["Bowling Career Summary3"].Mode7}</h4>

                  <div className='flex justify-evenly mt-6'>

                  <div className='p-4 shadow-xl rounded-xl'>
                  <p className='font-bold text-2xl text-blue-500'>{summary["Bowling Career Summary3"].Matches}</p>
                  <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Matches </p>
                  </div>

                  <div className='p-4 shadow-xl rounded-xl'>
                  <p className='font-bold text-2xl text-blue-500'>{summary["Bowling Career Summary3"].Wickets}</p>
                  <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Wickets </p>
                  </div>

                  <div className='p-4 shadow-xl rounded-xl'>
                  <p className='font-bold text-2xl text-blue-500'>{summary["Bowling Career Summary3"].Econ}</p>
                  <p className='text-xl text-gray-400 font-normal flex items-center justify-center'>Economy </p>
                  </div>
                  </div>
                </div>
              ))}

            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='bg-white'>
      <Nav />
      <div className='ml-8 flex flex-col items-end'>
        <input 
          type='text' 
          placeholder='Enter Player Name' 
          value={playerName} 
          onChange={(e) => setPlayerName(e.target.value)} 
          className='border border-gray-300 bg-white rounded p-2 m-4 outline-none text-black'style={{width:'250px',marginRight:'190px'}}
        />
        <button 
          onClick={fetchApi} 
          className='bg-blue-500 text-white rounded px-4 py-2' style={{width:'170px',marginRight:'10px',marginTop:'-57px'}}>
          Get Player Stats
        </button>
        <div className='' style={{marginRight:'1260px',marginTop:'-58px'}}>
        {error && <p className='text-red-500'>{error}</p>}
        {renderPlayerStats()}
        </div>
      </div>
    </div>
  );
};

export default CricketStats;

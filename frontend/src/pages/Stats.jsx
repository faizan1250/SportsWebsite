"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import axios from "axios";

const Stats = () => {
  const match = {
    teamA: {
      name: "Team A",
      score: "210/5",
      overs: "18.3",
    },
    teamB: {
      name: "Team B",
      score: "180/7",
      overs: "20",
    },
    status: "In Progress",
    result: "",
  };

  return (
    <>
      <div className="bg-white text-black">
        <div>
          <Nav />
        </div>

        <div className="flex mt-16">
          <Link
            to={"/Cricketscore"}
            className="ml-20 cursor-pointer hover:text-blue-500"
          >
            <div
              style={{ height: "400px", width: "300px" }}
              className="flex flex-col justify-between items-center shadow-2xl"
            >
              <img
                src="https://i.pinimg.com/236x/a4/53/a7/a453a7736f86b3d91de093b35aa7a5b4.jpg"
                alt=""
                style={{ height: "350px", width: "300px" }}
                srcset=""
              />
              <h1 className="text-2xl font-bold mb-3">CRICKET SCORE</h1>
            </div>
          </Link>

          <Link
            to={"/Footballscore"}
            className="ml-20 cursor-pointer hover:text-blue-500"
          >
            <div
              style={{ height: "400px", width: "300px" }}
              className="flex flex-col justify-between items-center shadow-2xl"
            >
              <img
                src="https://i.pinimg.com/236x/6b/b2/d8/6bb2d8d2440adc22bad7b6abf704d268.jpg"
                alt=""
                style={{ height: "350px", width: "300px" }}
                srcset=""
              />
              <h1 className="text-2xl font-bold mb-3">FOOTBALL SCORE</h1>
            </div>
          </Link>

          <Link
            to={"/NbaScores"}
            className="ml-20 cursor-pointer hover:text-blue-500"
          >
            <div
              style={{ height: "400px", width: "300px" }}
              className="relative flex flex-col justify-between items-center shadow-2xl"
            >
              <img
                src="https://i.pinimg.com/236x/9b/ad/45/9bad456c8dde3fcc1a13f7e8d639b196.jpg"
                alt="NBA Score"
                style={{ height: "350px", width: "300px", opacity: 0.7 }} // Reduced opacity
                srcSet=""
              />
              {/* Overlay text on the image */}
              {/* <div className="absolute top-0 left-0 flex items-center justify-center h-full w-full text-white font-bold text-3xl" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
      Under Progress
    </div> */}
              <h1 className="text-2xl font-bold mb-3 z-10 text-black">
                NBA SCORE
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Stats;

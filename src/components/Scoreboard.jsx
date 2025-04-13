import React, { useState } from "react";

export default function Scoreboard() {
  // Fake data state 
  const [scoreData, setScoreData] = useState({
    Sex: "MALE",
    matchType: "INDIVIDUAL",
    player1: { hit: "M K", score: 2, color: "white" },
    player2: { hit: "D", score: 1, color: "red" },
    club1: "RMIT Shinsei Kendo Club",
    club2: "RMIT Shinsei Kendo Club",
  });

  // Color mapping
  const colorMap = {
    red: "bg-red-600",
    white: "bg-white",
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-white p-4 bg-black">
      {/* Match Type */}
      <p className="text-sm">Latest update</p>
      <h1 className="text-lg font-bold">{scoreData.Sex}</h1>
      <h2 className="text-lg font-bold">{scoreData.matchType}</h2>

      {/* Scoreboard */}
      <div className="flex items-center gap-8 my-4 text-4xl font-bold">
        {/* Player 1 */}
        <div className="flex flex-col items-center">
          <div className={`w-6 h-6 rounded-full ${colorMap[scoreData.player1.color]}`}></div>
          <p className="mt-3">{scoreData.player1.score}</p>
          <p className="text-sm">{scoreData.player1.hit}</p>
        </div>

        {/* Score separator */}
        <p>-</p>

        {/* Player 2 */}
        <div className="flex flex-col items-center">
          <div className={`w-6 h-6 rounded-full ${colorMap[scoreData.player2.color]}`}></div>
          <p className="mt-3">{scoreData.player2.score}</p>
          <p className="text-sm">{scoreData.player2.hit}</p>
        </div>
      </div>

      {/* Club Names */}
      <p className="text-sm">
        {scoreData.club1} <span className="mx-2">VS</span> {scoreData.club2}
      </p>
    </div>
  );
}

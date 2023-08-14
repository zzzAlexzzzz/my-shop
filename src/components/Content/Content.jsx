import React from "react";
import "./Content.scss";
import GameCard from "./GameCard";
import Games from "../assets/Game.json";

function Content() {
  return (
    <div className="content">
      <div className="container">
        {Games.map((obj) => (
          <GameCard {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Content;

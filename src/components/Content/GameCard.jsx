import React from "react";

function GameCard({ price, description, title, img }) {
  return (
    <div>
      <div className="game-card">
        <img width="38" src={img} alt="caliber" />
        <div>
          <h2>{title}</h2>
          <div>
            <p>{description}</p>
          </div>
          <div>
            <a href="/" className="button11">
              {price} р
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;

import React from "react";
import SingleGame from "./SingleGame";

let Games = (params) => {
  return (
    <>
      <h1 style={{ color: "white" }}>Select game</h1>
      <div className="container">
        {params.games.map((game, index) => {
          return (
            <SingleGame
              options={game}
              index={index}
              key={index}
              cover={game.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Games;

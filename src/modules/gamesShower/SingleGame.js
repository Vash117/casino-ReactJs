import React from "react";
import { Link } from "react-router-dom";

const SingleGame = (params) => {
  return (
    <div
      className="game-container"
      style={{ backgroundImage: `url(${params.cover})` }}
      key={params.index}
    >
      <Link
        className="game-link"
        to={`/slots/${params.options.gameName.replaceAll(" ", "-")}`}
      >
        {params.options.gameName}
      </Link>
      <p>Total lines: {params.options.lines}</p>
      <p>Free games: {params.options.bonus ? "Yes" : "No"}</p>
    </div>
  );
};

export default SingleGame;

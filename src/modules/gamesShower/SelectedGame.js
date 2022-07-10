import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SlotScreen from "../slots/SlotScreen";
import Controls from "../slots/Controls";
const SelectedGame = (params) => {
  let location = useLocation();
  const gameName = location.pathname.split("/")[2].replaceAll("-", " ");
  let curentGame = params.games.find((item) => item.gameName === gameName);
  let [isSpining, setIsSpining] = useState(false);
  return (
    <div className="screen-container">
      <h1>{gameName}</h1>
      <SlotScreen
        game={curentGame}
        isSpining={isSpining}
        playBonus={params.playBonus}
      />
      <Controls
        game={curentGame}
        betPlus={params.betPlus}
        betMinus={params.betMinus}
        betState={params.betState}
        setMistery={params.setMistery}
        setSpining={setIsSpining}
        playBonus={params.playBonus}
        bonusTriger={params.bonusTriger}
        mistery={params.mistery}
      />
    </div>
  );
};

export default SelectedGame;

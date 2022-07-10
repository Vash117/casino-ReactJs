import React from "react";
import Reel from "./Reel";
import HiddenScreen from "./HiddenScree";
let SlotScreen = (props) => {
  return (
    <div className="slot-screen" style={{ backgroundColor: props.game.color }}>
      {props.playBonus ? (
        <h1 style={{ position: "absolute" }} className="free-games-start">
          Free games
        </h1>
      ) : (
        ""
      )}
      <HiddenScreen class="hidden up" />
      <Reel
        turn={"0.3s"}
        symbols={props.game.symbols}
        wild={props.game.wildIndex}
        singleWild={props.game.wildSingle}
        isSpining={props.isSpining}
      />
      <Reel
        turn={"0.4s"}
        symbols={props.game.symbols}
        wild={props.game.wildIndex}
        singleWild={props.game.wildSingle}
        isSpining={props.isSpining}
      />
      <Reel
        turn={"0.6s"}
        symbols={props.game.symbols}
        wild={props.game.wildIndex}
        singleWild={props.game.wildSingle}
        isSpining={props.isSpining}
      />
      <Reel
        turn={"0.6s"}
        symbols={props.game.symbols}
        wild={props.game.wildIndex}
        singleWild={props.game.wildSingle}
        isSpining={props.isSpining}
      />
      <Reel
        turn={"1.1s"}
        symbols={props.game.symbols}
        wild={props.game.wildIndex}
        singleWild={props.game.wildSingle}
        isSpining={props.isSpining}
      />
      <HiddenScreen class="hidden down" />
    </div>
  );
};

export default SlotScreen;

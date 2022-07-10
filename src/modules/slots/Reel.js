import React, { useState } from "react";

const Reel = (props) => {
  let arr = [];
  let random = () => {
    let random = Math.floor(
      Math.random() * (props.symbols.length - 1 - 0 + 1) + 0
    );
    random = checkRandom(random);
    arr.push(random);
    if (arr.length > 3) {
      arr = [];
    }
    return random;
  };
  function checkRandom(num) {
    if (num === props.symbols.length - 1 && arr.includes(num)) {
      num = random();
    }
    if (props.singleWild) {
      if (num === props.wild && arr.includes(num)) {
        num = random();
      }
    }
    return num;
  }
  return (
    <div className="reel">
      <img
        src={props.symbols[random()]}
        style={
          props.isSpining
            ? {
                animationIterationCount: "infinite",
              }
            : { animationIterationCount: 0 }
        }
        alt="symbol"
        className="symbol spins top"
      />
      <img
        src={props.symbols[random()]}
        style={
          props.isSpining
            ? {
                animationIterationCount: "infinite",
              }
            : { animationIterationCount: 0 }
        }
        alt="symbol"
        className="symbol spins middle"
      />
      <img
        src={props.symbols[random()]}
        style={
          props.isSpining
            ? {
                animationIterationCount: "infinite",
              }
            : { animationIterationCount: 0 }
        }
        alt="symbol"
        className="symbol spins bottom"
      />
      <img
        src={props.symbols[random()]}
        style={
          props.isSpining
            ? {
                animationIterationCount: "infinite",
              }
            : { animationIterationCount: 0 }
        }
        alt="symbol"
        className="symbol spins filler"
      />
    </div>
  );
};

export default Reel;

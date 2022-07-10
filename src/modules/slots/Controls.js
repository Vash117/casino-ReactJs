import React from "react";
import { useState, useEffect } from "react";

//set free spin bonus with 15 spins *3
//set free spin   bonus with expanding symbol
const Controls = (params) => {
  let [bet, setBet] = useState(1);
  let [credit, setCredit] = useState(10000);
  let [totalBet, setTotalBet] = useState(params.game.lines * bet);
  let [totalWin, setTotalWin] = useState(0);
  const [scaterS, setSacater] = useState(
    params.game.symbols[params.game.symbols.length - 1]
  );
  const [wild, setWild] = useState(params.game.wild ? params.game.wild : "");
  let [freeGames, setFreeGames] = useState(0);
  function handleBetPlus() {
    setBet((bet = bet + 1));
  }

  function handleBetMinus() {
    if (bet === 1) return;
    setBet((bet = bet - 1));
  }
  useEffect(() => {
    setTotalBet((totalBet = bet * params.game.lines));
  }, [bet]);

  function start() {
    if (credit - totalBet < 0) return;
    let symbolsArr = Array.from(document.querySelectorAll("img"));
    removeBorder(symbolsArr);
    if (!params.playBonus) {
      setCredit((credit = credit - totalBet));
    }
    params.setMistery(totalBet);
    setTimeout(spin, 100);
    params.setSpining((prev) => (prev = true));
    if (!params.playBonus) {
      setTotalWin((totalWin = 0));
    } else if (freeGames > 0) {
      setFreeGames((prev) => (prev = prev - 1));
    } else {
      params.bonusTriger((prev) => (prev = false));
    }
  }
  function spin() {
    setTimeout(() => {
      params.setSpining((prev) => (prev = false));
    }, 2000);
    setTimeout(getLines, 2500);
  }

  function getWins(arr) {
    let isScatter = arr.find(
      (item) => item.dataset.id === scaterS.split("/")[3].split(".")[0]
    );
    if (isScatter) {
      let index = arr.indexOf(isScatter);
      if (index === 0 || index === 1) {
        arr.length = 0;
        return 0;
      } else {
        arr = arr.splice(0, index);
      }
    }
    if (arr.length <= 1) return 0;

    if (arr.length === 2 && arr.every((item) => item.dataset.id === wild)) {
      return bet * 2;
    }
    if (
      arr.every(
        (item) =>
          item.dataset.id ===
            arr[arr.indexOf(arr.find((symb) => symb.dataset.id !== wild))]
              .dataset.id || item.dataset.id === wild
      ) &&
      arr.length === 5
    ) {
      setBorder(arr);
      // set 5 combo wins fo different games
      if (
        arr.every(
          (item) => item.dataset.id === wild || item.dataset.id === "seven"
        )
      ) {
        return bet * params.game.maxMultyplayer;
      } else if (
        params.game.majorSymbols.includes(
          arr.find((symb) => symb.dataset.id !== wild).dataset.id
        )
      ) {
        let win =
          bet * params.game.majorSymbols[params.game.majorSymbols.length - 1];
        if (
          arr.some((item) => item.dataset.id === wild) &&
          params.game.wildMultyplay
        ) {
          return win * 2;
        } else {
          return win;
        }
      } else if (
        params.game.middleSymbols.includes(
          arr.find((symb) => symb.dataset.id !== wild).dataset.id
        )
      ) {
        let win =
          bet * params.game.middleSymbols[params.game.middleSymbols.length - 1];
        if (
          arr.some((item) => item.dataset.id === wild) &&
          params.game.wildMultyplay
        ) {
          return win * 2;
        } else {
          return win;
        }
      } else if (
        params.game.minorSymbols.includes(
          arr.find((symb) => symb.dataset.id !== wild).dataset.id
        )
      ) {
        let win =
          bet * params.game.minorSymbols[params.game.minorSymbols.length - 1];
        if (
          arr.some((item) => item.dataset.id === wild) &&
          params.game.wildMultyplay
        ) {
          return win * 2;
        } else {
          return win;
        }
      }
    } else if (
      arr
        .slice(0, 4)
        .every(
          (item) =>
            item.dataset.id ===
              arr[arr.indexOf(arr.find((symb) => symb.dataset.id !== wild))]
                .dataset.id || item.dataset.id === wild
        ) &&
      arr.length >= 4
    ) {
      setBorder(arr.slice(0, 4));
      // set 4 combo wins fo different games
      if (
        arr
          .slice(0, 4)
          .every(
            (item) => item.dataset.id === wild || item.dataset.id === "seven"
          )
      ) {
        return (bet * params.game.maxMultyplayer) / 5;
      } else if (
        params.game.majorSymbols.includes(
          arr.find((symb) => symb.dataset.id !== wild).dataset.id
        )
      ) {
        let win =
          bet *
          params.game.majorSymbols[params.game.majorSymbols.length - 1] *
          0.4;
        if (
          arr.slice(0, 4).some((item) => item.dataset.id === wild) &&
          params.game.wildMultyplay
        ) {
          return win * 2;
        } else {
          return win;
        }
      } else if (
        params.game.middleSymbols.includes(
          arr.find((symb) => symb.dataset.id !== wild).dataset.id
        )
      ) {
        let win =
          bet *
          params.game.middleSymbols[params.game.middleSymbols.length - 1] *
          0.2;
        if (
          arr.slice(0, 4).some((item) => item.dataset.id === wild) &&
          params.game.wildMultyplay
        ) {
          return win * 2;
        } else {
          return win;
        }
      } else if (
        params.game.minorSymbols.includes(
          arr.find((symb) => symb.dataset.id !== wild).dataset.id
        )
      ) {
        let win =
          bet *
          params.game.minorSymbols[params.game.minorSymbols.length - 1] *
          0.25;
        if (
          arr.slice(0, 4).some((item) => item.dataset.id === wild) &&
          params.game.wildMultyplay
        ) {
          return win * 2;
        } else {
          return win;
        }
      }
    } else if (
      arr
        .slice(0, 3)
        .every(
          (item) =>
            item.dataset.id ===
              arr[arr.indexOf(arr.find((symb) => symb.dataset.id !== wild))]
                .dataset.id || item.dataset.id === wild
        ) &&
      arr.length >= 3
    ) {
      setBorder(arr.slice(0, 3));
      // set 3 combo wins fo different games
      if (
        arr
          .slice(0, 3)
          .every(
            (item) => item.dataset.id === wild || item.dataset.id === "seven"
          )
      ) {
        return bet * (params.game.maxMultyplayer * 0.02);
      } else if (
        params.game.majorSymbols.includes(
          arr.find((symb) => symb.dataset.id !== wild).dataset.id
        )
      ) {
        let win =
          bet *
          params.game.majorSymbols[params.game.majorSymbols.length - 1] *
          0.1;
        if (
          arr.slice(0, 3).some((item) => item.dataset.id === wild) &&
          params.game.wildMultyplay
        ) {
          return win * 2;
        } else {
          return win;
        }
      } else if (
        params.game.middleSymbols.includes(
          arr.find((symb) => symb.dataset.id !== wild).dataset.id
        )
      ) {
        let win =
          bet *
          params.game.middleSymbols[params.game.middleSymbols.length - 1] *
          0.1;
        if (
          arr.slice(0, 3).some((item) => item.dataset.id === wild) &&
          params.game.wildMultyplay
        ) {
          return win * 2;
        } else {
          return win;
        }
      } else if (
        params.game.minorSymbols.includes(
          arr.find((symb) => symb.dataset.id !== wild).dataset.id
        )
      ) {
        let win =
          bet *
          params.game.minorSymbols[params.game.minorSymbols.length - 1] *
          0.1;
        if (
          arr.slice(0, 3).some((item) => item.dataset.id === wild) &&
          params.game.wildMultyplay
        ) {
          return win * 2;
        } else {
          return win;
        }
      }
    } else if (
      arr
        .slice(0, 2)
        .every(
          (item) => item.dataset.id === "cherry" || item.dataset.id === wild
        )
    ) {
      if (params.game.lines <= 5) {
        setBorder(arr.slice(0, 2));
        return totalBet;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  function setBorder(arr) {
    arr.forEach((item) => (item.style.border = "2px solid red"));
  }
  function removeBorder(arr) {
    arr.forEach((item) => (item.style.border = ""));
  }
  function getLines() {
    let symbolsArr = Array.from(document.querySelectorAll("img"));
    symbolsArr.forEach((img) => {
      let name = img.src.split("/")[5].split(".")[0];

      img.setAttribute("data-id", name === "" ? "king-card" : name);
    });
    let lineOne = getWins([
      symbolsArr[0],
      symbolsArr[4],
      symbolsArr[8],
      symbolsArr[12],
      symbolsArr[16],
    ]);
    let lineTwo = getWins([
      symbolsArr[1],
      symbolsArr[5],
      symbolsArr[9],
      symbolsArr[13],
      symbolsArr[17],
    ]);
    let lineThree = getWins([
      symbolsArr[2],
      symbolsArr[6],
      symbolsArr[10],
      symbolsArr[14],
      symbolsArr[18],
    ]);
    let lineTFour = getWins([
      symbolsArr[2],
      symbolsArr[5],
      symbolsArr[8],
      symbolsArr[13],
      symbolsArr[18],
    ]);
    let lineTFive = getWins([
      symbolsArr[0],
      symbolsArr[5],
      symbolsArr[10],
      symbolsArr[13],
      symbolsArr[16],
    ]);

    let win = lineOne + lineTwo + lineThree + lineTFour + lineTFive;

    //check for more lines
    if (params.game.lines >= 10) {
      let lineSix = getWins([
        symbolsArr[0],
        symbolsArr[4],
        symbolsArr[9],
        symbolsArr[14],
        symbolsArr[18],
      ]);
      let lineSeven = getWins([
        symbolsArr[2],
        symbolsArr[6],
        symbolsArr[9],
        symbolsArr[12],
        symbolsArr[16],
      ]);
      let lineEigth = getWins([
        symbolsArr[1],
        symbolsArr[6],
        symbolsArr[10],
        symbolsArr[14],
        symbolsArr[17],
      ]);
      let lineNine = getWins([
        symbolsArr[1],
        symbolsArr[4],
        symbolsArr[8],
        symbolsArr[12],
        symbolsArr[17],
      ]);
      let lineTen = getWins([
        symbolsArr[0],
        symbolsArr[5],
        symbolsArr[9],
        symbolsArr[13],
        symbolsArr[16],
      ]);
      let curentWin = lineSix + lineSeven + lineEigth + lineNine + lineTen;
      //check for scatter win

      if (curentWin) {
        win += curentWin;
      }
    }
    if (params.game.lines >= 15) {
      let line11 = getWins([
        symbolsArr[2],
        symbolsArr[5],
        symbolsArr[9],
        symbolsArr[13],
        symbolsArr[18],
      ]);
      let line12 = getWins([
        symbolsArr[1],
        symbolsArr[6],
        symbolsArr[9],
        symbolsArr[12],
        symbolsArr[17],
      ]);
      let line13 = getWins([
        symbolsArr[1],
        symbolsArr[4],
        symbolsArr[9],
        symbolsArr[14],
        symbolsArr[17],
      ]);
      let line14 = getWins([
        symbolsArr[0],
        symbolsArr[5],
        symbolsArr[8],
        symbolsArr[13],
        symbolsArr[16],
      ]);
      let line15 = getWins([
        symbolsArr[2],
        symbolsArr[5],
        symbolsArr[10],
        symbolsArr[13],
        symbolsArr[18],
      ]);
      let curentWin = line11 + line12 + line13 + line14 + line15;
      if (curentWin) {
        win += curentWin;
      }
    }
    if (params.game.lines >= 20) {
      let line16 = getWins([
        symbolsArr[1],
        symbolsArr[5],
        symbolsArr[10],
        symbolsArr[13],
        symbolsArr[17],
      ]);
      let line17 = getWins([
        symbolsArr[1],
        symbolsArr[5],
        symbolsArr[8],
        symbolsArr[13],
        symbolsArr[17],
      ]);
      let line18 = getWins([
        symbolsArr[0],
        symbolsArr[6],
        symbolsArr[8],
        symbolsArr[14],
        symbolsArr[16],
      ]);
      let line19 = getWins([
        symbolsArr[2],
        symbolsArr[4],
        symbolsArr[10],
        symbolsArr[12],
        symbolsArr[18],
      ]);
      let line20 = getWins([
        symbolsArr[1],
        symbolsArr[4],
        symbolsArr[10],
        symbolsArr[12],
        symbolsArr[17],
      ]);
      let curentWin = line16 + line17 + line18 + line19 + line20;
      if (curentWin) {
        win += params.playBonus ? curentWin * 3 : curentWin;
      }
    }
    let scaterWin = getScatterWin(symbolsArr);
    if (scaterWin) {
      win += scaterWin;
    }
    let misteryWin = getMisteryWin();
    if (misteryWin) {
      win += misteryWin;
    }
    if (win > 0) {
      if (params.playBonus) {
        setTotalWin((totalWin += win));
        setCredit((credit = credit + win));
        // setTimeout(start, 3500);
      } else {
        setCredit((credit = credit + win));
        setTotalWin((totalWin = win));
      }
    }
  }
  function getMisteryWin() {
    let curentWin = 0;
    if (params.mistery.misterys.iron > params.mistery.rngs.rngIron) {
      curentWin += 0;
      params.mistery.setnewRNG("iron");
    }
    if (params.mistery.misterys.bronze > params.mistery.rngs.rngBronze) {
      curentWin += 0;
      params.mistery.setnewRNG("bronze");
    }
    if (params.mistery.misterys.silver > params.mistery.rngs.rngSilver) {
      curentWin += 0;
      params.mistery.setnewRNG("silver");
    }
    if (params.mistery.misterys.gold > params.mistery.rngs.rngGold) {
      curentWin += 0;
      params.mistery.setnewRNG("gold");
    }
    return curentWin;
  }
  function getScatterWin(arr) {
    let forbidenIndex = [3, 7, 11, 15, 19];
    let scatters;
    if (params.game.gameName !== "King's Gold") {
      scatters = arr.filter(
        (item, index) =>
          item.dataset.id === scaterS.split("/")[3].split(".")[0] &&
          !forbidenIndex.includes(index)
      );
    } else {
      scatters = arr.filter(
        (item, index) =>
          item.dataset.id === wild && !forbidenIndex.includes(index)
      );
    }
    if (scatters.length === 3) {
      scatters.forEach((item) => (item.style.border = "2px solid green"));
      if (params.game.bonus) {
        params.bonusTriger((prev) => (prev = true));
        setFreeGames((prev) => (prev = prev + params.game.freeGames));
      }
      return totalBet * 2;
    } else if (scatters.length === 4) {
      scatters.forEach((item) => (item.style.border = "2px solid green"));
      if (params.game.bonus) {
        params.bonusTriger((prev) => (prev = true));
        setFreeGames((prev) => (prev = prev + params.game.freeGames));
      }
      return totalBet * 20;
    } else if (scatters.length === 5) {
      scatters.forEach((item) => (item.style.border = "2px solid green"));
      if (params.game.bonus) {
        params.bonusTriger((prev) => (prev = true));
        setFreeGames((prev) => (prev = prev + params.game.freeGames));
      }
      return totalBet * 500;
    }
  }

  return (
    <div className="controls">
      <div>
        <p>Fixed {params.game.lines} lines</p>
      </div>
      <div>
        <p>Credit:{credit}</p>
      </div>
      <div>
        <button onClick={handleBetPlus}>Bet +</button>
        <p>{bet}</p>
        <button onClick={handleBetMinus}>Bet -</button>
      </div>
      <div>
        <p id="total-bet">Total bet: {totalBet}</p>
      </div>
      <div>
        <button onClick={start} id="start">
          Start
        </button>
      </div>
      <br />
      {totalWin ? <p className="curent-win">Win: {totalWin}</p> : ""}
      {freeGames > 0 ? <p>Free spins: {freeGames}</p> : ""}
    </div>
  );
};

export default Controls;

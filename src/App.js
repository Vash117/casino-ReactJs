import "./App.css";
//tasks left :
//1.Build home screen ;
//2.Build About page;
//3.Build Log in and Sing up pages;
//4.Complate Slots page front end;
//5.Make slot games more beautiful;
//6.Add mistery won screen;
//7.Add win animations;
//8.Add sound effects;

//BUGS:
//1.Druing free spins misteryes goes up
import Nav from "./modules//navBar/Nav.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MisteryNav from "./modules/navBar/MisteryNav";
import Games from "./modules/gamesShower/Game";
import SelectedGame from "./modules/gamesShower/SelectedGame";
import About from "./modules/About/About.js";
import Header from "./modules/About/Header";
import Home from "./modules/Home/Home.js";
import LogIn from "./modules/LogIn/LogIn";
// dazling symbols
import cherry from "./modules/slots/images/dazling/cherry.svg";
import lemon from "./modules/slots/images/dazling/lemon.svg";
import watermelon from "./modules/slots/images/dazling/watermelon.svg";
import grape from "./modules/slots/images/dazling/grape.svg";
import orange from "./modules/slots/images/dazling/orange.svg";
import plum from "./modules/slots/images/dazling/plum.svg";
import seven from "./modules/slots/images/dazling/seven.svg";
import scatter from "./modules/slots/images/dazling/scatter.png";
// egypt game symbols:
import cat from "./modules/slots/images/Ra/cat.png";
import piramydes from "./modules/slots/images/Ra/piramydes.svg";
import scarab from "./modules/slots/images/Ra/scarab.svg";
import anubis from "./modules/slots/images/Ra/anubis.png";
import golden from "./modules/slots/images/Ra/golden.png";
import godess from "./modules/slots/images/Ra/godess.png";
import pharaon from "./modules/slots/images/Ra/pharaon.png";
import scroll from "./modules/slots/images/Ra/scroll.png";
import male from "./modules/slots/images/Ra/male.png";
import female from "./modules/slots/images/Ra/female.png";
import tresure from "./modules/slots/images/Ra/tresure.png";
import sphinx from "./modules/slots/images/Ra/sphinx.png";
import eye from "./modules/slots/images/Ra/eye.svg";
// versai gold symbols:
import ten from "./modules/slots/images/versai/10.png";
import ace from "./modules/slots/images/versai/ace.png";
import chinese from "./modules/slots/images/versai/chinese.png";
import jack from "./modules/slots/images/versai/jack.png";
import kCard from "./modules/slots/images/versai/k-card.png";
import king from "./modules/slots/images/versai/king.png";
import priest from "./modules/slots/images/versai/priest.png";
import qCard from "./modules/slots/images/versai/q-card.png";
import queen from "./modules/slots/images/versai/queen.png";
import sun from "./modules/slots/images/versai/sun.png";
//slot overs :
import dazling from "./modules/slots/images/slot covers/slot-cover.webp";
import superTwenty from "./modules/slots/images/slot covers/slot-cover-2.webp";
import raCover from "./modules/slots/images/slot covers/slov-cover-3.jpg";
import versaceGoldCover from "./modules/slots/images/slot covers/slot-cover-4.webp";
import { useState } from "react";

function App() {
  //set states
  let [user, setUser] = useState("");
  let [gold, setGold] = useState(2000);
  let [silver, setSilver] = useState(1000);
  let [bronze, setBronze] = useState(500);
  let [iron, setIron] = useState(100);
  let [isBonusTrigered, setIsBonusTrigerd] = useState(false);
  let [rngIron, setRngIron] = useState(setRNGs(100, 200));
  let [rngBronze, setRngBronze] = useState(setRNGs(500, 750));
  let [rngSilver, setRngSilver] = useState(setRNGs(1000, 1500));
  let [rngGold, setRngGold] = useState(setRNGs(2000, 3000));

  function setRNGs(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function setMistery(bet) {
    setIron((iron = iron + 0.0002 * bet));
    setBronze((bronze = bronze + 0.0003 * bet));
    setSilver((silver = silver + 0.0004 * bet));
    setGold((gold = gold + 0.0005 * bet));
  }
  //mistery win:

  //ser rngs after mistery drop:
  function setnewRNG(mistery) {
    if (mistery === "iron") {
      setIron(90);
      setRngIron(setRNGs(100, 200));
    }
    if (mistery === "bronze") {
      setBronze(480);
      setRngBronze(setRNGs(500, 750));
    }
    if (mistery === "silver") {
      setSilver(setRNGs(500, 750));
      setRngSilver(setRNGs(1000, 1500));
    }
    if (mistery === "gold") {
      setGold(1950);
      setRngGold(setRNGs(2000, 3000));
    }
  }
  //game options
  let gamesArr = [
    {
      gameName: "5 Fruits Hot",
      lines: 5,
      bonus: false,
      wild: false,
      wildSingle: true,
      wildIndex: 6,
      color: "darkred",
      symbols: [cherry, lemon, watermelon, grape, orange, plum, seven, scatter],
      maxMultyplayer: 5000,
      majorSymbols: ["grape", "watermelon", 500],
      middleSymbols: [],
      minorSymbols: ["cherry", "lemon", "orange", "plum", 200],
      wildMultyplay: false,
      image: dazling,
    },
    {
      gameName: "20 Fruits Hot",
      lines: 20,
      bonus: false,
      wild: "seven",
      wildSingle: false,
      color: "darkgreen",
      symbols: [cherry, lemon, watermelon, grape, orange, plum, seven, scatter],
      maxMultyplayer: 1000,
      majorSymbols: ["grape", 200],
      middleSymbols: ["watermelon", "plum", 150],
      minorSymbols: ["cherry", "lemon", "orange", 100],
      wildMultyplay: false,
      image: superTwenty,
    },
    {
      gameName: "Princess of Egypt",
      lines: 15,
      bonus: true,
      wild: "golden",
      wildIndex: 5,
      wildSingle: true,
      color: "goldenrod",
      symbols: [
        cat,
        piramydes,
        scarab,
        sphinx,
        scroll,
        eye,
        godess,
        tresure,
        male,
        female,
        anubis,
        golden,
        pharaon,
      ],
      maxMultyplayer: 1000,
      majorSymbols: ["eye", "godess", 750],
      middleSymbols: ["cat", "piramydes", "scarab", "nbXXXvvba7", 400],
      minorSymbols: [
        "dROOzqdjp3RmU47paXOONIPRnRUWgsWMgRBQmqWkARCgXBJiAm5mex9s9nL6YdAyJLsZnfZJDDkP7NfznOe5",
        "fu1f3Vrd9k2QrQmZoGGKGh7GOZTJommowj23wWKOHicFMDIUelGoQkxrLGBNi7IOIhIQ2aU",
        "vX39339un",
        "Eudg50WdQO0GGzclCXZsbFCNDYkXOyAJY0CiEi9ppV20D+3j2++b6R+rXfbxrfZb7TotTX7n6LA7c2fm3rt37r1zZwD+hD9ukFIn+K8D++8PBoa2s3h0BggESgjJNytnHDFFY0pc9QqC",
        "anubis",
        100,
      ],
      wildMultyplay: true,
      freeGames: 15,
      image: raCover,
    },

    {
      gameName: "King's Gold",
      lines: 10,
      bonus: true,
      wild: "ohkekSKL+HZpgdGMwJBDjAiIxBohNBCm2Y59YSEulte",
      wildIndex: 9,
      color: "#8a1981",
      wildSingle: true,
      symbols: [
        ten,
        ace,
        chinese,
        jack,
        kCard,
        king,
        priest,
        qCard,
        queen,
        sun,
      ],
      maxMultyplayer: 5000,
      majorSymbols: ["RpJ1jTzSfDI", 5000],
      middleSymbols: [
        "jTBZnMm+3bt3tmQ6j2taut3yxNxmN+XVOsACCIFsXl9fYFZ849s2jNwzs2b97aOlk2TQoBH7zzzqLToYO7rlxsmi+JFnj9xYbDauN4jucAwDSpmVQUc6C",
        "pXuqlN1zi91T52qvsA1rnGNa",
        "79vs99",
        1000,
      ],
      minorSymbols: [
        "Ldf0mS93+",
        "king-card",
        "jOKEJa5KFvYe3qbSd1jildihFMJruE2xaq61CE5vWSYyKqY0aR6CBhCCaEELrUqcq00Q2AUJIA8LYkLqJSVvbARNN7ZTGbkdKX1aJdkxau9LQ0KSOz38fWk3BvtfnXDeMfdgj+cs5z3n+zyMf3",
        "psgXVJhqfbhVeeXyvI35+tyJkzGYrkOgxWhsuZ6ZWiqsUPqVr7d2CWQtaV+Jj+tZZ1gZc07IDXjwO",
        200,
      ],
      wildMultyplay: false,
      freeGames: 10,
      image: versaceGoldCover,
    },
  ];
  //add functionality

  return (
    <Router>
      <div>
        <Nav user={user} setUserIn={setUser} />
        <MisteryNav misterys={{ gold, silver, bronze, iron }} />
      </div>

      <div className="games-shower">
        <Routes>
          <Route path="/slots" element={<Games games={gamesArr} />} />
          <Route
            path="/slots/:gameName"
            element={
              <SelectedGame
                games={gamesArr}
                setMistery={setMistery}
                bonusTriger={setIsBonusTrigerd}
                playBonus={isBonusTrigered}
                mistery={{
                  rngs: { rngIron, rngBronze, rngSilver, rngGold },
                  misterys: { iron, bronze, silver, gold },
                  setnewRNG,
                }}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="log-in" element={<LogIn setUserIn={setUser} />} />
          <Route path="sing-up" element={<LogIn setUserIn={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

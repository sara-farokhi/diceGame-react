import "./App.css";
import React from "react";
import Playground from "./components/Playground";
import States from "./context/States";
import Buttons from "./components/Buttons";

const App = () => {
  return (
    <States>
      <div className="parent">
        <Playground
          player="Player 1"
          playerNum="player-0-name"
          playerSore="player-0-score"
          playerSum="player-0-sum"
        />
        <Playground
          player="Player 2"
          playerNum="player-1-name"
          playerSore="player-1-score"
          playerSum="player-1-sum"
        />

        <Buttons />
      </div>
    </States>
  );
};

export default App;

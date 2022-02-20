import { useContext } from "react";
import Context from "../context/Context";
import Buttons from "./Buttons";

const Playground = () => {
  const {
    player1Active,
    player2Active,
    currentSum,
    player1Score,
    player2Score,
    resetGame,
  } = useContext(Context);

  if (player2Score > 10 || player1Score > 10) {
    return (
      <>
        <div className="parent">
          <div className={`side ${player1Score > 10 && "winner"} `}>
            <div className="player-1-name">
              <span>player-1</span>
            </div>
            {player1Score > 10 && (
              <h2 style={{ color: "coral" }}>
                {" "}
                {`${player1Score} > 10 `} <br />
                player1 Is Won
              </h2>
            )}

            <div className="player-1-sum">{player1Active ? currentSum : 0}</div>
          </div>
          <div className={`side ${player2Score > 10 && "winner"}`}>
            <div className="player-2-name">
              <span>player-2</span>
            </div>
            {player2Score > 10 && (
              <h2 style={{ color: "coral" }}>
                {`${player2Score} > 10 `} <br />
                player2 Is Won
              </h2>
            )}
            <div className="player-2-sum">{player2Active ? currentSum : 0}</div>
          </div>
          <button className="new" onClick={() => resetGame()}>
            new game
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="parent">
        <div
          className={`side ${player1Active && "active"} ${
            player1Score > 10 && "winner"
          } `}
        >
          <div className="player-1-name">
            <span>player-1</span>
          </div>
          <div className="player-1-score">{player1Score}</div>
          {player1Score > 10 && (
            <h2 style={{ color: "coral" }}>player1 Is Won</h2>
          )}

          <div className="player-1-sum">{player1Active ? currentSum : 0}</div>
        </div>
        <div
          className={`side ${player2Active && "active"} ${
            player2Score > 10 && "winner"
          }`}
        >
          <div className="player-2-name">
            <span>player-2</span>
          </div>
          <div className="player-2-score">{player2Score}</div>
          {player2Score > 10 && (
            <h2 style={{ color: "coral" }}>player2 Is Won</h2>
          )}
          <div className="player-2-sum">{player2Active ? currentSum : 0}</div>
        </div>
        <Buttons />
      </div>
    </>
  );
};

export default Playground;

import { useContext } from "react";
import Context from "../context/Context";

const Buttons = () => {
  let {
    roleDice,
    dice,
    addCurrentSum,
    changePlayers,
    resetCurrentSum,
    // resetCurrent
    player1Active,
    player2Active,
    addPlayer1Score,
    addPlayer2Score,
    currentSum,
  } = useContext(Context);
  console.log(currentSum);

  const roleDiceHandler = () => {
    roleDice();
    addCurrentSum();
    // console.log(currentSum + dice);
  };

  const holdHandler = () => {
    if (player1Active) {
      addPlayer1Score();
      resetCurrentSum();
      changePlayers();
    }
    if (player2Active) {
      addPlayer2Score();
      resetCurrentSum();
      changePlayers();
    }
  };

  return (
    <>
      <button className="new">new game</button>
      <button className="role" onClick={roleDiceHandler}>
        role dice
      </button>
      <button className="hold" onClick={holdHandler}>
        hold
      </button>
      {dice !== null && (
        <img
          className="img-dice"
          src={`images/dice-${dice}.png`}
          alt="dice"
        ></img>
      )}
    </>
  );
};

export default Buttons;

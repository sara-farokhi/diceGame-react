import { useReducer } from "react";
import Context from "./Context";
import reducer from "./reducer";
import {
  ROLE_DICE,
  CHANGE_PLAYERS,
  CURRENT_SUM,
  RESET_CURRENTSUM,
  PLAYERI_SCORE,
  PLAYERII_SCORE,
} from "../type";

const States = ({ children }) => {
  const initialState = {
    dice: null,
    player1Active: true,
    player2Active: false,
    currentSum: 0,
    player1Score: 0,
    player2Score: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // ACTIONS

  //     role dice

  const roleDice = () => {
    const dice = Math.ceil(Math.random() * 6);
    dispatch({ type: ROLE_DICE, payload: dice });
    console.log();
  };

  //    change player1

  const changePlayers = () => {
    dispatch({ type: CHANGE_PLAYERS });
  };

  const current = state.currentSum + state.dice;

  //    add current sum

  const addCurrentSum = () => {
    dispatch({ type: CURRENT_SUM, payload: current });
  };

  //      reset current sum

  const resetCurrentSum = () => {
    dispatch({ type: RESET_CURRENTSUM });
  };
  //      player1 score

  const addPlayer1Score = () => {
    dispatch({ type: PLAYERI_SCORE });
  };

  //      player2 score

  const addPlayer2Score = () => {
    dispatch({ type: PLAYERII_SCORE });
  };
  return (
    <Context.Provider
      value={{
        dice: state.dice,
        player1Active: state.player1Active,
        player2Active: state.player2Active,
        currentSum: state.currentSum,
        player1Score: state.player1Score,
        player2Score: state.player2Score,
        roleDice,
        changePlayers,
        addCurrentSum,
        resetCurrentSum,
        addPlayer1Score,
        addPlayer2Score,
      }}
    >
      {/* hi */}
      {children}
    </Context.Provider>
  );
};

export default States;

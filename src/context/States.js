import { useReducer } from "react";
import Context from "./Context";
import reducer from "./reducer";
import { ROLE_DICE, CHANGE_PLAYERS, CURRENT_SUM } from "../type";

const States = ({ children }) => {
  const initialState = {
    dice: null,
    player1Active: true,
    player2Active: false,
    currentSum: 0,
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

  const addCurrentSum = () => {
    dispatch({ type: CURRENT_SUM, payload: current });
  };

  return (
    <Context.Provider
      value={{
        dice: state.dice,
        player1Active: state.player1Active,
        player2Active: state.player2Active,
        currentSum: state.currentSum,
        roleDice,
        changePlayers,
        addCurrentSum,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default States;

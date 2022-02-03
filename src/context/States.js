import { useReducer } from "react";
import Context from "./Context";
import reducer from "./reducer";
import { ROLE_DICE, CHANGE_PLAYERS } from "../type";

const States = ({ children }) => {
  const initialState = {
    dice: null,
    player1Active: true,
    player2Active: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // ACTIONS

  //     role dice

  const roleDice = () => {
    const dice = Math.ceil(Math.random() * 6);
    dispatch({ type: ROLE_DICE, payload: dice });
  };

  //    change player1

  const changePlayers = () => {
    dispatch({ type: CHANGE_PLAYERS });
  };

  return (
    <Context.Provider
      value={{
        dice: state.dice,
        player1Active: state.player1Active,
        player2Active: state.player2Active,
        roleDice,
        changePlayers,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default States;

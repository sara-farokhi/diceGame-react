import { ROLE_DICE, CHANGE_PLAYERS } from "../type";

const reducer = (state, action) => {
  switch (action.type) {
    case ROLE_DICE:
      return {
        ...state,
        dice: action.payload,
        diceValues: [...state.diceValues, action.payload],
      };

    case CHANGE_PLAYERS:
      return {
        ...state,
        player1Active: !state.player1Active,
        player2Active: !state.player2Active,
      };

    default:
      return state;
  }
};

export default reducer;

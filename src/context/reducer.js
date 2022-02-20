import {
  ROLE_DICE,
  CHANGE_PLAYERS,
  CURRENT_SUM,
  RESET_CURRENTSUM,
  PLAYERII_SCORE,
  PLAYERI_SCORE,
  PLAYER_1_START,
  PLAYER_2_START,
  RESET_GAME,
} from "../type";

const reducer = (state, action) => {
  switch (action.type) {
    case ROLE_DICE:
      return { ...state, dice: action.payload };

    case CHANGE_PLAYERS:
      return {
        ...state,
        player1Active: !state.player1Active,
        player2Active: !state.player2Active,
      };
    case CURRENT_SUM:
      return {
        ...state,
        currentSum: state.dice === 3 ? 0 : state.currentSum + state.dice,
      };
    case RESET_CURRENTSUM:
      return {
        ...state,
        currentSum: 0,
        dice: null,
      };
    case PLAYERI_SCORE:
      return {
        ...state,
        player1Score: state.player1Score + state.currentSum,
        dice: null,
      };
    case PLAYERII_SCORE:
      return {
        ...state,
        player2Score: state.player2Score + state.currentSum,
        dice: null,
      };
    case PLAYER_1_START:
      return {
        ...state,
        player1Active: true,
        player2Active: false,
      };
    case PLAYER_2_START:
      return {
        ...state,
        player2Active: true,
        player1Active: false,
      };

    case RESET_GAME:
      return {
        ...state,
        dice: null,
        currentSum: 0,
        player1Score: 0,
        player2Score: 0,
      };

    default:
      return state;
  }
};

export default reducer;

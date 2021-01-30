import { Store } from 'redux';
import { ActionModel } from '../types/Models';
import { SquareState } from '../types/SquareState';

function newBoard(): SquareState[] {
  const emptyRank = new Array(8).fill(SquareState.EMPTY);
  const bottomRank = [
    SquareState.WHITE_ROOK,
    SquareState.WHITE_KNIGHT,
    SquareState.WHITE_BISHOP,
    SquareState.WHITE_KING,
    SquareState.WHITE_QUEEN,
    SquareState.WHITE_BISHOP,
    SquareState.WHITE_KNIGHT,
    SquareState.WHITE_ROOK,
  ];
  const pawnRank = new Array(8).fill(SquareState.WHITE_PAWN);

  return [
    ...(bottomRank.map(piece => piece | 0x10) as SquareState[]),
    ...(pawnRank.map(piece => piece | 0x10) as SquareState[]),
    ...emptyRank,
    ...emptyRank,
    ...emptyRank,
    ...emptyRank,
    ...pawnRank,
    ...bottomRank,
  ];
}

export interface StateType {
  board: SquareState[];
}

let initialState: StateType = {
  board: newBoard(),
};

export type StoreType = Store<StateType, ActionModel>;

export function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };

  switch (action.type) {
    default:
      return state;
  }

  return newState;
}

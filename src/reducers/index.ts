import { Store } from 'redux';
import { newBoard } from '../functions/board';
import { ActionModel } from '../types/Models';
import { PieceType } from '../types/PieceType';

export interface StateType {
  board: PieceType[];
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

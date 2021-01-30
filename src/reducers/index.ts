import { Store } from 'redux';
import { ActionModel } from '../types/Models';
import { SquareState } from '../types/SquareState';

export interface StateType {
  board: SquareState[];
}

let initialState: StateType = {
  board: new Array(64).fill(SquareState.EMPTY),
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

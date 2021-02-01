import { Store } from 'redux';
import { newBoard, BoardType } from '../functions/board';
import { ActionModel } from '../types/Models';

export interface StateType {
  board: BoardType;
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

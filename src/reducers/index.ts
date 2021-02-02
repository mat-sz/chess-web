import { Store } from 'redux';
import { newBoard, BoardType } from '../functions/board';
import { ActionType } from '../types/ActionType';
import { ActionModel } from '../types/Models';

export interface StateType {
  board: BoardType;
  selectedIndex: number | undefined;
}

let initialState: StateType = {
  board: newBoard(),
  selectedIndex: undefined,
};

export type StoreType = Store<StateType, ActionModel>;

export function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };

  switch (action.type) {
    case ActionType.SELECT:
      newState.selectedIndex = action.value;
      break;
    default:
      return state;
  }

  return newState;
}

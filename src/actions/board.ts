import { ActionType } from '../types/ActionType';
import { ActionModel } from '../types/Models';

export function selectAction(index: number | undefined): ActionModel {
  return {
    type: ActionType.SELECT,
    value: index,
  };
}

import { AlertActionsTypes } from '../types';
import { AlertAction, AlertState } from './AlertContext';

export function AlertReducer(
 state: AlertState[],
 action: AlertAction
): AlertState[] {
 const { type, payload } = action;
 switch (type) {
  //?============    Alert      ==============================
  case AlertActionsTypes.SET_ALERT:
   return [...state, payload as AlertState];
  case AlertActionsTypes.REMOVE_ALERT:
   return state.filter((a) => a.id !== (payload as string));
  //?============    END      ==============================
  default: {
   throw new Error(`Unhandled action type: ${type}`);
  }
 }
}

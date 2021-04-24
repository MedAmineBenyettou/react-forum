import { AlertDispatch, AlertState, AlertType } from '../AlertContext';
import uuid from 'uuid';
import { AlertActionsTypes } from '../../types';
export const setAlert = (
 dispatch: AlertDispatch,
 msg: string,
 alertType: AlertType
) => {
 const id = uuid.v4();
 dispatch({
  type: AlertActionsTypes.SET_ALERT,
  payload: { msg, alertType, id },
 });

 setTimeout(
  () => dispatch({ type: AlertActionsTypes.REMOVE_ALERT, payload: id }),
  5000
 );
};

import * as uuid from 'uuid';
import { AlertActionsTypes } from '../../types';
import { IUseAlert } from '../../_common';
export const setAlert = ({ dispatchAlert, msg, alertType }: IUseAlert) => {
 const id = uuid.v4();
 dispatchAlert({
  type: AlertActionsTypes.SET_ALERT,
  payload: { msg, alertType, id },
 });

 setTimeout(
  () => dispatchAlert({ type: AlertActionsTypes.REMOVE_ALERT, payload: id }),
  5000
 );
};

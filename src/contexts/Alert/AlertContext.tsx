import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { AlertActionsTypes } from '../types';
import { AlertReducer } from './AlertReducer';

export type AlertAction = {
 type: AlertActionsTypes;
 payload?: AlertState | string;
};
export type AlertDispatch = (action: AlertAction) => void;
type AlertProviderProps = { children: ReactNode };

//--------------------------------------    STATE   ---------------------------------
export enum AlertType {
 SUCCESS = 'success',
 INFO = 'info',
 DANGER = 'danger',
 WARNING = 'warning',
}

export type AlertState = { msg: string; alertType: AlertType; id: string };

const initialState: AlertState[] = [];
//-----------------------------------------------------------------------------------
const AlertContext = createContext<
 { state: AlertState[]; dispatchAlert: AlertDispatch } | undefined
>(undefined);

function AlertProvider({ children }: AlertProviderProps) {
 const [state, dispatchAlert] = useReducer(AlertReducer, initialState);
 const value = { state, dispatchAlert };
 return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>;
}

function useAlert() {
 const context = useContext(AlertContext);
 if (context === undefined) {
  throw new Error('useAlert must be used within a Alert Provider');
 }
 return context;
}
export { AlertProvider, useAlert };

import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { forumReducer } from './ForumReducer';
import { ForumActionsTypes } from '../types';
import { IforumApiFunctions } from '../../lib/Forum';
import { IUser } from '../../lib/User';
import { IContextError } from '../_common';

export type ForumAction = {
 type: ForumActionsTypes;
 payload?: any;
};
export type ForumDispatch = (action: ForumAction) => void;
type ForumProviderProps = { children: ReactNode };

export enum ICategoriesContainerState {
 ALL = 'ALL',
 TOP = 'TOP',
 LATEST = 'LATEST',
 LOGIN = 'LOGIN',
}

//--------------------------------------    STATE   ---------------------------------
export type ForumState = {
 loading: boolean;
 error: IContextError | null;
 apiFunctions: IforumApiFunctions;
 user: {
  isAuthenticated: boolean;
  userDetails: IUser | null;
 };
 categoriesContainerState: ICategoriesContainerState;
};
const initialState: ForumState = {
 loading: false,
 error: null,
 apiFunctions: {},
 user: { isAuthenticated: false, userDetails: null },
 categoriesContainerState: ICategoriesContainerState.ALL,
};
//-----------------------------------------------------------------------------------
const ForumContext = createContext<
 { state: ForumState; dispatch: ForumDispatch } | undefined
>(undefined);

function ForumProvider({ children }: ForumProviderProps) {
 const [state, dispatch] = useReducer(forumReducer, initialState);
 const value = { state, dispatch };
 return <ForumContext.Provider value={value}>{children}</ForumContext.Provider>;
}

function useForum() {
 const context = useContext(ForumContext);
 if (context === undefined) {
  throw new Error('useForum must be used within a Forum Provider');
 }
 return context;
}
export { ForumProvider, useForum };

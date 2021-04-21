import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { forumReducer } from './ForumReducer';
import { TForumActions } from '../types';
import { IforumApiFunctions } from '../../lib/Forum';
import { IUser } from '../../lib/User';
import { ICategory } from '../../lib/Category';

export type Action = {
 type: TForumActions;
 payload?: any;
};
export type ForumDispatch = (action: Action) => void;
type ForumProviderProps = { children: ReactNode };

//--------------------------------------    STATE   ---------------------------------
export type State = {
 loading: boolean;
 apiFunctions: IforumApiFunctions;
 user: {
  isAuthenticated: boolean;
  userDetails: IUser | null;
 };
 categories: ICategory[];
};
const initialState: State = {
 loading: true,
 apiFunctions: {},
 categories: [],
 user: { isAuthenticated: false, userDetails: null },
};
//-----------------------------------------------------------------------------------
const ForumContext = createContext<
 { state: State; dispatch: ForumDispatch } | undefined
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

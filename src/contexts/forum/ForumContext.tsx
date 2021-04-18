import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { forumReducer } from './ForumReducer';
import { FORUM_LOADING, FORUM_INIT } from '../types';
import { IforumApiFunctions } from '../../components/Forum';

export type Action = {
 type: typeof FORUM_LOADING | typeof FORUM_INIT;
 payload?: any;
};
type Dispatch = (action: Action) => void;
type ForumProviderProps = { children: ReactNode };

//--------------------------------------    STATE   ---------------------------------
export type State = {
 loading: boolean;
 apiFunctions: IforumApiFunctions;
};
const initialState: State = { loading: true, apiFunctions: {} };
//-----------------------------------------------------------------------------------
const ForumContext = createContext<
 { state: State; dispatch: Dispatch } | undefined
>(undefined);

function ForumProvider({ children }: ForumProviderProps) {
 const [state, dispatch] = useReducer(forumReducer, initialState);
 const value = { state, dispatch };
 return <ForumContext.Provider value={value}>{children}</ForumContext.Provider>;
}

function useForum() {
 const context = useContext(ForumContext);
 if (context === undefined) {
  throw new Error('useCount must be used within a CountProvider');
 }
 return context;
}
export { ForumProvider, useForum };

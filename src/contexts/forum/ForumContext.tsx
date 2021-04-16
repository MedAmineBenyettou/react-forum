import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { forumReducer } from './ForumReducer';
import { FORUM_LOADING } from '../types';

export type State = {
 loading: boolean;
}; //type of initialState;
export type Action = { type: typeof FORUM_LOADING };
type Dispatch = (action: Action) => void;
type ForumProviderProps = { children: ReactNode };

const initialState: State = { loading: true };

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

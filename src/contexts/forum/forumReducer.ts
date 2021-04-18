import { Action, State } from './ForumContext';

export function forumReducer(state: State, action: Action): State {
 const { type, payload } = action;

 switch (type) {
  case 'FORUM_LOADING':
   return { ...state, loading: true };
  case 'FORUM_INIT':
   return { ...state, apiFunctions: payload };
  default: {
   throw new Error(`Unhandled action type: ${type}`);
  }
 }
}

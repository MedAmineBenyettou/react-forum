import { Action, State } from './ForumContext';

export function forumReducer(state: State, action: Action) {
 switch (action.type) {
  case 'FORUM_LOADING':
   return { ...state, loading: true };
  default: {
   throw new Error(`Unhandled action type: ${action.type}`);
  }
 }
}

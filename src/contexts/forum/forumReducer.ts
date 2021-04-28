import { IforumApiFunctions } from '../../lib/Forum';
import { ForumActionsTypes } from '../types';
import { ForumAction, ForumState } from './ForumContext';

export function forumReducer(
 state: ForumState,
 action: ForumAction
): ForumState {
 const { type, payload } = action;
 switch (type) {
  //?============    FORUM      ==============================
  case ForumActionsTypes.FORUM_LOADING:
   return { ...state, loading: true };
  case ForumActionsTypes.FORUM_INIT:
   return {
    ...state,
    apiFunctions: payload as IforumApiFunctions,
    isReady: true,
   };
  case ForumActionsTypes.FORUM_CATEGORIES_STATE_CHANGE:
   return {
    ...state,
    categoriesContainerState: payload,
   };
  //?============    AUTH      ==============================
  case ForumActionsTypes.USER_LOGIN_SUCCESS:
  case ForumActionsTypes.USER_REGISTER_SUCCESS:
   localStorage.setItem('forumToken', payload.token);
   return {
    ...state,
    error: null,
    user: {
     isAuthenticated: true,
     userDetails: {
      ...payload.user,
     },
    },
    loading: false,
   };
  case ForumActionsTypes.USER_LOGIN_FAILED:
  case ForumActionsTypes.USER_LOGOUT_FAILED:
  case ForumActionsTypes.USER_LOGOUT_SUCCESS:
  case ForumActionsTypes.USER_REGISTER_FAILED:
   localStorage.removeItem('forumToken');
   return {
    ...state,
    error: payload,
    user: {
     isAuthenticated: false,
     userDetails: null,
    },
    loading: false,
   };
  //?============    END      ==============================
  default: {
   throw new Error(`Unhandled forum action type: ${type}`);
  }
 }
}

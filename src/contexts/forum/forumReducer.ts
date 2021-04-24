import { ICategory } from '../../lib/Category';
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
   return { ...state, apiFunctions: payload as IforumApiFunctions };
  //?============    AUTH      ==============================
  case ForumActionsTypes.USER_LOGIN_SUCCESS:
  case ForumActionsTypes.USER_REGISTER_SUCCESS:
   localStorage.setItem('token', payload.token);
   return {
    ...state,
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
   localStorage.removeItem('token');
   return {
    ...state,
    user: {
     isAuthenticated: false,
     userDetails: null,
    },
    categories: [],
    loading: false,
   };
  //?============    CATEGORIES      ==============================
  case ForumActionsTypes.CATEGORIES_FETCH_SUCCESS:
   return {
    ...state,
    categories: [...(payload as ICategory[])],
    loading: false,
   };

  //?============    CATEGORY      ==============================
  case ForumActionsTypes.CATEGORY_FETCH_SUCCESS:
   const cat = state.categories.findIndex((c) =>
    c.id.match((payload as ICategory).id)
   );
   if (cat >= 0) state.categories[cat] = payload as ICategory;
   else state.categories.push(payload);
   return {
    ...state,
    loading: false,
   };

  //?============    FAILS      ==============================
  case ForumActionsTypes.CATEGORIES_FETCH_FAILED:
   return {
    ...state,
    loading: false,
   };
  case ForumActionsTypes.CATEGORY_FETCH_FAILED:
   return {
    ...state,
    loading: false,
   };
  //?============    END      ==============================
  default: {
   throw new Error(`Unhandled action type: ${type}`);
  }
 }
}

import { ICategory } from '../../lib/Category';
import { ForumActions } from '../types';
import { Action, State } from './ForumContext';

export function forumReducer(state: State, action: Action): State {
 const { type, payload } = action;

 switch (type) {
  //?============    FORUM      ==============================
  case ForumActions.FORUM_LOADING:
   return { ...state, loading: true };
  case ForumActions.FORUM_INIT:
   return { ...state, apiFunctions: payload };
  //?============    AUTH      ==============================
  case ForumActions.USER_LOGIN_SUCCESS:
  case ForumActions.USER_REGISTER_SUCCESS:
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
  case ForumActions.USER_LOGIN_FAILED:
  case ForumActions.USER_LOGOUT_FAILED:
  case ForumActions.USER_LOGOUT_SUCCESS:
  case ForumActions.USER_REGISTER_FAILED:
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
  case ForumActions.CATEGORIES_FETCH_SUCCESS:
   return {
    ...state,
    categories: [...(payload as ICategory[])],
    loading: false,
   };

  //?============    CATEGORY      ==============================
  case ForumActions.CATEGORY_FETCH_SUCCESS:
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
  case ForumActions.CATEGORIES_FETCH_FAILED:
   return {
    ...state,
    loading: false,
   };
  case ForumActions.CATEGORY_FETCH_FAILED:
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

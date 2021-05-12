import { ICategory } from '../../lib/Category';
import { CategoriesActionsTypes } from '../types';
import { IContextError } from '../_common';
import { CategoriesAction, CategoriesState } from './CategoriesContext';

export function CategoriesReducer(
 state: CategoriesState,
 action: CategoriesAction
): CategoriesState {
 const { type, payload } = action;
 switch (type) {
  case CategoriesActionsTypes.CATEGORIES_LOADING:
   return {
    ...state,
    loading: true,
   };
  //?============    CATEGORIES      ==============================
  case CategoriesActionsTypes.CATEGORIES_FETCH_SUCCESS:
   return {
    ...state,
    error: null,
    categoriesList: payload as ICategory[],
    loading: false,
   };

  //?============    CATEGORY      ==============================
  case CategoriesActionsTypes.CATEGORY_FETCH_SUCCESS:
   const cat = state.categoriesList.findIndex((c) =>
    String(c.id).match(String((payload as ICategory).id))
   );
   if (cat < 0) state.categoriesList.push(payload as ICategory);
   else state.categoriesList[cat] = payload as ICategory;
   return {
    ...state,
    loading: false,
    error: null,
   };
  case CategoriesActionsTypes.CATEGORY_SELECT:
   return {
    ...state,
    selectedCategory: payload as ICategory,
   };
  //?============    FAILS      ==============================
  case CategoriesActionsTypes.CATEGORIES_FETCH_FAILED:
  case CategoriesActionsTypes.CATEGORY_FETCH_FAILED:
   return {
    ...state,
    loading: false,
    error: payload as IContextError,
   };
  default: {
   throw new Error(`Unhandled category action type: ${type}`);
  }
 }
}

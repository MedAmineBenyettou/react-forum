import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { ICategory } from '../../lib/Category';
import { CategoriesActionsTypes } from '../types';
import { CategoriesReducer } from './CategoriesReducer';
import { IContextError } from '../_common';

export type CategoriesAction = {
 type: CategoriesActionsTypes;
 payload?: ICategory | ICategory[] | IContextError | string | null;
};
export type CategoriesDispatch = (action: CategoriesAction) => void;
type CategoriesProviderProps = { children: ReactNode };

//--------------------------------------    STATE   ---------------------------------
export type CategoriesState = {
 loading: boolean;
 error: IContextError | null;
 categoriesList: ICategory[];
 selectedCategory: ICategory | null;
};

const initialState: CategoriesState = {
 loading: false,
 error: null,
 categoriesList: [],
 selectedCategory: null,
};
//-----------------------------------------------------------------------------------
const CategoriesContext = createContext<
 | { categoriesState: CategoriesState; dispatchCategories: CategoriesDispatch }
 | undefined
>(undefined);

function CategoriesProvider({ children }: CategoriesProviderProps) {
 const [categoriesState, dispatchCategories] = useReducer(
  CategoriesReducer,
  initialState
 );
 const value = { categoriesState, dispatchCategories };
 return (
  <CategoriesContext.Provider value={value}>
   {children}
  </CategoriesContext.Provider>
 );
}

function useCategories() {
 const context = useContext(CategoriesContext);
 if (context === undefined) {
  throw new Error('useCategories must be used within a Categories Provider');
 }
 return context;
}
export { CategoriesProvider, useCategories };

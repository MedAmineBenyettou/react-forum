import React from 'react';
import { Categories } from './Category/Categories';
import { Auth } from './Auth/Auth';
import {
 ICategoriesContainerState,
 useForum,
} from '../contexts/forum/ForumContext';

export const ForumContainer = () => {
 const {
  state: { categoriesContainerState },
 } = useForum();

 switch (categoriesContainerState) {
  case ICategoriesContainerState.ALL:
  case ICategoriesContainerState.LATEST:
  case ICategoriesContainerState.TOP:
   return <Categories />;
  case ICategoriesContainerState.LOGIN:
   return <Auth />;
  default:
   throw new Error("Couldn't handle the view: " + categoriesContainerState);
 }
};

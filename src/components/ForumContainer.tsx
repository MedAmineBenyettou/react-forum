import React from 'react';
import { Categories } from './Category/Categories';
import { Auth } from './Auth/Auth';
import { ICategoriesContainerState } from './ForumMain';

interface props {
 categoriesState: ICategoriesContainerState;
}

export const ForumContainer: React.FC<props> = ({ categoriesState }) => {
 switch (categoriesState) {
  case 'ALL':
  case 'LATEST':
  case 'TOP':
   return <Categories view={categoriesState} />;
  case 'LOGIN':
   return <Auth />;
  default:
   throw new Error("Couldn't handle the view: " + categoriesState);
 }
};

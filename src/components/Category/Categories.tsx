import React, { useEffect } from 'react';
import { Category } from './Category';
import { ICategoriesContainerState } from '../ForumMain';

import '../../css/Categories/Categories.css';
import { useForum } from '../../contexts/forum/ForumContext';
import { getAllCategories } from '../../contexts/forum/Actions/categories';

interface props {
 view: ICategoriesContainerState;
}

export const Categories: React.FC<props> = ({ view }) => {
 const {
  dispatch,
  state: {
   categories,
   apiFunctions,
   user: { isAuthenticated },
  },
 } = useForum();

 function handleTabs() {
  switch (view) {
   case 'ALL':
    break;
   case 'LATEST':
    break;
   case 'TOP':
    break;
   case 'LOGIN':
    break;
   default:
    throw new Error("Couldn't handle the view: " + view);
  }
 }

 useEffect(() => {
  handleTabs();
  if (isAuthenticated) getAllCategories(dispatch, apiFunctions);
 }, [view, isAuthenticated]);

 return (
  <div className="Categories">
   {categories.map((c) => (
    <Category key={c.id} {...c} />
   ))}
  </div>
 );
};

import React, { useEffect } from 'react';
import { Category } from './Category';
import { useForum } from '../../contexts/forum/ForumContext';
import { getAllCategories } from '../../contexts/Categories/actions/CategoriesActions';
import { useCategories } from '../../contexts/Categories/CategoriesContext';
import { Spinner } from '../Spinner/Spinner';

import '../../css/Categories/Categories.css';

export const Categories = () => {
 const {
  dispatch,
  state: {
   apiFunctions,
   user: { isAuthenticated },
   categoriesContainerState,
  },
 } = useForum();
 const {
  dispatchCategories,
  categoriesState: { categoriesList, loading },
 } = useCategories();

 useEffect(() => {
  const handleTabs = () => {
   switch (categoriesContainerState) {
    case 'ALL':
     break;
    case 'LATEST':
     break;
    case 'TOP':
     break;
    case 'LOGIN':
     break;
    default:
     throw new Error("Couldn't handle the view: " + categoriesContainerState);
   }
  };
  handleTabs();
  if (isAuthenticated)
   getAllCategories({ dispatch, apiFunctions }, { dispatchCategories });
 }, [
  isAuthenticated,
  apiFunctions,
  dispatch,
  dispatchCategories,
  categoriesContainerState,
 ]);

 return (
  <div className="Categories">
   {loading ? (
    <Spinner />
   ) : (
    categoriesList.map((c) => <Category key={c.id} {...c} />)
   )}
  </div>
 );
};

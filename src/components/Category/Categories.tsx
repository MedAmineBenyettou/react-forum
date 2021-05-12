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
   isReady,
  },
 } = useForum();
 const {
  dispatchCategories,
  categoriesState: { categoriesList, loading, selectedCategory },
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
  if (isAuthenticated && !loading && isReady) {
   getAllCategories({ dispatch, apiFunctions }, { dispatchCategories });
  }
 }, [
  isAuthenticated,
  apiFunctions,
  dispatch,
  dispatchCategories,
  categoriesContainerState,
  loading,
  isReady,
 ]);

 return (
  <div className="Categories">
   {loading ? (
    <Spinner />
   ) : (
    categoriesList.map((c) =>
     (!selectedCategory && !c.parentId) ||
     (selectedCategory && String(selectedCategory.id).match(String(c.id))) ? (
      <Category
       key={c.id}
       {...c}
       categories={categoriesList.filter((c1) =>
        String(c1.parentId).match(c.id)
       )}
      />
     ) : null
    )
   )}
  </div>
 );
};

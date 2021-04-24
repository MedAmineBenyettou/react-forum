import React, { useEffect } from 'react';
import { Categories } from './Category/Categories';
import { Auth } from './Auth/Auth';
import { ICategoriesContainerState } from './ForumMain';
import { useHistory } from 'react-router-dom';
import { useForum } from '../contexts/forum/ForumContext';
import M from 'materialize-css';

interface props {
 categoriesState: ICategoriesContainerState;
 setCategoriesState: React.Dispatch<
  React.SetStateAction<ICategoriesContainerState>
 >;
}

export const ForumContainer: React.FC<props> = ({
 categoriesState,
 setCategoriesState,
}) => {
 const history = useHistory();
 const {
  state: {
   user: { isAuthenticated },
  },
 } = useForum();

 useEffect(() => {
  if (isAuthenticated) {
   history.replace('/');
   setCategoriesState('ALL');
   var el = document.getElementById('forum-tabs');
   if (el) {
    var inst = M.Tabs.getInstance(el);
    inst.select('All_tab');
    inst.updateTabIndicator();
   }
  }
 }, [isAuthenticated]);

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

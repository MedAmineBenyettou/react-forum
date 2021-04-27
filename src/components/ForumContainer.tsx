import React, { useEffect } from 'react';
import { Categories } from './Category/Categories';
import { Auth } from './Auth/Auth';
import {
 ICategoriesContainerState,
 useForum,
} from '../contexts/forum/ForumContext';
import { setCategoriesState } from '../contexts/forum/Actions/forum';
import M from 'materialize-css';

export const ForumContainer = () => {
 const {
  state: {
   user: { isAuthenticated },
   categoriesContainerState,
  },
  dispatch,
 } = useForum();

 useEffect(() => {
  if (isAuthenticated) {
   setCategoriesState({ dispatch }, ICategoriesContainerState.ALL);
   var el = document.getElementById('forum-tabs');
   if (el) {
    var inst = M.Tabs.getInstance(el);
    inst.select('All_tab');
    inst.updateTabIndicator();
   }
  }
 }, [isAuthenticated, setCategoriesState, dispatch]);

 switch (categoriesContainerState) {
  case 'ALL':
  case 'LATEST':
  case 'TOP':
   return <Categories />;
  case 'LOGIN':
   return <Auth />;
  default:
   throw new Error("Couldn't handle the view: " + categoriesContainerState);
 }
};

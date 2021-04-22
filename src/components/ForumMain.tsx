import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { initForum } from '../contexts/forum/Actions/forum';
import { useForum } from '../contexts/forum/ForumContext';
import { IforumProps } from '../lib/Forum';
import { ForumContainer } from './ForumContainer';
import { Navbar } from './Navbar/Navbar';

export type ICategoriesContainerState = 'ALL' | 'TOP' | 'LATEST' | 'LOGIN';

export const ForumMain = (props: IforumProps) => {
 const { apiFunctions } = props;
 const { dispatch } = useForum();
 const [
  categoriesState,
  setCategoriesState,
 ] = useState<ICategoriesContainerState>('ALL');

 useEffect(() => {
  initForum(dispatch, apiFunctions);
 }, [apiFunctions, dispatch]);

 return (
  <Router>
   <div className="forum-container container">
    <Navbar setCategoriesState={setCategoriesState} />
    <div className="Forum">
     <Switch>
      <Route
       exact
       path="/"
       render={(props) => (
        <ForumContainer
         {...props}
         setCategoriesState={setCategoriesState}
         categoriesState={categoriesState}
        />
       )}
      />
     </Switch>
    </div>
   </div>
  </Router>
 );
};

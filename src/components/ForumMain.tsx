import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { initForum } from '../contexts/forum/Actions/forum';
import { useForum } from '../contexts/forum/ForumContext';
import { IforumProps } from '../lib/Forum';
import { CategoryPage } from './Category/CategoryPage';
import { ForumContainer } from './ForumContainer';
import { Navbar } from './Navbar/Navbar';
import { PrivateRoute } from './Routing/PrivateRoute';

export const ForumMain: React.FC<IforumProps> = ({ apiFunctions }) => {
 const { dispatch } = useForum();

 useEffect(() => {
  initForum({ dispatch, apiFunctions });
 }, [dispatch, apiFunctions]);

 return (
  <Router>
   <div className="forum-container container">
    <Navbar />
    <div className="Forum">
     <Switch>
      <Route exact path="/" component={ForumContainer} />
      <PrivateRoute path="/category/:categoryId" component={CategoryPage} />
     </Switch>
    </div>
   </div>
  </Router>
 );
};

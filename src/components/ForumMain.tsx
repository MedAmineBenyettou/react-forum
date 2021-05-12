import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { initForum } from '../contexts/forum/Actions/forum';
import { useForum } from '../contexts/forum/ForumContext';
import { IforumProps } from '../lib/Forum';
import { CategoryPage } from './Category/CategoryPage';
import { Error } from './Error/Error';
import { ForumContainer } from './ForumContainer';
import { Navbar } from './Navbar/Navbar';
import { PrivateRoute } from './Routing/PrivateRoute';

export const ForumMain: React.FC<IforumProps> = ({ apiFunctions }) => {
 const {
  dispatch,
  state: { isReady },
 } = useForum();

 useEffect(() => {
  if (!isReady) initForum({ dispatch, apiFunctions });
 }, [dispatch, apiFunctions, isReady]);

 return (
  <Router>
   <div className="forum-container container">
    <Navbar />
    <div className="Forum">
     <Switch>
      <Route exact path="/" component={ForumContainer} />
      <PrivateRoute path="/categories/:categoryId" component={CategoryPage} />
      <Route
       render={(props) => <Error {...props} msg={'404 Page not found'} />}
      />
     </Switch>
    </div>
   </div>
  </Router>
 );
};

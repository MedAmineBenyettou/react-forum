import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { forumData } from '../lib/Forum';
import { ForumProvider } from '../contexts/forum/ForumContext';
import { Navbar } from './Navbar/Navbar';
import { ForumContainer } from './ForumContainer';
import '../css/Forum.css';

export interface IforumApiFunctions {
 // TODO FIX
 getAllCategories?: (...args: any[]) => any[];
 getCategory?: (...args: any[]) => any;
 getAllTopicsFrom_CategoryId?: (...args: any[]) => any[];
 getTopicFrom_CategoryId?: (...args: any[]) => any[];
 getAllPostsFrom_Topic?: (...args: any[]) => any[];
 getPostFrom_TopicId?: (...args: any[]) => any[];
 getUsers?: (...args: any[]) => any[];
 getUser?: (...args: any[]) => any[];

 modifyCategory?: (...args: any[]) => any[];
 modifyTopic?: (...args: any[]) => any[];
 modifyPost?: (...args: any[]) => any[];
 modifyUser?: (...args: any[]) => any[];

 deleteCategory?: (...args: any[]) => any[];
 deleteTopic?: (...args: any[]) => any[];
 deletePost?: (...args: any[]) => any[];
 deleteUser?: (...args: any[]) => any[];
 disableUser?: (...args: any[]) => any[];
}

interface IforumProps {
 apiFunctions: IforumApiFunctions;
}
export type ICategoriesContainerState = 'ALL' | 'TOP' | 'LATEST' | 'LOGIN';

// function Forum(props:forumData) {
function Forum(props: IforumProps) {
 const { apiFunctions } = props;
 const [
  categoriesState,
  setCategoriesState,
 ] = useState<ICategoriesContainerState>('ALL');

 return (
  <ForumProvider>
   <Router>
    <div className="forum-container container">
     <Navbar setCategoriesState={setCategoriesState} />
     <div className="Forum">
      <Switch>
       <Route
        exact
        path="/"
        render={(props) => (
         <ForumContainer {...props} categoriesState={categoriesState} />
        )}
       />
      </Switch>
     </div>
    </div>
   </Router>
  </ForumProvider>
 );
}

export default Forum;

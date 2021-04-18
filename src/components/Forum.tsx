import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { forumData } from '../lib/Forum';
import { ForumProvider } from '../contexts/forum/ForumContext';

const { Navbar } = require('./Navbar/Navbar');
const { Categories } = require('./Category/Categories');

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

// function Forum(props:forumData) {
function Forum(props: IforumProps) {
 const { apiFunctions } = props;
 //  const { views, options, theme } = props;
 return (
  <ForumProvider>
   <Router>
    <div className="container">
     <Navbar />
     <div className="Forum">
      <Categories />
     </div>
    </div>
   </Router>
  </ForumProvider>
 );
}

export default Forum;

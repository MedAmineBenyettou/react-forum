import React from 'react';
import ReactDOM from 'react-dom';
import Forum, { IforumApiFunctions } from './components/Forum';

import './css/materialize/materialize.css';
import './css/Index.css';

const apiFunctions: IforumApiFunctions = {
 //  getAllCategories: f,
 //  getCategory: f,
 //  getAllTopicsFrom_CategoryId: f,
 //  getTopicFrom_CategoryId: f,
 //  getAllPostsFrom_Topic: f,
 //  getPostFrom_TopicId: f,
 //  getUsers: f,
 //  getUser: f,
 //  modifyCategory: f,
 //  modifyTopic: f,
 //  modifyPost: f,
 //  modifyUser: f,
 //  deleteCategory: f,
 //  deleteTopic: f,
 //  deletePost: f,
 //  deleteUser: f,
 //  disableUser: f,
};

ReactDOM.render(
 <React.StrictMode>
  <Forum apiFunctions={apiFunctions} />
 </React.StrictMode>,
 document.getElementById('root')
);

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { forumData } from '../lib/Forum';
import { ForumProvider } from '../contexts/forum/ForumContext';

const { Navbar } = require('./Navbar/Navbar');
const { Category } = require('./Category/Category');

// function Forum(props:forumData) {
function Forum(props: any) {
 const { views, options, theme } = props;
 return (
  <ForumProvider>
   <Router>
    <div className="Forum">
     <Navbar />
     <div className="Categories-container">
      <Category />
     </div>
    </div>
   </Router>
  </ForumProvider>
 );
}

export default Forum;

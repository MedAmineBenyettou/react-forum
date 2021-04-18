import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { forumData } from '../lib/Forum';
import { ForumProvider } from '../contexts/forum/ForumContext';

const { Navbar } = require('./Navbar/Navbar');
const { Categories } = require('./Category/Categories');

// function Forum(props:forumData) {
function Forum(props: any) {
 const { views, options, theme } = props;
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

import React from 'react';
import { ForumProvider } from '../contexts/forum/ForumContext';
import { ForumMain } from './ForumMain';
import { IforumProps } from '../lib/Forum';

import '../css/Forum.css';

function Forum(props: IforumProps) {
 return (
  <ForumProvider>
   <ForumMain {...props} />
  </ForumProvider>
 );
}

export default Forum;

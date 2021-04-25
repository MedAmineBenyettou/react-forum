import React from 'react';
import { ForumProvider } from '../contexts/forum/ForumContext';
import { ForumMain } from './ForumMain';
import { IforumProps } from '../lib/Forum';
import { Alert } from './Alert/Alert';
import { AlertProvider } from '../contexts/Alert/AlertContext';

import '../css/Forum.css';

function Forum(props: IforumProps) {
 return (
  <ForumProvider>
   <AlertProvider>
    <Alert />
    <ForumMain {...props} />
   </AlertProvider>
  </ForumProvider>
 );
}

export default Forum;

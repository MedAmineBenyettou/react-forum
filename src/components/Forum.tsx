import React from 'react';
import { ForumProvider } from '../contexts/forum/ForumContext';
import { ForumMain } from './ForumMain';
import { IforumProps } from '../lib/Forum';
import { Alert } from './Alert/Alert';
import { AlertProvider } from '../contexts/Alert/AlertContext';

import '../css/Forum.css';
import { CategoriesProvider } from '../contexts/Categories/CategoriesContext';

function Forum(props: IforumProps) {
 return (
  <ForumProvider>
   <CategoriesProvider>
    <AlertProvider>
     <Alert />
     <ForumMain {...props} />
    </AlertProvider>
   </CategoriesProvider>
  </ForumProvider>
 );
}

export default Forum;

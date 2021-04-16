import React from 'react';
//import axios from 'axios';
import { useForum } from './ForumContext';
import {} from '../types';

export function loadingForum() {
 const { dispatch } = useForum();
 dispatch({ type: 'FORUM_LOADING' });
}

import React from 'react';
import axios from 'axios';
import { useForum } from './ForumContext';
import { IforumApiFunctions } from '../../components/Forum';

export function loadingForum() {
 const { dispatch } = useForum();
 dispatch({ type: 'FORUM_LOADING' });
}

export function initForum(apiFunctions: IforumApiFunctions) {
 const { dispatch } = useForum();
 dispatch({ type: 'FORUM_INIT', payload: apiFunctions });
}

export function getAllCategories() {
 const {
  dispatch,
  state: { apiFunctions },
 } = useForum();

 if (apiFunctions.getAllCategories !== undefined) {
 }
}

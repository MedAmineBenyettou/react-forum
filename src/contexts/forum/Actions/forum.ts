import { ForumDispatch, ICategoriesContainerState } from '../ForumContext';
import { ForumActionsTypes } from '../../types';
import { IUseForum } from '../../_common';
import M from 'materialize-css';

export function loadingForum(dispatch: ForumDispatch) {
 dispatch({ type: ForumActionsTypes.FORUM_LOADING });
}

export function initForum({ dispatch, apiFunctions }: IUseForum) {
 if (dispatch)
  dispatch({ type: ForumActionsTypes.FORUM_INIT, payload: apiFunctions });
 else throw new Error('You need to include forumDispatch');
}

export function setCategoriesState(
 {
  dispatch,
  categoriesContainerState,
 }: {
  dispatch: ForumDispatch;
  categoriesContainerState: ICategoriesContainerState;
 },
 type: ICategoriesContainerState
) {
 if (!categoriesContainerState.match(type)) {
  dispatch({
   type: ForumActionsTypes.FORUM_CATEGORIES_STATE_CHANGE,
   payload: type,
  });
  var el = document.getElementById('forum-tabs');
  if (el) {
   var inst = M.Tabs.getInstance(el);
   inst.select(`${type}_tab`);
   inst.updateTabIndicator();
  }
 }
}

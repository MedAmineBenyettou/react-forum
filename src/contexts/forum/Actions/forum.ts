import { ForumDispatch, ICategoriesContainerState } from '../ForumContext';
import { ForumActionsTypes } from '../../types';
import { IUseForum } from '../../_common';

export function loadingForum(dispatch: ForumDispatch) {
 dispatch({ type: ForumActionsTypes.FORUM_LOADING });
}

export function initForum({ dispatch, apiFunctions }: IUseForum) {
 if (dispatch)
  dispatch({ type: ForumActionsTypes.FORUM_INIT, payload: apiFunctions });
 else throw new Error('You need to include forumDispatch');
}

export function setCategoriesState(
 { dispatch }: { dispatch: ForumDispatch },
 type: ICategoriesContainerState
) {
 dispatch({
  type: ForumActionsTypes.FORUM_CATEGORIES_STATE_CHANGE,
  payload: type,
 });
}

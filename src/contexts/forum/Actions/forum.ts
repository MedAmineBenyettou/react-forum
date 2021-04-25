import { ForumDispatch } from '../ForumContext';
import { ForumActionsTypes } from '../../types';
import { IUseForum } from '../../_common';

export function loadingForum(dispatch: ForumDispatch) {
 dispatch({ type: ForumActionsTypes.FORUM_LOADING });
}

export function initForum({ dispatch, apiFunctions }: IUseForum) {
 dispatch({ type: ForumActionsTypes.FORUM_INIT, payload: apiFunctions });
}

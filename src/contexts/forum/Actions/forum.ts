import { ForumDispatch } from '../ForumContext';
import { IforumApiFunctions } from '../../../lib/Forum';
import { ForumActionsTypes } from '../../types';

export function loadingForum(dispatch: ForumDispatch) {
 dispatch({ type: ForumActionsTypes.FORUM_LOADING });
}

export function initForum(
 dispatch: ForumDispatch,
 apiFunctions: IforumApiFunctions
) {
 dispatch({ type: ForumActionsTypes.FORUM_INIT, payload: apiFunctions });
}

import { ForumDispatch } from '../ForumContext';
import { IforumApiFunctions } from '../../../lib/Forum';
import { ForumActions } from '../../types';

export function loadingForum(dispatch: ForumDispatch) {
 dispatch({ type: ForumActions.FORUM_LOADING });
}

export function initForum(
 dispatch: ForumDispatch,
 apiFunctions: IforumApiFunctions
) {
 dispatch({ type: ForumActions.FORUM_INIT, payload: apiFunctions });
}

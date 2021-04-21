import { ForumDispatch } from '../ForumContext';
import { IforumApiFunctions } from '../../../lib/Forum';

export function loadingForum(dispatch: ForumDispatch) {
 dispatch({ type: 'FORUM_LOADING' });
}

export function initForum(
 dispatch: ForumDispatch,
 apiFunctions: IforumApiFunctions
) {
 dispatch({ type: 'FORUM_INIT', payload: apiFunctions });
}

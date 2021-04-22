import { IforumApiFunctions } from '../../../lib/Forum';
import { ForumActions } from '../../types';
import { ForumDispatch } from '../ForumContext';

export async function getAllCategories(
 dispatch: ForumDispatch,
 apiFunctions: IforumApiFunctions
) {
 if (apiFunctions.getAllCategories !== undefined) {
  try {
   const cats = await apiFunctions.getAllCategories();
   if (cats)
    dispatch({ type: ForumActions.CATEGORIES_FETCH_SUCCESS, payload: cats });
  } catch (err) {
   dispatch({ type: ForumActions.CATEGORIES_FETCH_FAILED });
   throw new Error('Auth Error while loging In.\n' + err);
  }
 } else {
  throw new Error(
   'getAllCategories is not defined by the user. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

export async function getCategory(
 dispatch: ForumDispatch,
 apiFunctions: IforumApiFunctions,
 id: string
) {
 if (apiFunctions.getCategory !== undefined) {
  try {
   const cat = await apiFunctions.getCategory(id);
   if (cat)
    dispatch({ type: ForumActions.CATEGORY_FETCH_SUCCESS, payload: cat });
  } catch (err) {
   dispatch({ type: ForumActions.CATEGORY_FETCH_FAILED });
   throw new Error(
    'Error while getting the category with the id: ' + id + '.\n' + err
   );
  }
 } else {
  throw new Error(
   'getAllCategories is not defined by the user. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

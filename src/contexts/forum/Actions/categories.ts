import { ForumActionsTypes } from '../../types';
import { IUseForum } from '../../_common';

export async function getAllCategories({ dispatch, apiFunctions }: IUseForum) {
 if (apiFunctions.getAllCategories !== undefined) {
  try {
   const cats = await apiFunctions.getAllCategories();
   if (cats)
    dispatch({
     type: ForumActionsTypes.CATEGORIES_FETCH_SUCCESS,
     payload: cats,
    });
  } catch (err) {
   dispatch({ type: ForumActionsTypes.CATEGORIES_FETCH_FAILED });
   throw new Error('Auth Error while loging In.\n' + err);
  }
 } else {
  throw new Error(
   'getAllCategories is not defined by the user. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

export async function getCategory(
 { dispatch, apiFunctions }: IUseForum,
 id: string
) {
 if (apiFunctions.getCategory !== undefined) {
  try {
   const cat = await apiFunctions.getCategory(id);
   if (cat)
    dispatch({ type: ForumActionsTypes.CATEGORY_FETCH_SUCCESS, payload: cat });
  } catch (err) {
   dispatch({ type: ForumActionsTypes.CATEGORY_FETCH_FAILED });
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

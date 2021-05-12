import { ICategory } from '../../../lib/Category';
import { CategoriesActionsTypes } from '../../types';
import { IUseCategories, IUseForum } from '../../_common';

export function loadingCategories({ dispatchCategories }: IUseCategories) {
 dispatchCategories({ type: CategoriesActionsTypes.CATEGORIES_LOADING });
}

export async function getAllCategories(
 { apiFunctions }: IUseForum,
 { dispatchCategories }: IUseCategories
) {
 if (apiFunctions.getAllCategories !== undefined) {
  try {
   const cats = await apiFunctions.getAllCategories();
   if (cats)
    dispatchCategories({
     type: CategoriesActionsTypes.CATEGORIES_FETCH_SUCCESS,
     payload: cats,
    });
   return cats;
  } catch (err) {
   dispatchCategories({ type: CategoriesActionsTypes.CATEGORIES_FETCH_FAILED });
   console.error(new Error('Auth Error while loging In.\n' + err));
  }
 } else {
  throw new Error(
   'getAllCategories is not defined by the user. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

export async function getCategory(
 { apiFunctions }: IUseForum,
 { dispatchCategories }: IUseCategories,
 id: string
) {
 if (apiFunctions.getCategory !== undefined) {
  try {
   const cat = await apiFunctions.getCategory(id);
   if (cat) {
    dispatchCategories({
     type: CategoriesActionsTypes.CATEGORY_FETCH_SUCCESS,
     payload: cat,
    });
    return cat;
   }
  } catch (err) {
   dispatchCategories({
    type: CategoriesActionsTypes.CATEGORY_FETCH_FAILED,
    payload: {
     msg: 'Error while getting the category with the id: ' + id + '.\n' + err,
    },
   });
   throw new Error(
    'Error while getting the category with the id: ' + id + '.\n' + err
   );
  }
 } else {
  throw new Error(
   'getCategory is not defined by the user. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

export async function getParentCategory(
 { apiFunctions }: IUseForum,
 { dispatchCategories, categoriesState }: IUseCategories,
 id: string
) {
 if (apiFunctions.getCategory !== undefined) {
  var cat = categoriesState?.categoriesList.find((c) =>
   String(c.id).match(String(id))
  );
  if (cat) return cat;
  else {
   return await getCategory({ apiFunctions }, { dispatchCategories }, id);
  }
 } else {
  throw new Error(
   'getCategory is not defined by the user, and it is needed for the getParentCategory function. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

export function selectCategory(
 { dispatchCategories }: IUseCategories,
 category: ICategory | null
) {
 dispatchCategories({
  type: CategoriesActionsTypes.CATEGORY_SELECT,
  payload: category,
 });
}

export async function getAndSelectCategory(
 { apiFunctions }: IUseForum,
 { dispatchCategories }: IUseCategories,
 id: string
) {
 try {
  const cat = await getCategory({ apiFunctions }, { dispatchCategories }, id);
  if (cat) {
   dispatchCategories({
    type: CategoriesActionsTypes.CATEGORY_SELECT,
    payload: cat,
   });
   return cat;
  }
 } catch (err) {
  console.error(
   new Error(
    'Error while selecting & getting the category with the id: ' +
     id +
     '.\n' +
     err
   )
  );
 }
}

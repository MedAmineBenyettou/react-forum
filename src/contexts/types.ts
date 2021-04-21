const ForumActions = {
 FORUM_LOADING: 'FORUM_LOADING',
 FORUM_INIT: 'FORUM_INIT',
 //  ----------------------------------------------- AUTH
 USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
 USER_LOGIN_FAILED: 'USER_LOGIN_FAILED',
 USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
 USER_LOGOUT_FAILED: 'USER_LOGOUT_FAILED',

 USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
 USER_REGISTER_FAILED: 'USER_REGISTER_FAILED',
 //  ----------------------------------------------- CATEGORIES
 CATEGORIES_FETCH_SUCCESS: 'CATEGORIES_FETCH_SUCCESS',
 CATEGORIES_FETCH_FAILED: 'CATEGORIES_FETCH_FAILED',
 //  ----------------------------------------------- CATEGORY
 CATEGORY_FETCH_SUCCESS: 'CATEGORY_FETCH_SUCCESS',
 CATEGORY_FETCH_FAILED: 'CATEGORY_FETCH_FAILED',
 //  -----------------------------------------------
} as const;

export type TForumActions = typeof ForumActions[keyof typeof ForumActions];

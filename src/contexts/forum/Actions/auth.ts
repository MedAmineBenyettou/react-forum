import { IUserLoginData, IUserRegisterData } from '../../../lib/Auth';
import { IforumApiFunctions } from '../../../lib/Forum';
import { ForumActions } from '../../types';
import { ForumDispatch, useForum } from '../ForumContext';

export async function loginUser(
 dispatch: ForumDispatch,
 apiFunctions: IforumApiFunctions,
 userData: IUserLoginData
) {
 if (apiFunctions.loginUser !== undefined) {
  try {
   const user = await apiFunctions.loginUser(userData);
   if (user) {
    dispatch({ type: ForumActions.USER_LOGIN_SUCCESS, payload: user });
   } else {
    dispatch({ type: ForumActions.USER_LOGIN_FAILED });
   }
  } catch (err) {
   dispatch({ type: ForumActions.USER_LOGIN_FAILED });
   throw new Error('Auth error while loging In.\n' + err);
  }
 } else {
  throw new Error(
   'loginUser is not defined by the user. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

export async function logoutUser(
 dispatch: ForumDispatch,
 apiFunctions: IforumApiFunctions
) {
 if (apiFunctions.logoutUser !== undefined) {
  try {
   await apiFunctions.logoutUser();
   dispatch({ type: ForumActions.USER_LOGOUT_SUCCESS });
  } catch (err) {
   dispatch({ type: ForumActions.USER_LOGOUT_FAILED });
   throw new Error('Auth error while loging Out.\n' + err);
  }
 } else {
  throw new Error(
   'logoutUser is not defined by the user. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

export async function registerUser(
 dispatch: ForumDispatch,
 apiFunctions: IforumApiFunctions,
 registerData: IUserRegisterData
) {
 if (apiFunctions.registerUser !== undefined) {
  try {
   const user = await apiFunctions.registerUser(registerData);
   if (user) {
    dispatch({ type: ForumActions.USER_REGISTER_SUCCESS, payload: user });
   } else {
    dispatch({ type: ForumActions.USER_REGISTER_FAILED });
   }
  } catch (err) {
   dispatch({ type: ForumActions.USER_REGISTER_FAILED });
   throw new Error('Auth error while registering user.\n' + err);
  }
 } else {
  throw new Error(
   'loginUser is not defined by the user. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

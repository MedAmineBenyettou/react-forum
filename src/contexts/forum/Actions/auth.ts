import { IUserLoginData, IUserRegisterData } from '../../../lib/Auth';
import { IforumApiFunctions } from '../../../lib/Forum';
import { ForumActionsTypes } from '../../types';
import { IUseForum } from '../../_common';
import { ForumDispatch } from '../ForumContext';

export async function loginUser(
 { dispatch, apiFunctions }: IUseForum,
 userData: IUserLoginData
) {
 if (apiFunctions.loginUser !== undefined && dispatch) {
  try {
   const { user, token } = await apiFunctions.loginUser(userData);
   if (user) {
    dispatch({
     type: ForumActionsTypes.USER_LOGIN_SUCCESS,
     payload: { user, token },
    });
    return user;
   } else {
    dispatch({ type: ForumActionsTypes.USER_LOGIN_FAILED });
   }
  } catch (err) {
   dispatch({ type: ForumActionsTypes.USER_LOGIN_FAILED });
   throw new Error('Auth error while loging In.\n' + err);
  }
 } else {
  throw new Error(
   'loginUser is not defined by the user. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

export async function logoutUser({ dispatch, apiFunctions }: IUseForum) {
 if (apiFunctions.logoutUser !== undefined && dispatch) {
  try {
   await apiFunctions.logoutUser();
   dispatch({ type: ForumActionsTypes.USER_LOGOUT_SUCCESS });
  } catch (err) {
   dispatch({ type: ForumActionsTypes.USER_LOGOUT_FAILED });
   throw new Error('Auth error while loging Out.\n' + err);
  }
 } else {
  throw new Error(
   'logoutUser is not defined by the user. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

export async function registerUser(
 {
  dispatch,
  apiFunctions,
 }: { dispatch: ForumDispatch; apiFunctions: IforumApiFunctions },
 registerData: IUserRegisterData
) {
 if (apiFunctions.registerUser !== undefined) {
  try {
   const { user, token } = await apiFunctions.registerUser(registerData);
   if (user) {
    dispatch({
     type: ForumActionsTypes.USER_REGISTER_SUCCESS,
     payload: { user, token },
    });
    return user;
   } else {
    dispatch({ type: ForumActionsTypes.USER_REGISTER_FAILED });
   }
  } catch (err) {
   dispatch({ type: ForumActionsTypes.USER_REGISTER_FAILED });
   throw new Error('Auth error while registering user.\n' + err);
  }
 } else {
  throw new Error(
   'loginUser is not defined by the user. Please add it to the apiFunctions property in the Forum component'
  );
 }
}

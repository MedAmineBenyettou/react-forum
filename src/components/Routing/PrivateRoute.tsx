import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { setAlert } from '../../contexts/Alert/Actions/alertActions';
import { AlertType, useAlert } from '../../contexts/Alert/AlertContext';
import { setCategoriesState } from '../../contexts/forum/Actions/forum';
import {
 ICategoriesContainerState,
 useForum,
} from '../../contexts/forum/ForumContext';

interface props {
 component: React.ElementType;
 path: string;
}

export const PrivateRoute: React.FC<props> = ({
 component: Component,
 ...rest
}) => {
 const {
  state: {
   loading,
   user: { isAuthenticated },
  },
  dispatch,
 } = useForum();
 const { dispatchAlert } = useAlert();
 useEffect(() => {
  if (!(localStorage.getItem('forumToken') || (!loading && isAuthenticated))) {
   setAlert({
    dispatchAlert,
    alertType: AlertType.DANGER,
    msg: 'You need to login to view this page.',
   });
   setCategoriesState({ dispatch }, ICategoriesContainerState.LOGIN);
  }
 }, [loading, isAuthenticated, dispatchAlert, dispatch]);
 return (
  <Route
   {...rest}
   render={(props) => {
    if (localStorage.getItem('forumToken') || (!loading && isAuthenticated))
     return <Component {...props} />;
    else {
     return <Redirect to="/" />;
    }
   }}
  />
 );
};

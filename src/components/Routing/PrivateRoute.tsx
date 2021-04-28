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
   isReady,
   categoriesContainerState,
  },
  dispatch,
 } = useForum();
 const { dispatchAlert } = useAlert();
 useEffect(() => {
  if (
   !(
    localStorage.getItem('forumToken') ||
    (!loading && isAuthenticated && isReady)
   )
  ) {
   setAlert({
    dispatchAlert,
    alertType: AlertType.DANGER,
    msg: 'You need to login to view this page.',
   });
   setCategoriesState(
    { dispatch, categoriesContainerState },
    ICategoriesContainerState.LOGIN
   );
  }
 }, [
  loading,
  isAuthenticated,
  dispatchAlert,
  dispatch,
  categoriesContainerState,
  isReady,
 ]);
 return (
  <Route
   {...rest}
   render={(props) => {
    if (!loading && isAuthenticated && isReady) return <Component {...props} />;
    else {
     return <Redirect to="/" />;
    }
   }}
  />
 );
};

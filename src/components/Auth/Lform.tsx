import React, { useState } from 'react';
import person from '../../images/person.png';
import lock from '../../images/lock.png';
import { loginUser } from '../../contexts/forum/Actions/auth';
import {
 ICategoriesContainerState,
 useForum,
} from '../../contexts/forum/ForumContext';
import { AlertType, useAlert } from '../../contexts/Alert/AlertContext';
import { setAlert } from '../../contexts/Alert/Actions/alertActions';
import { setCategoriesState } from '../../contexts/forum/Actions/forum';

export const Lform: React.FC<{ changeForm: () => void }> = ({ changeForm }) => {
 const {
  dispatch,
  state: { apiFunctions, categoriesContainerState },
 } = useForum();

 const { dispatchAlert } = useAlert();

 const onSubmit = async (e: any) => {
  e.preventDefault();
  if (password.length >= 6) {
   await loginUser({ dispatch, apiFunctions }, formData);
   setAlert({
    dispatchAlert,
    msg: 'Login was successful!',
    alertType: AlertType.SUCCESS,
   });
   setCategoriesState(
    { dispatch, categoriesContainerState },
    ICategoriesContainerState.ALL
   );
  } else {
   setAlert({
    dispatchAlert,
    msg: 'Login failed',
    alertType: AlertType.DANGER,
   });
  }
 };

 const [formData, setFormData] = useState({ username: '', password: '' });

 const onChange = (e: any) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
 };
 const { username, password } = formData;
 return (
  <>
   {/*//! Header */}
   <div className="LRheader col s12 container">
    <h2 className="col s12 ">Sign in</h2>
    <p className="col s12 ">A place to share</p>
   </div>
   <hr className="col s12" style={{ margin: '5px 0 20px 0' }} />
   <div className="Lform">
    <form id="loginForm" className="col s12" onSubmit={onSubmit}>
     <div className="row">
      <div className="input-field col s11">
       <input
        name="username"
        placeholder="Username"
        defaultValue={username}
        onChange={onChange}
        required
       />
       <div className="prefix">
        <img src={person} alt="mail" />
       </div>
      </div>
      <div id="lPassword" className="input-field col s11">
       <input
        type="password"
        name="password"
        placeholder="Password"
        defaultValue={password}
        onChange={onChange}
        required
       />
       <div className="prefix">
        <img src={lock} alt="lock" />
       </div>
      </div>
      <label className="right">Forgot password?</label>
     </div>
    </form>
    {/*//! down form  */}
    <div className=" col s12 valign-wrapper">
     <button
      type="submit"
      form="loginForm"
      className="btn col s4 right center-on-small-only"
     >
      Log In
     </button>
    </div>
    <hr className="col s12" style={{ margin: '20px 0 0 0' }} />
    <span className="AuthMoreInfo">
     You don't have an account?
     <b className="green-text text-lighten2" onClick={changeForm}>
      {' '}
      Register!
     </b>
    </span>
   </div>
  </>
 );
};

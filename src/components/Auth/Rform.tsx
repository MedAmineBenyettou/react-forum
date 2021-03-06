import React, { useState } from 'react';
import person from '../../images/person.png';
import mail from '../../images/mail.png';
import lock from '../../images/lock.png';
import { registerUser } from '../../contexts/forum/Actions/auth';
import {
 ICategoriesContainerState,
 useForum,
} from '../../contexts/forum/ForumContext';
import { AlertType, useAlert } from '../../contexts/Alert/AlertContext';
import { setAlert } from '../../contexts/Alert/Actions/alertActions';

export const Rform: React.FC<{ changeForm: () => void }> = ({ changeForm }) => {
 const {
  dispatch,
  state: { apiFunctions, categoriesContainerState },
 } = useForum();

 const { dispatchAlert } = useAlert();

 const [formData, setData] = useState({
  username: '',
  email: '',
  password: '',
  password2: '',
 });

 const { username, email, password, password2 } = formData;
 const onSubmit = async (e: any) => {
  e.preventDefault();
  if (password.length >= 6 && password2.length >= 6) {
   if (password === password2) {
    formData.email = formData.email.trim().toLowerCase();
    formData.username = formData.username.trim();
    await registerUser({ dispatch, apiFunctions }, formData);
    setCategoriesState(
     { dispatch, categoriesContainerState },
     ICategoriesContainerState.ALL
    );
   } else {
    setAlert({
     dispatchAlert,
     alertType: AlertType.WARNING,
     msg: "Passwords don't match",
    });
   }
  } else {
   setAlert({
    dispatchAlert,
    alertType: AlertType.WARNING,
    msg: "Passwords' length must at least be 6",
   });
  }
 };

 const onChange = (e: any) => {
  if (e.target.name === 'username') {
   formData.username = formData.username.trim();
   setData({ ...formData, [e.target.name]: e.target.value.trim() });
  } else setData({ ...formData, [e.target.name]: e.target.value });
 };
 return (
  <>
   {/*//! Header */}
   <div className="LRheader col s12 container">
    <h2 className="col s12 ">Sign up</h2>
    <p className="col s12 ">And join the community!</p>
   </div>
   <hr className="col s12" style={{ margin: '5px 0 20px 0' }} />
   <div className="Rform">
    <form
     id="RForm"
     className="col s12"
     onSubmit={onSubmit}
     autoComplete={'false'}
    >
     <div className="row">
      <div className="input-field col s11">
       <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        autoComplete="off"
        onChange={onChange}
        required
       />
       <div className="prefix">
        <img src={person} alt="person" />
       </div>
      </div>
      <div className="input-field col s11">
       <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
        required
       />
       <div className="prefix">
        <img src={mail} alt="mail" />
       </div>
      </div>
      <div className="input-field col s11">
       <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        autoComplete="off"
        onChange={onChange}
        minLength={6}
        required
       />
       <div className="prefix">
        <img src={lock} alt="lock" />
       </div>
      </div>
      <div className="input-field col s11">
       <input
        type="password"
        name="password2"
        placeholder="Confirm Password"
        value={password2}
        autoComplete="off"
        onChange={onChange}
        minLength={6}
        required
       />
      </div>
     </div>
    </form>
    {/*//! down form  */}
    <div className=" col s12 valign-wrapper">
     <button
      type="submit"
      form="RForm"
      className="btn col s4 right center-on-small-only green"
     >
      Register
     </button>
    </div>
    <hr className="col s12" style={{ margin: '20px 0 0 0' }} />
    <span className="AuthMoreInfo">
     You already have an account ?
     <b className="blue-text" onClick={changeForm}>
      {' '}
      Log in!
     </b>
    </span>
   </div>
  </>
 );
};
function setCategoriesState(
 arg0: {
  dispatch: import('../../contexts/forum/ForumContext').ForumDispatch;
  categoriesContainerState: any;
 },
 ALL: any
) {
 throw new Error('Function not implemented.');
}

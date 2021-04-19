import React, { useState } from 'react';
import mail from '../../images/mail.png';
import lock from '../../images/lock.png';
// import { login } from '../../actions/auth';
// import { setAlert } from '../../actions/alert';

export const Lform: React.FC<{ changeForm: () => void }> = ({ changeForm }) => {
 const onSubmit = (e: any) => {
  e.preventDefault();
  if (password.length >= 6) {
   formData.email = formData.email.trim().toLowerCase();
   //    login(formData.email, formData.password);
  } else {
   //    setAlert('40008', 'danger');
  }
 };

 const [formData, setFormData] = useState({ email: '', password: '' });

 const onChange = (e: any) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
 };
 const { email, password } = formData;
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
        type="email"
        name="email"
        placeholder="Email"
        defaultValue={email}
        onChange={onChange}
        required
       />
       <div className="prefix">
        <img src={mail} alt="mail" />
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

import React from 'react';
import { LRform } from './LRform';
import { Redirect } from 'react-router-dom';
import { useForum } from '../../contexts/forum/ForumContext';

import '../../css/Auth/Auth.css';
import '../../css/Auth/LRform.css';

//! =====
export const Auth = () => {
 const {
  state: {
   user: { isAuthenticated },
  },
 } = useForum();

 if (isAuthenticated) {
  return <Redirect to="/" />;
 }

 return (
  <div id="LRscreen_id" className="LRscreen row col s8 animated fadeIn">
   <div className="LRform center">
    {/*//! Forms */}
    <LRform />
   </div>

   {/*//! Footer  */}
   <div className="LRfooter col s12">
    <div className="col s12 container">
     <p>React Forum</p>
    </div>
   </div>
  </div>
 );
};

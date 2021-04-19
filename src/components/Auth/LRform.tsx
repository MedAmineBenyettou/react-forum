import React, { useState, useEffect } from 'react';
import { Lform } from './Lform';
import { Rform } from './Rform';
import $ from 'jquery';

//! ==
export const LRform = () => {
 const [isLogin, setLogin] = useState(true);
 const changeForm = () => {
  $('.LRform').removeClass('animated fadeIn');
  $('.LRform').addClass('animated fadeOut');
  setTimeout(() => {
   setLogin(!isLogin);
   $('.LRform').removeClass('animated fadeOut');
   $('.LRform').addClass('animated fadeIn');
  }, 250);
 };

 useEffect(() => {
  if (isLogin) require('../../css/Auth/Lform.css');
  else require('../../css/Auth/Rform.css');
 });

 return (
  <>
   {isLogin ? (
    <Lform changeForm={changeForm} />
   ) : (
    <Rform changeForm={changeForm} />
   )}
  </>
 );
};

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import M from 'materialize-css';
import '../../css/Navbar/Navbar.css';

const icon = require('../../images/default.png');

export const Navbar = () => {
 var links = [
  {
   title: 'All Categories',
   link: '/',
  },
  {
   title: 'Category1',
   link: '/category1',
  },
 ];

 const handleChangeTab = () => {};

 useEffect(() => {
  M.Tabs.init($('#forum-tabs'), {
   onShow: handleChangeTab,
  });
 }, []);

 return (
  <nav className="forum-navbar nav-wrapper">
   {/* HEADER */}
   <div className="header row col s12">
    <img alt="game-icon" src={icon} />
    <div className="">
     {links.map((l) => (
      <Link className="breadcrumb" key={l.title} to={l.link}>
       {l.title}
      </Link>
     ))}
    </div>
   </div>
   {/* LINKS */}
   <ul id="forum-tabs" className="tabs col s12">
    <li className="tab col s1">
     <Link className="active" to="/">
      Categories
     </Link>
    </li>
    <li className="tab col s1">
     <Link to="/top">Top</Link>
    </li>
    <li className="tab col s1">
     <Link to="/latest">Latest</Link>
    </li>
   </ul>
  </nav>
 );
};

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import M from 'materialize-css';

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
   <div className="header col s12">
    {links.map((l) => (
     <Link className="breadcrumb" key={l.title} to={l.link}>
      {l.title}
     </Link>
    ))}
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

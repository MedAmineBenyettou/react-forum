import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
 var links = [
  {
   title: 'All Categories',
   link: '/',
  },
 ];

 return (
  <div className="forum-navbar nav-wrapper">
   <div className="header col s12">
    {links.map((l) => (
     <Link key={l.title} to={l.link}>
      {l.title}
     </Link>
    ))}
   </div>
   <div className="links">
    <Link to="/categories"></Link>
   </div>
  </div>
 );
};

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import M from 'materialize-css';
import { useHistory } from 'react-router-dom';
import '../../css/Navbar/Navbar.css';
import {
 ICategoriesContainerState,
 useForum,
} from '../../contexts/forum/ForumContext';
import { setCategoriesState } from '../../contexts/forum/Actions/forum';

const icon = require('../../images/default.png');

export const Navbar = () => {
 const {
  state: {
   user: { isAuthenticated },
   categoriesContainerState,
  },
  dispatch,
 } = useForum();
 const history = useHistory();
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

 const handleChangeTab = (type: ICategoriesContainerState) => {
  history.replace('/');
  setCategoriesState({ dispatch, categoriesContainerState }, type);
 };

 useEffect(() => {
  M.Tabs.init($('#forum-tabs'));
 }, [isAuthenticated]);

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
    <li
     id={`${ICategoriesContainerState.ALL}_tab`}
     onClick={() => handleChangeTab(ICategoriesContainerState.ALL)}
     className="tab col s1"
    >
     <Link className="active" to="/">
      All Categories
     </Link>
    </li>
    <li
     id={`${ICategoriesContainerState.TOP}_tab`}
     onClick={() => handleChangeTab(ICategoriesContainerState.TOP)}
     className="tab col s1"
    >
     <Link to="/">Top</Link>
    </li>
    <li
     id={`${ICategoriesContainerState.LATEST}_tab`}
     onClick={() => handleChangeTab(ICategoriesContainerState.LATEST)}
     className="tab col s1"
    >
     <Link to="/">Latest</Link>
    </li>
    {!isAuthenticated && (
     <li
      id={`${ICategoriesContainerState.LATEST}_tab`}
      onClick={() => handleChangeTab(ICategoriesContainerState.LOGIN)}
      className="tab col s1 right"
     >
      <Link to="/">Login</Link>
     </li>
    )}
   </ul>
  </nav>
 );
};

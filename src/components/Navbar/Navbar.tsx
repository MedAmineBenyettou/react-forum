import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import M from 'materialize-css';
import { ICategoriesContainerState } from '../Forum';
import { useHistory } from 'react-router-dom';
import '../../css/Navbar/Navbar.css';

const icon = require('../../images/default.png');
interface props {
 setCategoriesState: React.Dispatch<
  React.SetStateAction<ICategoriesContainerState>
 >;
}

export const Navbar: React.FC<props> = ({ setCategoriesState }) => {
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
  setCategoriesState(type);
 };

 useEffect(() => {
  M.Tabs.init($('#forum-tabs'));
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
    <li onClick={() => handleChangeTab('ALL')} className="tab col s1">
     <Link className="active" to="/">
      All Categories
     </Link>
    </li>
    <li onClick={() => handleChangeTab('TOP')} className="tab col s1">
     <Link to="/">Top</Link>
    </li>
    <li onClick={() => handleChangeTab('LATEST')} className="tab col s1">
     <Link to="/">Latest</Link>
    </li>
    <li onClick={() => handleChangeTab('LOGIN')} className="tab col s1 right">
     <Link to="/">Login </Link>
    </li>
   </ul>
  </nav>
 );
};

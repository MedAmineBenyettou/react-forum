import React, { useEffect, useState } from 'react';
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
import { useCategories } from '../../contexts/Categories/CategoriesContext';
import { getParentCategory } from '../../contexts/Categories/actions/CategoriesActions';

const icon = require('../../images/default.png');

export const Navbar = () => {
 const [ancestors, setAncestors] = useState<JSX.Element[]>([]);

 const {
  state: {
   user: { isAuthenticated },
   categoriesContainerState,
   isReady,
   apiFunctions,
  },
  dispatch,
 } = useForum();

 const { categoriesState, dispatchCategories } = useCategories();

 const history = useHistory();
 const handleChangeTab = (type: ICategoriesContainerState) => {
  history.replace('/');
  //   selectCategory({ dispatchCategories }, null);
  setCategoriesState({ dispatch, categoriesContainerState }, type);
 };
 useEffect(() => {
  M.Tabs.init($('#forum-tabs'));
 }, [isAuthenticated]);

 useEffect(() => {
  var arr: { title: any; link: any }[] = [];
  var p = categoriesState.selectedCategory;
  const check = new Promise((resolve) => {
   if (!categoriesState.selectedCategory && ancestors.length > 0)
    setAncestors([]);
   resolve(null);
  });
  const addParent = (id: string) => {
   getParentCategory(
    { apiFunctions },
    { dispatchCategories, categoriesState },
    id
   ).then((t) => {
    if (t) {
     arr.push({
      title: t.name,
      link: `/categories/${t.id}`,
     });
     if (t.parentId) addParent(t.parentId);
    }
   });
  };
  const getP = new Promise((resolve) => {
   if (p) {
    arr.push({
     title: p.name,
     link: `/categories/${p.id}`,
    });
    if (p.parentId) addParent(p.parentId);
    resolve(null);
   }
  });
  getP.then(() =>
   check.then(() => {
    setAncestors(
     arr.reverse().map((l) => (
      <Link className="breadcrumb" key={l.link} to={l.link}>
       {l.title}
      </Link>
     ))
    );
   })
  );
 }, [
  categoriesState.loading,
  isReady,
  apiFunctions,
  categoriesState,
  dispatchCategories,
  history.location.pathname,
  ancestors.length,
 ]);

 return (
  <nav className="forum-navbar nav-wrapper">
   {/* HEADER */}
   <div className="header row col s12">
    <img alt="game-icon" src={icon} />
    <div className="">
     <Link className="breadcrumb" key="/" to="/">
      All categories
     </Link>
     {ancestors}
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

import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Categories/Category.css';
import { ICategory } from '../../lib/Category';

export const Category: React.FC<ICategory & { categories: ICategory[] }> = ({
 name,
 description,
 categories,
 id,
}) => {
 const defaultImg = require('../../images/default.png');

 return (
  <div className="forum-category">
   <Link to={`/categories/${id}`}>
    <div className="header row col s12">
     <div className="cat-icon">
      <img className="cat-icon-img" alt="cat" src={defaultImg} />
     </div>
     <div className="details">
      <span className="title">{name}</span>
      <p className="info">{description}</p>
     </div>
    </div>
   </Link>
   <div className="sub-cats row col s12">
    {categories?.map((c) => (
     <Link to={`/categories/${c.id}`} key={c.id} className="sub-cat">
      <img className="sub-cat-icon-img" alt="sub-cat" src={defaultImg} />
      <span className="sub-cat-title col s11">{c.name}</span>
     </Link>
    ))}
   </div>
  </div>
 );
};

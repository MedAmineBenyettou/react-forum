import React from 'react';
import '../../css/Categories/Category.css';

export const Category = () => {
 const defaultImg = require('../../images/default.png');

 return (
  <div className="forum-category">
   <div className="header row col s12">
    <div className="cat-icon">
     <img className="cat-icon-img" alt="cat" src={defaultImg} />
    </div>
    <div className="details">
     <span className="title">Category Name</span>
     <p className="info">Category Info</p>
    </div>
   </div>
   <div className="sub-cats row col s12">
    {/*//TODO Make it auto */}
    <span className="sub-cat">
     <img className="sub-cat-icon-img" alt="sub-cat" src={defaultImg} />
     <span className="sub-cat-title col s11">
      Sub Cat1 Very veryyy long Title
     </span>
    </span>
    <span className="sub-cat">
     <img className="sub-cat-icon-img" alt="sub-cat" src={defaultImg} />
     <span className="sub-cat-title col s11">Sub Cat Title</span>
    </span>
    <span className="sub-cat">
     <img className="sub-cat-icon-img" alt="sub-cat" src={defaultImg} />
     <span className="sub-cat-title col s11">Sub Cat Title</span>
    </span>
   </div>
  </div>
 );
};

import React, { useEffect } from 'react';
import { Category } from './Category';
import { ICategoriesContainerState } from '../Forum';
import '../../css/Categories/Categories.css';

interface props {
 view: ICategoriesContainerState;
}

export const Categories: React.FC<props> = ({ view }) => {
 useEffect(() => {
  switch (view) {
   case 'ALL':
    break;
   case 'LATEST':
    break;
   case 'TOP':
    break;
   case 'LOGIN':
    break;
   default:
    throw new Error("Couldn't handle the view: " + view);
  }
 }, [view]);

 return (
  <div className="Categories">
   <Category />
   <Category />
   <Category />
  </div>
 );
};

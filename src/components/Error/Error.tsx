import React from 'react';
import err from '../../images/error.svg';
import '../../css/Error/Error.css';

interface Props {
 msg: string;
}

export const Error: React.FC<Props> = ({ msg }) => {
 return (
  <div className="forum-error">
   <div className="icon">
    <img alt="error" src={err} />
   </div>
   <div className="msg">
    <p>{msg}</p>
   </div>
  </div>
 );
};

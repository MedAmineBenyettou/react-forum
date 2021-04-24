import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useAlert } from '../../contexts/Alert/AlertContext';
import '../../css/Alert/Alert.css';

export const Alert = () => {
 const { state } = useAlert();
 return (
  <TransitionGroup enter={true} className="alert-container animate">
   {state !== null &&
    state.length > 0 &&
    state.map((a) => (
     <CSSTransition
      classNames={{ enter: 'fadeInDown', exit: 'fadeOut' }}
      timeout={5000}
      key={a.id}
      className={`alert alert-${a.alertType} animate`}
     >
      {a.msg}
     </CSSTransition>
    ))}
  </TransitionGroup>
 );
};

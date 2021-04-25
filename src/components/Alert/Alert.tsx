import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useAlert } from '../../contexts/Alert/AlertContext';
import $ from 'jquery';
import '../../css/Alert/Alert.css';

export const Alert = () => {
 const { state } = useAlert();
 const nodeRef = React.useRef(null);
 function renderAlerts() {
  return state.map((a) => (
   <CSSTransition
    nodeRef={nodeRef}
    classNames={{
     enter: 'alert-transition-enter',
     enterActive: 'alert-transition-enter-active',
     exit: 'alert-transition-exit',
     exitActive: 'alert-transition-exit-active',
    }}
    timeout={300}
    key={a.id}
    className={`alert alert-${a.alertType}`}
   >
    <p ref={nodeRef}>{a.msg}</p>
   </CSSTransition>
  ));
 }
 return (
  <TransitionGroup className="alert-container">
   {state !== null && state.length > 0 && renderAlerts()}
  </TransitionGroup>
 );
};

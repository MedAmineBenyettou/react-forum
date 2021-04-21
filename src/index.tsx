import React from 'react';
import ReactDOM from 'react-dom';
import Forum from './components/Forum';

import './css/materialize/materialize.css';
import './css/Index.css';
import './css/animate.css';

ReactDOM.render(
 <React.StrictMode>
  <Forum apiFunctions={{}} />
 </React.StrictMode>,
 document.getElementById('root')
);

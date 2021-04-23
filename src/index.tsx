import React from 'react';
import ReactDOM from 'react-dom';
import Forum from './components/Forum';
import { testApiFunctions } from './__test_variables__/testApiFunctions';

import './css/materialize/materialize.css';
import './css/Index.css';
import './css/animate.css';

if ((process.env.PUBLIC_API_MOCKING = 'enabled')) require('./msw/mocks/index');

ReactDOM.render(
 <React.StrictMode>
  <Forum apiFunctions={testApiFunctions} />
 </React.StrictMode>,
 document.getElementById('root')
);

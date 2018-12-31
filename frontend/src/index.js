import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <AppRoutes></AppRoutes>
  </BrowserRouter>,
  document.getElementById('root')
);


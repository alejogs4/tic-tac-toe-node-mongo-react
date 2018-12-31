import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from './components/Pages/App';
import Game from './components/Pages/Game';

const AppRoutes = () => (
  <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/game/:id' component={Game} />
  </Switch>
)

export default AppRoutes
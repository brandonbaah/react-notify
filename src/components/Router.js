import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../App';
import User from './User';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/user/:id" component={User}/>
      </Switch>
  </BrowserRouter>
);

export default AppRouter;
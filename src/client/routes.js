import App from './app/app.react';
import Home from './pages/home.react';
import Login from './pages/login.react';
import Me from './pages/me.react';
import NotFound from './pages/notfound.react';
import MindMap from './pages/mindmap.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />
    <NotFoundRoute handler={NotFound} name="not-found" />
    <Route handler={Login} name="login" />
    <Route handler={Me} name="me" />
    <Route handler={MindMap} name="mindmap" />
  </Route>
);

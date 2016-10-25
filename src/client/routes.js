import React from 'react';
import { Route, IndexRoute } from 'react-router';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import Landing from './components/Landing';
import About from './components/About';
import Content from './components/Content';
import EditorPage from './components/EditorPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
import UserProfile from './components/UserProfile';


export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='content' component={Content} />
    <Route path='about' component={About} />
    <Route path='signup' component={Signup} />
    <Route path='login' component={Login} />
    <Route path='logout' component={Logout} />
    <Route path='profile' component={UserProfile} />
    <Route path='editor' component={EditorPage} />
    <Route path='*' component={NotFound} />
  </Route>
);
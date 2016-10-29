import React from 'react';
import { Route, IndexRoute } from 'react-router';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import Landing from './components/Landing';
import About from './components/About';
import Archive from './components/Archive';
import EditorPage from './components/EditorPage';
import Signup from './components/Signup';
import Login from './components/Login';
import EditorLogin from './components/EditorLogin'
import Logout from './components/Logout';
import EditorLogout from './components/EditorLogout';
import NotFound from './components/NotFound';
import UserProfile from './components/UserProfile';


export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='archive' component={Archive} />
    <Route path='about' component={About} />
    <Route path='signup' component={Signup} />
    <Route path='login' component={Login} />
    <Route path='logout' component={Logout} />
    <Route path='admin-logout' component={EditorLogout} />
    <Route path='profile' component={UserProfile} />
    <Route path='editor' component={EditorLogin} />
    <Route path='new-post' component={EditorPage} />
    <Route path='*' component={NotFound} />
  </Route>
);
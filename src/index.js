import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './firebase/config';
import Home from './pages/Home';
import Signup from './pages/Signup';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { UserProvider } from './firebase/UserProvider';

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
);

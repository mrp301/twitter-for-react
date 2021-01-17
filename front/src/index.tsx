import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// pages
import Index from './views/pages/index';
import Home from './views/pages/home';
import NoMatch from './views/pages/nomatch';
import User from './views/pages/user';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Link to="/home">home</Link><br />
      <Link to="/mrble">mrble</Link><br />
      <Link to="/">index</Link><br />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/home" component={Home} />
        <Route path="/:id" children={<User />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// styles
import './index.css';
import GrobalStyle from './components/style/GrobalStyle';

// pages
import Home from './pages/home';
import Login from './pages/login';
import User from './pages/user';

// components
import TheHeader from './components/layout/TheHeader';

// container
import AuthContainer from './containers/authCotainer';

ReactDOM.render(
  <React.StrictMode>
    <GrobalStyle />
    <AuthContainer>
      <Router>
        <TheHeader>
          <Link to="/home">home</Link>
          <Link to="/">index</Link>
          <Link to="/user">User</Link>
        </TheHeader>
        <Login>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/:id" children={<User />} />
          </Switch>
        </Login>
      </Router>
    </AuthContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

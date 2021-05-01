import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// styles
import "./index.css";
import GrobalStyle from "./components/style/GrobalStyle";

// pages
import Index from "./pages/index";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";

// components
import TheHeader from "./components/layout/TheHeader";
import AuthContainer from "./components/authCotainer";
import { AuthProvider } from "./components/authCotainer";

const App: React.FC = () => {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(true);
  }, []);

  return (
    <>
      <GrobalStyle />
      {isLoad ? (
        <AuthProvider>
          <Router>
            <TheHeader>
              <Link to="/home">home</Link>
              <Link to="/">index</Link>
              <Link to="/user">User</Link>
            </TheHeader>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <AuthContainer>
                <Route path="/home" component={Home} />
                <Route path="/:id" children={<User />} />
              </AuthContainer>
            </Switch>
          </Router>
        </AuthProvider>
      ) : (
        <TheHeader>aaa</TheHeader>
      )}
    </>
  );
};

export default App;

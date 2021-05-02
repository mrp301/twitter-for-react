import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import "./index.scss";
import GrobalStyle from "./components/style/GrobalStyle";

// pages
import Index from "./pages/index";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";

// components
import AuthContainer from "./components/AuthCotainer";
import { AuthProvider } from "./components/AuthCotainer";
import Loading from "./components/Loading";

const App: React.FC = () => {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    // debugger;
    setTimeout(() => {
      setIsLoad(true);
    }, 500);
  }, []);

  return (
    <>
      <GrobalStyle />
      {isLoad ? (
        <AuthProvider>
          <Router>
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
        <Loading />
      )}
    </>
  );
};

export default App;

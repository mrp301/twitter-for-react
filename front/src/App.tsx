/** @jsxImportSource @emotion/react */
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import * as H from "history";

// styles
import "./index.scss";
import GrobalStyle from "./components/style/GrobalStyle";

// pages
import { Index } from "./pages/index";
import { Signup } from "./pages/signup";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { User } from "./pages/user";
import { Tweet, Profile } from "./pages/modal/index";

// components
import { AuthProvider, AuthContainer } from "./components/AuthCotainer";

const App: React.FC = () => {
  const location = useLocation<{ background: H.Location }>();
  const background = location.state?.background;

  return (
    <>
      <GrobalStyle />
      <AuthProvider>
        <Switch location={background || location}>
          <Route exact path="/" component={Index} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/user/:id">
            <AuthContainer>
              <User />
            </AuthContainer>
          </Route>
        </Switch>
        <AuthContainer>
          <Route path="/tweet" component={Tweet} />
          <Route path="/profile" component={Profile} />
        </AuthContainer>
      </AuthProvider>
    </>
  );
};

export default App;

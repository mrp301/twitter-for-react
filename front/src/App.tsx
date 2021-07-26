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
import { Signup2 } from "./pages/signup2";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { User } from "./pages/user";
import { AllUsers } from "./pages/allUsers";
import { Tweet, Profile } from "./pages/modal/index";
import { FollowUsers } from "./pages/user/index";

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
          <Route exact path="/signup2" component={Signup2} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route path="/user/:id">
            <AuthContainer>
              <User />
            </AuthContainer>
          </Route>
          <Route exact path="/allusers" component={AllUsers} />
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

import logo from "./logo.svg";
import "./App.css";
import TopNav from "./features/nav/Navbar";
import WelcomePage from "./features/welcomePage/WelcomePage";
import PrivateRouteWelcome from "./features/privateRoute/PrivateRouteWelcome";
import PrivateRouteMembers from "./features/privateRoute/PrivateRouteMembers";
import { CreateProfile } from "./features/createProfile/CreateProfile";

import { AuthProvider } from "./contexts/AuthContext";
import { CardsGroup } from "./features/memberCards/CardsGroup";
import Container from "@material-ui/core/Container";
import { Provider } from 'react-redux'
import store from './redux/store'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <AuthProvider>
        <PrivateRouteWelcome
          exact
          path="/"
          component={WelcomePage}
        ></PrivateRouteWelcome>
        <Route
          path={"/(.+)"}
          render={() => (
            <>
              <TopNav />
              <Provider store={store}>
                <PrivateRouteMembers exact
                  path="/members"
                  component={CardsGroup}
                ></PrivateRouteMembers>
                <PrivateRouteMembers
                  path="/createprofile"
                  component={CreateProfile}
                ></PrivateRouteMembers>
                <Route
                  path="/members/:id"
                >
                  <CreateProfile changable={true} />
                </Route></Provider>
            </>
          )}
        ></Route>
      </AuthProvider>
    </Router>
  );
}

export default App;

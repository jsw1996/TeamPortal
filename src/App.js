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
import Members from './features/memberCards/Members'
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import KanbanPage from "./features/kanban/KanbanPage";

function App() {
  let createNew = <CreateProfile changable={true} newProfile={true} />



  return (
    <Router>
      <AuthProvider>
        <Provider store={store}>

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
                <Switch>
                  <PrivateRouteMembers exact
                    path="/members"
                    component={Members}
                  />
                  <PrivateRouteMembers exact
                    path="/tasks"
                    component={KanbanPage}
                  />
                  <PrivateRouteMembers
                    path="/buildprofile"
                    component={() => <CreateProfile changable={true} newProfile={true} />}
                  />
                  <PrivateRouteMembers
                    path="/members/:id"
                    component={() => <CreateProfile changable={false} newProfile={false} />}
                  />

                </Switch>
              </>
            )}
          ></Route>
        </Provider>
      </AuthProvider>
    </Router>
  );
}

export default App;

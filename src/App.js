import logo from './logo.svg';
import './App.css';
import TopNav from './features/nav/Navbar'
import WelcomePage from './features/welcomePage/WelcomePage';
import PrivateRouteWelcome from "./features/privateRoute/PrivateRouteWelcome"
import PrivateRouteMembers from "./features/privateRoute/PrivateRouteMembers"
import { CreateProfile } from "./features/createProfile/CreateProfile"

import { AuthProvider } from "./contexts/AuthContext";
import { CardsGroup } from "./features/memberCards/CardsGroup";
function App() {
  return (
    <Router>
      <AuthProvider>
        <PrivateRouteWelcome exact path="/" component={WelcomePage}></PrivateRouteWelcome>
        <Route path={"/(.+)"} render={() => (<>
          <TopNav />
          <PrivateRouteMembers path="/members" component={CardsGroup}></PrivateRouteMembers>
          <PrivateRouteMembers path="/createprofile" component={CreateProfile}></PrivateRouteMembers>

        </>

        )}></Route>


      </AuthProvider>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import TopNav from './features/nav/Navbar'
import WelcomePage from './features/welcomePage/WelcomePage';
import PrivateRouteWelcome from "./features/privateRoute/PrivateRouteWelcome"
import PrivateRouteMembers from "./features/privateRoute/PrivateRouteMembers"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { AuthProvider } from './contexts/AuthContext'
import { CardsGroup } from './features/memberCards/CardsGroup'
function App() {
  return (
    <Router>
      <AuthProvider>
        <TopNav/>
        <PrivateRouteWelcome exact  path="/" component={WelcomePage}></PrivateRouteWelcome>
        <PrivateRouteMembers path="/members" component={CardsGroup}></PrivateRouteMembers>
      </AuthProvider>
    </Router>
  );
}

export default App;

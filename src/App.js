import logo from './logo.svg';
import './App.css';
import Navbar from './features/nav/Navbar'
import WelcomePage from './features/welcomePage/WelcomePage';
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
        <Navbar/>
        <Route exact path="/" component={WelcomePage}></Route>
        <Route path="/members" component={CardsGroup}></Route>
      </AuthProvider>
    </Router>
  );
}

export default App;

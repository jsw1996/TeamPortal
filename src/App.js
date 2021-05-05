import logo from './logo.svg';
import './App.css';
import Navbar from './features/nav/Navbar'
import WelcomePage from './features/welcomePage/WelcomePage';
// import Navbar from './features/nav/Navbar'
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
    <>
      <Navbar />

      <Route path="/members" component={CardsGroup}></Route>
    </>
  );
}

export default App;

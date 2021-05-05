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

import {AuthProvider} from './contexts/AuthContext'
function App() {
  return (
    // <Router>
    <AuthProvider>      <WelcomePage />
</AuthProvider>
    // </Router>
  );
}

export default App;

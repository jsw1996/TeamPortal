import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './features/nav/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WelcomePage from './features/welcomePage/WelcomePage';
import { CardsGroup } from './features/memberCards/CardsGroup';
import { AuthProvider } from './contexts/AuthContext'


ReactDOM.render(
  <React.StrictMode>
    <Router>

      <AuthProvider>
        <Route exact path="/" component={WelcomePage}></Route>
        <App />
      </AuthProvider>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

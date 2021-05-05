import React, {useState}from "react";
// import { Menu, Container } from "semantic-ui-react";

import 'semantic-ui-css/semantic.min.css'

import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: 'fixed',
    top:0
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },




}));
const TopNav = () => {
  const classes = useStyles();
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      console.log("Failed to log out")
      setError("Failed to log out")
    }
  }
    return (
    // <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
    //   <Toolbar className={classes.toolbar}>
    //     <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
    //       Team Portal
    //     </Typography>
    //     {error && <p >{error}</p>}
    //     <nav>
    //       <Link variant="button" color="textPrimary" href="#" className={classes.link}>
    //         Features
    //       </Link>
    //       <Link variant="button" color="textPrimary" href="#" className={classes.link}>
    //         Enterprise
    //       </Link>
    //       <Link variant="button" color="textPrimary" href="#" className={classes.link}>
    //         Support
    //       </Link>
    //     </nav>
    //     <Button onClick = {handleLogout} href="#" color="primary" variant="outlined" className={classes.link}>
    //       Log Out
    //     </Button>
    //   </Toolbar>
    // </AppBar>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      {/* <Nav.Link eventKey={2} href="#memes"> */}
      <Button variant="outline-primary" onClick={handleLogout}>Log Out</Button>{' '}

      {/* </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default TopNav;

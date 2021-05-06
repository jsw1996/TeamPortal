import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css'

import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import {

    Link
} from "react-router-dom";

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
        top: 0,
        background: 'black',
        color: 'white'
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
            <Navbar.Brand href="#home">Team Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/members'>Mmebers</Nav.Link>
                    <Nav.Link as={Link} to="/createprofile">Crate Profile</Nav.Link>
                </Nav>
                <Nav>
                    {/* <Nav.Link eventKey={2} href="#memes"> */}
                    <Button variant="outline-primary" onClick={handleLogout}>Log Out</Button>{' '}

                    {/* </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;

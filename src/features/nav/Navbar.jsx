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

    Link, NavLink
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import './nav.css'


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
    const dispatch = useDispatch();

    const classes = useStyles();
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout(e) {
        setError("")
        // e.preventDefault();

        try {
            await logout()
            // history.push("/")
        } catch {
            console.log("Failed to log out")
            setError("Failed to log out")
        }
    }
    return (
        <Navbar id="myNav" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand id="title" href="#home">Team Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link className="navLink" as={Link} to='/members'>Mmebers</Nav.Link> */}
                    <NavLink className="navLink" as={Link} to='/members'>Mmebers</NavLink>

                    {/* <Nav.Link className="navLink" as={Link} to="/createprofile" onClick={() => { dispatch({ type: "createProfile" }) }}>Crate Profile</Nav.Link> */}
                    <NavLink className="navLink" to="/createprofile" onClick={() => { dispatch({ type: "createProfile" }) }}>Crate Profile</NavLink>

                </Nav>
                <Nav>
                    {/* <Nav.Link eventKey={2} href="#memes"> */}
                    <Button id="logOutButton" className="navLink" variant="outline-warning" onClick={handleLogout}>Log Out</Button>{' '}

                    {/* </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;

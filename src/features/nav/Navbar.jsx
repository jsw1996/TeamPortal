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

    console.log('user:', currentUser)

    async function handleLogout(e) {
        setError("")
        try {
            await logout()
        } catch {
            console.log("Failed to log out")
            setError("Failed to log out")
        }
    }
    return (
        <Navbar id="myNav" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand id="title">Team Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" style={{ marginLeft: '20px' }}>
                    {/* <Nav.Link className="navLink" as={Link} to='/members'>Mmebers</Nav.Link> */}
                    <NavLink className="navLink" as={Link} to='/members'>Mmebers</NavLink>
                    <NavLink className="navLink" as={Link} to='/tasks'>Tasks</NavLink>


                    {/* <Nav.Link className="navLink" as={Link} to="/createprofile" onClick={() => { dispatch({ type: "createProfile" }) }}>Crate Profile</Nav.Link> */}
                    {/* <NavLink className="navLink" to="/buildprofile" onClick={() => { dispatch({ type: "createProfile" }) }}>Build   Profile</NavLink> */}

                </Nav>
                <Nav>
                    {/* <Nav.Link eventKey={2} href="#memes"> */}
                    <Button as={Link} to="/buildprofile" className="buttonLink" variant="outline-info" onClick={() => { dispatch({ type: "createProfile" }) }}>Build Profile</Button>
                    {/* <NavLink to={`/myProfile/${currentUser.uid}`}>Edit Profile</NavLink> */}
                    <Button id="logOutButton" className="buttonLink" variant="outline-warning" onClick={handleLogout}>Log Out</Button>{' '}
                    <img style={{ width: "30px", marginLeft: "20px" }} src={currentUser.providerData[0].photoURL} />
                    {/* </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;

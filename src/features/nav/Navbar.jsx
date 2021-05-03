import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import 'semantic-ui-css/semantic.min.css'


const Navbar = () => {
    return (
        <Menu size='large' inverted fixed='top'>
            <Container>
                <Menu.Item header content='SUDOKU Proj.' />
                <Menu.Item header content='Sandbox' />
                <Menu.Item header content='Create Profile' />
            </Container>
        </Menu>
    );
};

export default Navbar;

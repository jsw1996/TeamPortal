import React from "react";
// import { Menu, Container } from "semantic-ui-react";

import 'semantic-ui-css/semantic.min.css'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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
const Navbar = () => {
  const classes = useStyles();

    return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Team Portal
        </Typography>
        <nav>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Features
          </Link>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Enterprise
          </Link>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Support
          </Link>
        </nav>
        <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
    );
};

export default Navbar;

import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  makeStyles,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
} from "@material-ui/core";
import ButtonM from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2, 4, 3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterModal() {
  const classes = useStyles();

  const [open, setOpen]  = React.useState(false);
  const [lastName, setLastName] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [pass, setPass] = React.useState(null);

function onEmailChange(e){
  console.log(e.target.value)
}

  return (
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button
          className="button"
          color="twitter"
          content="Sign up"
          icon="signup"
          size="big"
        />
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={onEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <ButtonM
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </ButtonM>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Modal>
  );
}

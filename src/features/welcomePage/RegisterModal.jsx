import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { useAuth } from "../../contexts/AuthContext";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  makeStyles,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  // Link,
  Grid,
  Typography,
} from "@material-ui/core";
import ButtonM from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  root: {
    width: "100%",
    marginTop: "20px",
  },
}));

export default function RegisterModal() {
  const classes = useStyles();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)

  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  // const [lastName, setLastName] = React.useState(null);
  // const [firstName, setFirstName] = React.useState(null);
  // const [email, setEmail] = React.useState(null);
  // const [pass, setPass] = React.useState(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(passwordRef.current.value, passwordConfirmRef.current.value);
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match");
      return setOpenAlert(true);
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value).then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        user.updateProfile({
          displayName: `${firstName} ${lastName}`
        })
      });
      history.push("/members");
    } catch {
      setError("Failed to create an account");
      setOpenAlert(true);

    }

    setLoading(false);
  }

  const handleClose = (event, reason) => {
    setOpenAlert(false);
  };

  const onFirstNameChange = (e) =>{
    setFirstName(e.target.value);
  }

  const onLastNameChange = (e) =>{
    setLastName(e.target.value);
  }
  return (
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button
          className="button"
          inverted
          color="pink"
          content="Sign up"
          icon="signup"
          size="big"
        />
      }
      onClose={() => {setOpen(false);setOpenAlert(false)}}
      onOpen={() => setOpen(true)}
    >
      <div className={classes.paper}>
      
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
        {error}
        </Alert>
      </Snackbar>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                autoFocus
                onChange = {onFirstNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // id="lastName"
                label="Last Name"
                // name="lastName"
                autoComplete="lname"
                onChange = {onLastNameChange}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // id="email"
                label="Email Address"
                // name="email"
                autoComplete="email"
                inputRef={emailRef}
                // onChange={onEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // name="password"
                label="Password"
                type="password"
                // id="password"
                inputRef={passwordRef}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // name="password"
                label="Password Confirm"
                type="password"
                // id="password"
                inputRef={passwordConfirmRef}
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
            disabled={loading}
          >
            Sign Up
          </ButtonM>
          <Grid container justify="flex-end">
            <Grid item>
              {/* <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
    </Modal>
  );
}

import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { useAuth } from "../../contexts/AuthContext"
import { useRef, useState} from "react"
import { Link, useHistory } from "react-router-dom"

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
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const [open, setOpen]  = React.useState(false);
  // const [lastName, setLastName] = React.useState(null);
  // const [firstName, setFirstName] = React.useState(null);
  // const [email, setEmail] = React.useState(null);
  // const [pass, setPass] = React.useState(null);
  console.log(useAuth())
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()


async function handleSubmit(e) {
  e.preventDefault()
  console.log(passwordRef.current.value,passwordConfirmRef.current.value)
  if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    return setError("Passwords do not match")
  }

  try {
    setError("")
    setLoading(true)
    await signup(emailRef.current.value, passwordRef.current.value)
    history.push("/")
  } catch {
    setError("Failed to create an account")
  }

  setLoading(false)
}
  return (
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button
          className="button"
          inverted 
          color='pink'
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
                // id="lastName"
                label="Last Name"
                // name="lastName"
                autoComplete="lname"
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
                inputRef = {emailRef}
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
                inputRef= {passwordRef}
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
                inputRef = {passwordConfirmRef}
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
            disabled = {loading}
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

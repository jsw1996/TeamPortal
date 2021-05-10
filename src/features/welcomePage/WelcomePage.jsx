import React from "react";
import { Button } from "semantic-ui-react";
import SignInModal from "./SignInModal";
import RegisterModal from "./RegisterModal";
import "semantic-ui-css/semantic.min.css";
import "./Welcome.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

export default function WelcomePage() {
  return (
    <Paper
      style={{
        backgroundImage: " linear-gradient(to right, #fa709a 0%, #fee140 100%)",
      }}
    >
      {" "}
      <Container
        id="welcomeContainer"
        maxWidth="lg"
        style={{
          minHeight: "100vh",
        }}
      >
        <h1>Team Portal</h1>
        <div id="welcomeInner">
          {/* <Button className="button" color="olive" content='Sign in' icon='sign in' size='big' />
                <Button className="button" color="twitter" content='Sign up' icon='signup' size='big' /> */}
          <SignInModal />
          <RegisterModal />
        </div>
      </Container>
    </Paper>
  );
}

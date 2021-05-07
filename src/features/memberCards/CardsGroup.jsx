import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Card } from "semantic-ui-react";
import { readData } from "../../firebase/firestoreAPI";
import "./card.css";
import { Grid } from "semantic-ui-react";
import { useAuth } from "../../contexts/AuthContext";
import TopNav from "../nav/Navbar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

export const CardsGroup = () => {
  const { currentUser, signup } = useAuth();
  console.log(currentUser);

  let [members, setMembers] = useState([]);

  useEffect(() => {
    readData("users").then((res) => {
      console.log(res);

      let arr = [];
      res.forEach((item) => arr.push(item.data()));
      console.log(arr);
      setMembers(arr);
    });
  }, []);

  return (
    <Paper
      style={{
        backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
      }}
    >
      <Container
        maxWidth="lg"
        style={{
          minHeight: "100vh",
        }}
      >
        {" "}
        <p>welcome {currentUser.displayName}</p>
        <Grid id="cardsGroup">
          {members.map((item, index) => (
            <Grid.Column key={index} mobile={8} tablet={4} computer={4}>
              <CardItem
                image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
                header={item}
                meta={"hahahah"}
                des={"djjdlajfl"}
              ></CardItem>{" "}
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

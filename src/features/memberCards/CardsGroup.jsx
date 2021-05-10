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
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

export const CardsGroup = () => {
  const { currentUser, signup } = useAuth();
  const dispatch = useDispatch();

  console.log(currentUser);

  let [members, setMembers] = useState([]);

  useEffect(() => {
    readData("users").then((res) => {

      let arr = [];
      res.forEach((item) => { arr.push(Object.assign({}, item.data(), { id: item.id })); });
      //Object.assign(item.data(), item.id))
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
                onClick={() => { dispatch({ type: 'selectMember', profile: item }) }}
                image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
                header={item.firstName + " " + item.lastName}
                meta={item.id}
                des={item.des}
                as={Link}
                toPath={`/members/${item.id}`}
              ></CardItem>{" "}
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

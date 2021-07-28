import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { readData } from "../../firebase/firestoreAPI";
import "./card.css";
import { Grid } from "semantic-ui-react";
import { useAuth } from "../../contexts/AuthContext";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


const CardsGroup = () => {
  const { currentUser, signup } = useAuth();
  const dispatch = useDispatch();
  const memberfilter = useSelector(store => store.memberfilter);
  let [members, setMembers] = useState([]);

  let matchFilter = (filter, item) => {
    // if (!filter || Object.keys(filter).length === 0) return true;
    if (!filter) {
      return true;
    }
    let matchTeam = !filter.team || filter.team === '' || filter.team === item.team
    let matchPosition = !filter.position || filter.position === '' || filter.position === item.position
    // let matchName = item.name !== undefined && (!filter.name || filter.name === '' || item.name.search(filter.name) != -1)
    let matchName = item.name !== undefined && (!filter.name || filter.name === '' || item.name.indexOf(filter.name) != -1)

    // let keylist = Object.keys(filter);
    // // console.log(keylist)
    // let subset = (({ team, name }) => { return { team, name } })(item);
    // // console.log(subset);
    // return JSON.stringify(filter) === JSON.stringify(subset);
    return matchTeam && matchPosition && matchName;
  }

  useEffect(() => {
    readData("users").then((res) => {

      let arr = [];
      res.forEach((item) => { arr.push(Object.assign({}, item.data(), { id: item.id })); });
      //Object.assign(item.data(), item.id))
      // console.log(arr);
      setMembers(arr);
      console.log("list:", arr)
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
        <Grid id="cardsGroup">
          {members.filter(item => matchFilter(memberfilter, item)).map((item, index) => (
            <Grid.Column key={item.id} mobile={8} tablet={4} computer={4}>
              <CardItem
                onClick={() => { dispatch({ type: 'selectMember', profile: item }) }}
                image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
                header={item.name}
                meta={item.team}
                des={item.position}
                as={Link}
                toPath={`/members/${item.id}`}
              ></CardItem>{" "}
            </Grid.Column>
          ))}
        </Grid>
        {/* <Filter></Filter> */}
      </Container>
    </Paper>
  );
};

export default CardsGroup;

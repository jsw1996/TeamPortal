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
import Loader from "../../util/loader";


const CardsGroup = () => {
  const { currentUser, signup } = useAuth();
  const dispatch = useDispatch();
  const memberfilter = useSelector(store => store.memberfilter);
  let [members, setMembers] = useState([]);
  let [loading, setLoading] = useState(true)
  let matchFilter = (filter, item) => {
    if (!filter) {
      return true;
    }
    let matchTeam = !filter.team || filter.team === '' || filter.team === item.team
    let matchPosition = !filter.position || filter.position === '' || filter.position === item.position
    let matchName = item.name !== undefined && (!filter.name || filter.name === '' || item.name.indexOf(filter.name) != -1)


    return matchTeam && matchPosition && matchName;
  }

  useEffect(() => {
    readData("users").then((res) => {

      let arr = [];
      console.log(res)
      res.forEach((item) => { arr.push(Object.assign({}, item.data(), { id: item.id })); });
      setLoading(false);
      setMembers(arr);
      console.log("list:", arr)
    });
  }, []);

  return (

    !loading ? <Paper
      style={{
        backgroundImage: "transparent",
      }
      }
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
      </Container>
    </Paper > : <Loader></Loader>


  );
};

export default CardsGroup;

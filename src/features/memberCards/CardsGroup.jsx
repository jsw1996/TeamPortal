import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { Card } from 'semantic-ui-react'
import { readData } from '../../firebase/firestoreAPI'
import './card.css'
import { Grid } from 'semantic-ui-react'
import { useAuth } from "../../contexts/AuthContext";
import TopNav from '../nav/Navbar'


export const CardsGroup = () => {
    const { currentUser,signup } = useAuth();
    console.log(currentUser)

    let [members, setMembers] = useState([]);

    useEffect(() => {
        readData('users').then((res) => {
            console.log(res);

            let arr = [];
            res.forEach((item) => arr.push(item.data().name))
            console.log(arr);
            setMembers(arr);
        })
    }, [])

    return (
        //<Card.Group id="cardsGroup" >
        <div>
          <p>welcome {currentUser.displayName}</p>
          <Grid id="cardsGroup">

            {members.map(
                (item, index) => (<Grid.Column key = {index} mobile={8} tablet={8} computer={3}>
                    <CardItem image='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg' header={item} meta={"hahahah"} des={'djjdlajfl'}></CardItem>                </Grid.Column>
                )
            )}
        </Grid></div>
        
        // </Card.Group>
    )
}






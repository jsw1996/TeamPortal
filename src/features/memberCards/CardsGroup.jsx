import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { Card } from 'semantic-ui-react'
import { readData } from '../../firebase/firestoreAPI'
import './card.css'
import { Grid } from 'semantic-ui-react'
<<<<<<< HEAD
import { Link } from "react-router-dom"
=======
import { useAuth } from "../../contexts/AuthContext";
import TopNav from '../nav/Navbar'

>>>>>>> ac314fd8b9b81d210c6d91f26d5f0941f07d6368

export const CardsGroup = () => {
    const { currentUser,signup } = useAuth();
    console.log(currentUser)

    let [members, setMembers] = useState([]);

    useEffect(() => {
        readData('users').then((res) => {
            console.log(res);

            let arr = [];
            res.forEach((item) => arr.push(item.data()))
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
<<<<<<< HEAD
                (item) => (<Grid.Column mobile={8} tablet={8} computer={3}>
                    <CardItem link image='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg' header={item.name} meta={"hahahah"} des={'djjdlajfl'} toPath={`/members/${item.id}`} as={Link}></CardItem>                </Grid.Column>
                )
            )}
        </Grid >
=======
                (item, index) => (<Grid.Column key = {index} mobile={8} tablet={8} computer={3}>
                    <CardItem image='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg' header={item} meta={"hahahah"} des={'djjdlajfl'}></CardItem>                </Grid.Column>
                )
            )}
        </Grid></div>
        
>>>>>>> ac314fd8b9b81d210c6d91f26d5f0941f07d6368
        // </Card.Group>
    )
}






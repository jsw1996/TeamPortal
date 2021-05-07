import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { Card } from 'semantic-ui-react'
import { readData } from '../../firebase/firestoreAPI'
import './card.css'
import { Grid } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export const CardsGroup = () => {

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
        <Card.Group id="cardsGroup" >
            <Grid id="cardsGroup">

                {members.map(
                    (item) => (<Grid.Column mobile={8} tablet={8} computer={3}>
                        <CardItem link image='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg' header={item.name} meta={"hahahah"} des={'djjdlajfl'} toPath={`/members/${item.id}`} as={Link}></CardItem>                </Grid.Column>
                    )
                )}
            </Grid >
        </Card.Group>
    )
}






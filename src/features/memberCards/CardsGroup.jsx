import React, { Component, useEffect, useState } from 'react';
import CardItem from './CardItem';
import { Card } from 'semantic-ui-react'
import { readData } from '../../firebase/firestoreAPI'
import { ContactsOutlined } from '@material-ui/icons';
import './card.css'
export const CardsGroup = () => {

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

    return (<Card.Group id="cardsGroup" itemsPerRow={5}>
        {members.map(
            (item) => (<CardItem image='https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg' header={item} meta={"hahahah"} des={'djjdlajfl'}></CardItem>)

        )}
    </Card.Group>
    )
}






import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
const KanbanCard = ({ taskType, from, content, title, callback, ind }) => {


    return (
        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                />
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{from}</Card.Meta>
                <Card.Description>
                    {content}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red' onClick={() => { callback(ind) }}>
                        Remove
                    </Button>
                </div>
            </Card.Content>
        </Card>)

}

export default KanbanCard
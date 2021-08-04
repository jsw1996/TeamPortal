import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { removeData } from '../../firebase/firestoreAPI';

const KanbanCard = ({ taskType, from, content, title, callback, ind, image, taskId, statusChange }) => {

    let buttoneText;

    if (taskType === 'To Do') {
        buttoneText = 'Accept'
    } else if (taskType === 'Doing') {
        buttoneText = 'Complete'
    } else {
        buttoneText = 'Approve'
    }

    return (
        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src={image}
                />
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{from}</Card.Meta>
                <Card.Description>
                    {content}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green' onClick={() => { statusChange(taskId) }}>
                        {buttoneText}
                    </Button>
                    <Button basic color='red' onClick={() => { callback(ind, taskId) }}>
                        Remove
                    </Button>
                </div>
            </Card.Content>
        </Card>)

}

export default KanbanCard
import React from 'react';
import KanbanCard from './KanbanCard';
import { Button, Modal } from 'semantic-ui-react'
import CreateTask from './CreateTask';
import { useState } from 'react';
import { useEffect } from 'react';
import { removeData } from '../../firebase/firestoreAPI';

const KanbanColumn = ({ taskType, title, list, statusChange }) => {

    const [tasks, setTasks] = useState([])
    console.log(list)

    console.log(tasks)

    const removeTask = (ind, id) => {
        removeData('tasks', id).then(() => {
            console.log('removing')
            let newList = tasks;
            newList.splice(ind, 1);
            setTasks([...newList])
        })



    }

    useEffect(() => {
        setTasks(list)
    }, [list])

    return (
        <div id='kanbanColumn'>
            <div id='columnHeader'>
                <h4>{title}</h4>
                {/* <Button id='addButton' compact floated='right' size='mini' icon='add' /> */}
                <CreateTask taskType={taskType} />
            </div>
            {tasks.map((item, ind) => (<KanbanCard key={item.id} taskId={item.id} ind={ind} callback={removeTask} statusChange={statusChange} taskType={taskType} from={item.from} content={item.content} title={item.title} image={item.image}></KanbanCard>))
            }
        </div>
    )
}

export default KanbanColumn
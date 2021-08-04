import React from 'react';
import KanbanCard from './KanbanCard';
import { Button, Modal } from 'semantic-ui-react'
import CreateTask from './CreateTask';
import { useState } from 'react';
import { useEffect } from 'react';

const KanbanColumn = ({ taskType, title, list }) => {

    const [tasks, setTasks] = useState([])
    console.log(list)

    console.log(tasks)

    const removeTask = (ind) => {
        console.log('removing')
        let newList = tasks;
        newList.splice(ind, 1);
        setTasks([...newList])

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
            {tasks.map((item, ind) => (<KanbanCard key={item.id} ind={ind} callback={removeTask} taskType={taskType} from={item.from} content={item.content} title={item.title} ></KanbanCard>))
            }
        </div>
    )
}

export default KanbanColumn
import React, { useEffect, useState } from 'react';
import KanbanColumn from './KanbanColumn';
import { readData } from '../../firebase/firestoreAPI';
import './kanban.css'
const KanbanPage = () => {
    // const [toDo, setToDo] = useState([]);
    // const [doing, setDoing] = useState([]);
    // const [done, setDone] = useState([]);

    const [tasks, setTasks] = useState({
        toDo: [],
        doing: [],
        done: []
    })



    useEffect(() => {
        let list = []
        readData('tasks').then((res) => {
            res.forEach((item) => { list.push({ ...item.data(), id: item.id }) });
            // setToDo(list)
            let toDo = (list.filter((item) => item.taskType === 'To Do'));
            let doing = (list.filter(item => item.taskType === 'Doing'));
            let done = (list.filter(item => item.taskType === 'Done'));
            setTasks({
                toDo,
                doing,
                done
            })
        })
            ;

        // let list2 = []
        // readData('doing').then((res) => {
        //     res.forEach((item) => { list2.push({ ...item.data(), id: item.id }) })
        //     setDoing(list2)
        // })

        // let list3 = []
        // readData('done').then((res) => {
        //     res.forEach((item) => { list3.push({ ...item.data(), id: item.id }) })
        //     setDone(list3)
        // })

    },
        [])

    return (
        <div id='kanbanPage'>
            <KanbanColumn className='KanbanColumn' taskType='To Do' title='To Do' list={tasks.toDo} ></KanbanColumn>
            <KanbanColumn className='KanbanColumn' taskType='Doing' title='Doing' list={tasks.doing} ></KanbanColumn>
            <KanbanColumn className='KanbanColumn' taskType='Done' title='Done' list={tasks.done} ></KanbanColumn>
        </div>
    )
}

export default KanbanPage;

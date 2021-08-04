import React, { useEffect, useState } from 'react';
import KanbanColumn from './KanbanColumn';
import { readData } from '../../firebase/firestoreAPI';
import './kanban.css'
const KanbanPage = () => {
    // const [toDo, setToDo] = useState([]);
    // const [doing, setDoing] = useState([]);
    // const [done, setDone] = useState([]);

    // const [tasks, setTasks] = useState({
    //     toDo: [],
    //     doing: [],
    //     done: []
    // })

    const [tasks, setTasks] = useState([])


    let statusChange = (id) => {
        let ind = tasks.map((item) => { return item.id }).indexOf(id);
        let temp = [...tasks];
        if (temp[ind].taskType === 'To Do') {
            temp[ind].taskType = 'Doing';
        } else if (temp[ind].taskType === 'Doing') {
            temp[ind].taskType = 'Done';
        }
        setTasks(temp);
    }



    useEffect(() => {
        let list = []
        readData('tasks').then((res) => {
            res.forEach((item) => { list.push({ ...item.data(), id: item.id }) });
            // setToDo(list)
            let toDo = (list.filter((item) => item.taskType === 'To Do'));
            let doing = (list.filter(item => item.taskType === 'Doing'));
            let done = (list.filter(item => item.taskType === 'Done'));
            // setTasks({
            //     toDo,
            //     doing,
            //     done
            // })
            setTasks(list)
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
            <KanbanColumn className='KanbanColumn' taskType='To Do' title='To Do' statusChange={statusChange} list={tasks.filter((item) => item.taskType === 'To Do')} ></KanbanColumn>
            <KanbanColumn className='KanbanColumn' taskType='Doing' title='Doing' statusChange={statusChange} list={tasks.filter((item) => item.taskType === 'Doing')} ></KanbanColumn>
            <KanbanColumn className='KanbanColumn' taskType='Done' title='Done' statusChange={statusChange} list={tasks.filter((item) => item.taskType === 'Done')} ></KanbanColumn>
        </div>
    )
}

export default KanbanPage;

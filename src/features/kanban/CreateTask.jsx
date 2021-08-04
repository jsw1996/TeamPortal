import React, { useState } from 'react';
import { Modal, Button, Input, Form } from 'semantic-ui-react'
import { addTask } from '../../firebase/firestoreAPI';
import { useAuth } from '../../contexts/AuthContext';
const CreateTask = ({ taskType }) => {

    const { currentUser, logout } = useAuth()


    const [task, setTask] = useState({
        taskType: taskType,
        from: currentUser.displayName,
        image: currentUser.providerData[0].photoURL
    })

    const [open, setOpen] = useState();


    const handleChange = (e, { name, value }) => {
        let newTask = Object.assign({}, task, { [name]: value })
        setTask(newTask)
    }

    const handleSubmit = () => {
        addTask('tasks', task).then(() => {
            setOpen(false);
            window.location.reload()
        })

    }

    return (
        <Modal
            trigger={<Button id='addButton' icon='add' floated='right' />}
            // header='Reminder!'
            // content='Call Benjamin regarding the reports.'
            open={open}
            actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
        >
            {/* <Modal.Content> */}
            <div style={{ padding: '50px' }}>
                <h3>Add Task</h3>
                <Form onSubmit={handleSubmit}>
                    {/* <label for="from">From:</label> */}
                    {/* <Form.Input onChange={handleChange} type="text" id="from" name="from" placeholder='From' label='From' /> */}
                    <Form.Input onChange={handleChange} type="text" id="heading" name="title" placeholder='Heading' label='Heading' />
                    <Form.TextArea onChange={handleChange} id="content" name="content" placeholder='Content' label='Content' />
                    <Button type='submit' color='twitter'>Add</Button>

                </Form>
            </div>
            {/* </Modal.Content> */}
        </Modal>
    )
}

export default CreateTask
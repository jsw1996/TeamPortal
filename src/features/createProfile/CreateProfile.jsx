import React, { Component, useState } from 'react';
import { Form } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'
import './CreateProfile.css'

export const CreateProfile = () => {
    let [profileImage, setProfileImage] = useState()

    let loadFile = function (event) {
        setProfileImage(URL.createObjectURL(event.target.files[0]));
        console.log("image changed");
        console.log(event.target.files[0]);
    };

    return (
        <Form id="createProfileForm">
            <Grid stackable columns={2}>
                <Grid.Column>

                    <Segment >
                        <h2>Personal Information</h2>
                        <Form.Group >
                            <Form.Input label="First Name" width={8} placeholder="First Name" />
                            <Form.Input label="Last Name" width={8} placeholder="Last Name" />
                        </Form.Group><br />
                        <Form.Input label="Email" placeholder="Email" type="email" />
                        <Form.Input label='Profile Image' accept="image/*" placeholder="Email" type="file" onChange={loadFile} />
                        <div style={{ textAlign: "center" }}>
                            <img style={{ borderRadius: "50%", margin: "auto", width: "100px" }} src={profileImage} id="output" />
                        </div>

                    </Segment>
                    <Segment>
                        <h2>Team Role</h2>
                        <Form.Input placeholder="Team" />

                        <Form.Input placeholder="Position" />
                        <Form.Input placeholder="Leader" />




                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Form>
    )



}
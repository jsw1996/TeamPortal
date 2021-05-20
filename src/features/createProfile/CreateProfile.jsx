import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { Button, Grid, Segment } from "semantic-ui-react";
import "./CreateProfile.css";
import { addMember } from '../../firebase/firestoreAPI'
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { Icon } from 'semantic-ui-react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

export const CreateProfile = ({ changable, newProfile }) => {
  let [profileImage, setProfileImage] = useState("https://www.clipartmax.com/png/full/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png")
  let [readOnly, setReadOnly] = useState(!changable);
  let { id } = useParams();
  const initialProfile = useSelector(state => state);
  let [profile, setProfile] = useState(initialProfile)
  console.log("profile:" + profile);



  let loadFile = function (event) {
    if (event.target.value !== "") {
      let inputImage = URL.createObjectURL(event.target.files[0])
      setProfileImage(inputImage);
      Object.assign(profile, { profileImage: inputImage });
      console.log("image changed");
      console.log(inputImage);
    }
  };

  let handleSubmit = (event) => {
    addMember(profile);
  }



  let handleChange = (event, { name, value }) => {
    setProfile(Object.assign({}, profile, { [name]: value }));
  }

  let handleEdit = (event) => {
    setReadOnly(false);
  }

  let handleReset = () => {
    setReadOnly(true);
    setProfile(initialProfile)
  }



  return (
    <Paper id="paper">
      <Container
        maxWidth="lg"
        style={{
          minHeight: "100vh",
        }}
      >
        <Form id="createProfileForm" onSubmit={handleSubmit}>
          <div className="file-input" style={{ marginBottom: "30px" }}>
            <input accept="image/*" onChange={loadFile} type="file" id="file" className="file" name="file" />
            <label for="file" style={{ backgroundImage: `url(${profileImage})` }}>
              <div id="overlay"><Icon size="large" name='upload' /></div>
            </label>
          </div>
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>{profile.firstName + " " + profile.lastName}</h2>
          <Grid stackable columns={2}>
            <Grid.Column width={6}>
              <Segment className="segment">

                <h3>Personal Information</h3>

                <Form.Group>
                  <Form.Input
                    value={profile.firstName}
                    readOnly={readOnly}
                    label="First Name"
                    name="firstName"
                    width={8}
                    placeholder="First Name"
                    onChange={handleChange}

                  />
                  <Form.Input
                    value={profile.lastName}
                    id="lastName"
                    readOnly={readOnly}
                    label="Last Name"
                    name="lastName"
                    width={8}
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <br />
                <Form.Input value={profile.email} readOnly={readOnly} label="Email" name="email" placeholder="Email" type="email" onChange={handleChange} />
                <Form.Input value={profile.tel} readOnly={readOnly} label="Phone Number" name="tel" placeholder="Phone Number" type="tel" onChange={handleChange} />

              </Segment>
              <Segment className="segment">
                <h3>Team Role</h3>
                <Form.Input value={profile.team} readOnly={readOnly} label="Team" placeholder="Team" name="team" onChange={handleChange}
                />

                <Form.Input value={profile.position} readOnly={readOnly} label="Position" placeholder="Position" name="position" onChange={handleChange} />
                <Form.Input value={profile.leader} readOnly={readOnly} label="Leader " placeholder="Leader" name="leader" onChange={handleChange}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <Segment className="segment">
                <Form.TextArea value={profile.des} readOnly={readOnly} label="Self Description" name="des" onChange={handleChange} />

              </Segment>
            </Grid.Column>
          </Grid>
          {newProfile ?
            <div>

              {!readOnly ? (<div style={{ overflow: "hidden" }}>
                <Button type="submit" color="green" size="big" content={"Submit"} floated={"right"} style={{ width: "110px" }}></Button>
                <Button onClick={handleReset} type="reset" color="red" size="big" floated={"right"} style={{ width: "110px" }}>Cancel</Button></div>) :
                <Button onClick={handleEdit} color="linkedin" floated={"right"} size="big" style={{ width: "110px" }}>Edit</Button>}
            </div> : <div style={{ overflow: "hidden" }}><Button as={Link} to="/members" color="twitter" size="big" floated={"right"} style={{ width: "110px" }}>Back</Button></div>}
        </Form>
      </Container>
    </Paper>
  );
}

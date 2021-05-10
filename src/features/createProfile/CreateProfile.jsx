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

export const CreateProfile = ({ changable }) => {
  let [profileImage, setProfileImage] = useState("https://www.clipartmax.com/png/full/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png")
  let [readOnly, setReadOnly] = useState(!changable);
  let { id } = useParams();
  let [profile, setProfile] = useState(useSelector(state => state))
  console.log("profile:" + profile);


  // let profile = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   position: "",
  //   leader: "",
  //   team: "",
  //   profileImage: "",
  //   tel: "",
  //   des: ""
  // }

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
    // Object.assign(profile, { [name]: value })
    setProfile(Object.assign({}, profile, { [name]: value }));
  }


  return (
    <Paper
      style={{
        backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        paddingTop: "30px",
      }}
    >
      <Container
        maxWidth="lg"
        style={{
          minHeight: "100vh",
        }}
      >
        <Form id="createProfileForm" onSubmit={handleSubmit}>
          <div className="file-input" style={{ marginBottom: "30px" }}>
            <input accept="image/*" onChange={loadFile} type="file" id="file" class="file" />
            <label style={{ backgroundImage: `url(${profileImage})` }}><div id="overlay"><Icon size="large" name='upload' /></div>
            </label>
          </div>
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
          <Button type="submit" color="green" compact={true} content={"Submit"} circular floated={"right"} style={{ width: "110px" }}></Button>
        </Form>
      </Container>
    </Paper>
  );
};

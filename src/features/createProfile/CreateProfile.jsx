import React, { useState } from "react";
import { Form, Button, Grid, Segment, Dropdown, Input, Icon } from "semantic-ui-react";
import "./CreateProfile.css";
import { setMember, addMember, putData, readUser } from '../../firebase/firestoreAPI'
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { readData } from '../../firebase/firestoreAPI'
import { useAuth } from "../../contexts/AuthContext"

export const CreateProfile = ({ changable, newProfile, history }) => {
  let [profileImage, setProfileImage] = useState("https://www.clipartmax.com/png/full/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png")
  let [readOnly, setReadOnly] = useState(!changable);
  const { id } = useParams();
  const { currentUser, logout } = useAuth()

  const initialProfile = useSelector(state => state);
  const [profile, setProfile] = useState(initialProfile)

  const teamOptions = [
    { key: 'team1', text: 'Team1', value: 'Team1' },
    { key: 'team2', text: 'Team2', value: 'Team2' },
    { key: 'team3', text: 'Team3', value: 'Team3' },
    { key: 'team4', text: 'Team4', value: 'Team4' },
  ]



  let loadFile = function (event) {
    if (event.target.value !== "") {
      let inputImage = URL.createObjectURL(event.target.files[0])
      setProfileImage(inputImage);
      console.log('input path' + inputImage);

      putData(event.target.files[0], event.target.files[0].name, (imageUrl) => {
        Object.assign(profile, { profileImage: imageUrl });
        console.log(imageUrl)
      })
      // Object.assign(profile, { profileImage: inputImage });
      console.log("image changed");
    }
  };

  let handleSubmit = (event) => {
    // addMember(profile);
    setMember(currentUser.uid, profile);
    alert('Profile Saved!');
  }



  let handleChange = (event, { name, value }) => {
    setProfile(Object.assign({}, profile, { [name]: value }));
  }

  let handleTeamChange = (e, { value }) => {
    setProfile(Object.assign({}, profile, { team: value }));
  }

  let handleEdit = (event) => {
    setReadOnly(false);
  }

  let handleReset = () => {
    setReadOnly(true);
    setProfile(initialProfile)
  }

  useEffect(() => {
    readUser(currentUser.uid).then((res) => { console.log(res); setProfile(res) })
  }, [])


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
                    required
                    value={profile.name}
                    readOnly={readOnly}
                    label="Name"
                    name="name"
                    width={16}
                    placeholder="Name"
                    onChange={handleChange}

                  />
                  {/* <Form.Input
                    value={profile.lastName}
                    id="lastName"
                    readOnly={readOnly}
                    label="Last Name"
                    name="lastName"
                    width={8}
                    placeholder="Last Name"
                    onChange={handleChange}
                  /> */}
                </Form.Group>
                <br />
                <Form.Input value={profile.email} readOnly={readOnly} label="Email" name="email" placeholder="Email" type="email" onChange={handleChange} />
                <Form.Input value={profile.tel} readOnly={readOnly} label="Phone Number" name="tel" placeholder="Phone Number" type="tel" onChange={handleChange} />

              </Segment>
              <Segment className="segment">
                <h3>Team Role</h3>
                {/* <Form.Input value={profile.team} readOnly={readOnly} label="Team" placeholder="Team" name="team" onChange={handleChange}
                /> */}
                {/* <label for='teamSelector'> Team</label> */}
                {/* <Input label='Team'> */}
                <Form.Dropdown label='Team' id='teamSelector' placeholder={profile.team} value={profile.team} readOnly={readOnly} fluid selection options={readOnly ? null : teamOptions} onChange={handleTeamChange} />
                {/* </Input> */}


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

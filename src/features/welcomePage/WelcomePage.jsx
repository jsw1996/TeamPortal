import React from "react";
import { Button } from 'semantic-ui-react'
import SignInModal from './SignInModal'
import RegisterModal from './RegisterModal'
import 'semantic-ui-css/semantic.min.css'
import './Welcome.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

export default function WelcomePage() {
    return (
        <div id="welcomeContainer" >
            <div id="welcomeInner">
                {/* <Button className="button" color="olive" content='Sign in' icon='sign in' size='big' />
                <Button className="button" color="twitter" content='Sign up' icon='signup' size='big' /> */}
                <SignInModal />
                <RegisterModal />
            </div>

        </div>
    )
}

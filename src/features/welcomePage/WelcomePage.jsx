import React from "react";
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

export default function WelcomePage() {
    return (
        <div style={{ height: "1100px", background: "black" }}>
            <div style={{ width: "300px", margin: "auto" }}>
                <Button style={{ background: "red" }} content='Sign up' icon='sign in' size='big' />
                <Button content='Sign up' icon='signup' size='big' />
            </div>

        </div>
    )
}

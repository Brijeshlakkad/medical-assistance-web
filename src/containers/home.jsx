import React, { useState } from "react";
import { LOGIN_SIGNUP_PANEL_TYPE } from "../lib/types";
import Login from "./login";
import Signup from "./signup";

export default function Home(props) {
    // Determine which screen to show: Login or Signup
    let [panelType, setPanelType] = useState(LOGIN_SIGNUP_PANEL_TYPE.LOGIN);

    return panelType === LOGIN_SIGNUP_PANEL_TYPE.LOGIN ? <Login switchPanelType={() => {
        setPanelType(LOGIN_SIGNUP_PANEL_TYPE.SIGNUP)
    }} /> : <Signup switchPanelType={() => {
        setPanelType(LOGIN_SIGNUP_PANEL_TYPE.LOGIN)
    }} />
}
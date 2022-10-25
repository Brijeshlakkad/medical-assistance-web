import React from "react"
import FooterComponent from "../footer/footer"
import HeaderComponent from "../header/header"
import LoginComponent from "./login"


export function LoginPageComponent(props) {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <LoginComponent></LoginComponent>
            <FooterComponent></FooterComponent>
        </>
    )

}
import React from "react";
import FooterComponent from "../components/footer/footer";
import HeaderComponent from "../components/header/header";
import { SignupComponent } from "../components/signup/signup";

export default function Signup(props) {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <SignupComponent></SignupComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}
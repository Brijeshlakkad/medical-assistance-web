import React from "react";
import FooterComponent from "../components/footer/footer";
import HeaderComponent from "../components/header/header";
import { PatientSignupComponent } from "../components/patient-signup/patient-signup";

export default function Signup(props) {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <PatientSignupComponent></PatientSignupComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}
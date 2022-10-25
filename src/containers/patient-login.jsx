import React from "react";
import FooterComponent from "../components/footer/footer";
import HeaderComponent from "../components/header/header";
import {PatientLoginComponent} from "../components/patient-login/patient-login";

export default function Login() {
    return <>
        <HeaderComponent></HeaderComponent>
        <PatientLoginComponent></PatientLoginComponent>
        <FooterComponent></FooterComponent>
    </>
}
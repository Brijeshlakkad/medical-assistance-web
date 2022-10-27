import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../components/footer/footer";
import HeaderComponent from "../components/header/header";
import { PatientLoginComponent } from "../components/patient-login/patient-login";
import { PathConstants } from "../lib/path-constants";
import { login, PatientLoginState } from "../store/actions/patient";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const loginState = useSelector(state => state.patient.state);
    const errorMessage = useSelector(state => state.patient.errorMessage);

    const navigate = useNavigate();

    const onClick = () => {
        dispatch(login(email, password));
    }

    useEffect(() => {
        if (loginState === PatientLoginState.COMPLETED) {
            // redirect to PatientHome page.
            navigate(PathConstants.PatientHome);
        }
    }, [navigate, loginState]);

    return <>
        <HeaderComponent></HeaderComponent>
        <PatientLoginComponent
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onClick={onClick}
            errorMessage={errorMessage}
            loginState={loginState}
        />
        <FooterComponent></FooterComponent>
    </>
}
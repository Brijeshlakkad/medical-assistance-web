import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterComponent from "../components/footer/footer";
import HeaderComponent from "../components/header/header";
import { PatientLoginComponent } from "../components/patient-login/patient-login";
import { login } from "../store/actions/patient";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const loginState = useSelector(state => state.patient.state);

    const onClick = () => {
        dispatch(login(email, password));
    }

    useEffect(() => {
        console.log("loginState", loginState);
    }, [loginState]);

    return <>
        <HeaderComponent></HeaderComponent>
        <PatientLoginComponent
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onClick={onClick}
        />
        <FooterComponent></FooterComponent>
    </>
}
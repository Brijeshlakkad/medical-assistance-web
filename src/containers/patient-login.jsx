import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../components/footer/footer";
import { PatientLoginComponent } from "../components/patient-login/patient-login";
import { PathConstants } from "../lib/path-constants";
import { RequestState, UserRole } from "../lib/types";
import { login } from "../store/actions/user";
import { RESET_USER_LOGIN } from "../store/types";
import Header from "./header";

export default function PatientLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: RESET_USER_LOGIN });
    }, [dispatch]);

    const loginState = useSelector(state => state.user.loginState);

    const navigate = useNavigate();

    const onClick = () => {
        dispatch(login(email, password, UserRole.PATIENT));
    }

    useEffect(() => {
        if (loginState === RequestState.COMPLETED) {
            // redirect to AssessmentPage page.
            navigate(PathConstants.AssessmentPage);
        }
    }, [navigate, loginState]);

    return <>
        <Header />
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
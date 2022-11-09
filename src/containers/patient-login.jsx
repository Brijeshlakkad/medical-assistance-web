import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../components/footer/footer";
import { PatientLoginComponent } from "../components/patient-login/patient-login";
import { PathConstants } from "../lib/path-constants";
import { RequestState, UserRole } from "../lib/types";
import { login } from "../store/actions/user";
import Header from "./header";

function checkEmail(userEmail) {
    var validEmailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (!userEmail.match(validEmailRegex)) {
        return false;
    }
    return true;
}

function checkPasswordLength(passowrd) {
    if (passowrd === "") {
        return false;
    }
    return true;
}

export default function PatientLogin() {
    const [email, setEmail] = useState("");
    const [emailErrorMessages, setEmailErrorMessages] = useState({});
    const [password, setPassword] = useState("");
    const [passwordErrorMessages, setPasswordErrorMessages] = useState({});
    const dispatch = useDispatch();

    const loginState = useSelector(state => state.user.state);
    const errorMessage = useSelector(state => state.user.errorMessage);

    const navigate = useNavigate();

    const onClick = () => {
        if (!checkEmail(email)) {
            return setEmailErrorMessages({
                ...emailErrorMessages,
                email: "Invalid Email address :("
            })
        } else {
            setEmailErrorMessages({
                ...emailErrorMessages,
                email: ""
            })
        }

        if (!checkPasswordLength(password)) {
            return setPasswordErrorMessages({
                ...passwordErrorMessages,
                password: "Please enter password :("
            })
        } else {
            setPasswordErrorMessages({
                ...passwordErrorMessages,
                password: ""
            })
        }

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
            errorMessage={errorMessage}
            loginState={loginState}
            emailErrorMessages={emailErrorMessages}
            passwordErrorMessages={passwordErrorMessages}
        />
        <FooterComponent></FooterComponent>
    </>
}
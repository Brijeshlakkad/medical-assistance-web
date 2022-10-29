import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../components/footer/footer";
import HeaderComponent from "../components/header/header";
import { PatientSignupComponent } from "../components/patient-signup/patient-signup";
import { PathConstants } from "../lib/path-constants";
import { PatientLoginSignupState, signup } from "../store/actions/patient";

export default function Signup(props) {
    const [user, setUser] = useState({
        fullName: "",
        emailAddress: "",
        addressLine: "",
        city: "",
        province: "",
        country: "",
        dateOfBirth: "",
        phoneNumber: "",
        password: "",
        rePassword: ""
    });

    const onFieldChange = (fieldName, value) => {
        setUser({
            ...user,
            [fieldName]: value
        });
    }

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(user));
    }

    const signupState = useSelector(state => state.patient.state);
    const errorMessage = useSelector(state => state.patient.errorMessage);

    const navigate = useNavigate();

    useEffect(() => {
        if (signupState === PatientLoginSignupState.COMPLETED) {
            // redirect to PatientHome page.
            navigate(PathConstants.PatientHome);
        }
    }, [navigate, signupState]);

    return (
        <>
            <HeaderComponent></HeaderComponent>
            <PatientSignupComponent
                user={user}
                onFieldChange={onFieldChange}
                onSubmit={onSubmit}
                signupState={signupState}
                errorMessage={errorMessage}
            ></PatientSignupComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}
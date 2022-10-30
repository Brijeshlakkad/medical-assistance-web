import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../components/footer/footer";
import HeaderComponent from "../components/header/header";
import { PatientSignupComponent } from "../components/patient-signup/patient-signup";
import { PathConstants } from "../lib/path-constants";
import { RequestState, UserRole } from "../lib/types";
import { signup } from "../store/actions/user";

export default function PatientSignup(props) {
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
        dispatch(signup(user, UserRole.PATIENT));
    }

    const signupState = useSelector(state => state.user.state);
    const errorMessage = useSelector(state => state.user.errorMessage);

    const navigate = useNavigate();

    useEffect(() => {
        if (signupState === RequestState.COMPLETED) {
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
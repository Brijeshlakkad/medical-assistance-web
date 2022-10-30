import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { PathConstants } from '../lib/path-constants'
import { RequestState, UserRole } from '../lib/types'
import CounselorSignup from '../components/counselor-signup/counselor-signup'
import FooterComponent from '../components/footer/footer'
import { Header } from './header'

export default function CounselorSignupPage(props) {
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

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(signup(user, UserRole.PATIENT));
    // }

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
            <Header></Header>
            <CounselorSignup
                user={user}
                onFieldChange={onFieldChange}
                //onSubmit={onSubmit}
                signupState={signupState}
                errorMessage={errorMessage}></CounselorSignup>
            <FooterComponent></FooterComponent>
        </>
    )
}
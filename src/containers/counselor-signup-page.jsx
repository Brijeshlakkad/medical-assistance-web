import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { CounselorSignupComponent } from '../components/counselor-signup/counselor-signup';
import FooterComponent from '../components/footer/footer';
import { PathConstants } from '../lib/path-constants';
import { RequestState, UserRole } from '../lib/types';
import { onLoadUserLoginSignupPage, signup } from '../store/actions/user';
import Header from './header';

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
        rePassword: "",
        registrationNumber: ""
    });

    const onFieldChange = (fieldName, value) => {
        setUser({
            ...user,
            [fieldName]: value
        });
    }

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(onLoadUserLoginSignupPage());
    }, [dispatch]);

    const onSubmit = (e) => {
        dispatch(signup(user, UserRole.COUNSELOR));
    }

    const signupState = useSelector(state => state.user.state);
    const errorMessage = useSelector(state => state.user.errorMessage);

    const navigate = useNavigate();

    useEffect(() => {
        if (signupState === RequestState.COMPLETED) {
            // redirect to CounselorLOP page.
            navigate(PathConstants.CounselorLOP);
        }
    }, [navigate, signupState]);


    return (
        <>
            <Header />
            <CounselorSignupComponent
                user={user}
                onFieldChange={onFieldChange}
                onSubmit={onSubmit}
                signupState={signupState}
                errorMessage={errorMessage}
            />
            <FooterComponent></FooterComponent>
        </>
    )
}
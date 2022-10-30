import React, { useEffect, useState } from 'react'
import FooterComponent from '../components/footer/footer'
import CounselorLoginComponent from '../components/counselor-login/counselor-login'
import Header from './header'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/actions/user';
import { RequestState, UserRole } from '../lib/types';
import { PathConstants } from '../lib/path-constants';

export default function CounselorLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const loginState = useSelector(state => state.user.state);
    const errorMessage = useSelector(state => state.user.errorMessage);

    const navigate = useNavigate();

    const onClick = () => {
        dispatch(login(email, password, UserRole.COUNSELOR));
    }

    useEffect(() => {
        if (loginState === RequestState.COMPLETED) {
            // redirect to CounselorLOP page.
            navigate(PathConstants.CounselorLOP);
        }
    }, [navigate, loginState]);

    return (
        <>
            <Header />
            <CounselorLoginComponent
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onClick={onClick}
                errorMessage={errorMessage}
                loginState={loginState}
            />
            <FooterComponent />
        </>
    )
}


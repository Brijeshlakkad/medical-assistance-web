import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import HeaderComponent from '../components/header/header';
import { PathConstants } from '../lib/path-constants';

export default function Header() {
    const userRole = useSelector(state => state.user.role);
    const [loginPath, setLoginPath] = useState(PathConstants.PatientLogin);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === PathConstants.DoctorLogin || location.pathname === PathConstants.DoctorSignup) {
            setLoginPath(PathConstants.DoctorLogin);
        } else if (location.pathname === PathConstants.CounselorLogin || location.pathname === PathConstants.CounselorSignup) {
            setLoginPath(PathConstants.CounselorLogin);
        } else if (location.pathname === PathConstants.Home ||
            location.pathname === PathConstants.PatientLogin ||
            location.pathname === PathConstants.PatientSignup) {
            setLoginPath(PathConstants.PatientLogin);
        } else {
            setLoginPath(null);
        }
    }, [location, setLoginPath]);

    return (
        <HeaderComponent userRole={userRole} loginPath={loginPath} />
    )
}

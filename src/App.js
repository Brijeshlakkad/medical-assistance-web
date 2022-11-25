import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';

import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "./App.css";
import AssessmentPage from "./containers/assessment-page";
import CounselorLOP from "./containers/counselor-list-of-patient";
import CounselorLogin from "./containers/counselor-login-page";
import CounselorPatientDetails from './containers/counselor-patient-details';
import CounselorSignupPage from './containers/counselor-signup-page';
import CounselorViewSchedule from './containers/counselor-view-schedule';
import DoctorLOP from "./containers/doctor-list-of-patient";
import DoctorLoginPage from './containers/doctor-login-page';
import DoctorPatientDetails from './containers/doctor-patient-details';
import DoctorSignupPage from './containers/doctor-signup-page';
import DoctorViewSchedule from './containers/doctor-view-schedule';
import ForwardToDoctor from './containers/forward-to-doctor';
import LandingPage from "./containers/landing-page";
import Login from "./containers/patient-login";
import Signup from "./containers/patient-signup";
import StatusPage from './containers/status-page';
import AppStateHOC from './lib/app-state-hoc';
import { PathConstants } from "./lib/path-constants";
import { ServerUserRoleToUserRole } from './lib/types';
import { logout, setUser } from './store/actions/user';
import AdminLogin from "./containers/admin-login-page";

function App() {
  const dispatch = useDispatch();

  // Decode token to extract user information.
  useEffect(() => {
    const accessToken = localStorage.getItem("USER");
    if (accessToken) {
      const user = jwtDecode(accessToken); // decode your token here
      if (user.role && user.role.length) {
        dispatch(setUser({
          emailAddress: user.sub
        }, ServerUserRoleToUserRole[user.role[0].authority]));
      } else {
        dispatch(logout());
      }
    }
  })


  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathConstants.Home} element={<LandingPage />} />
        <Route path={PathConstants.PatientLogin} element={<Login />} />
        <Route path={PathConstants.PatientSignup} element={<Signup />} />
        <Route path={PathConstants.StatusPage} element={<StatusPage />} />
        <Route path={PathConstants.CounselorPatientDetails} element={<CounselorPatientDetails />} />
        <Route path={PathConstants.AssessmentPage} element={<AssessmentPage />} />
        <Route path={PathConstants.CounselorLogin} element={<CounselorLogin />} />
        <Route path={PathConstants.CounselorSignup} element={<CounselorSignupPage />} />
        <Route path={PathConstants.CounselorSchedule} element={<CounselorViewSchedule />} />
        <Route path={PathConstants.DoctorSchedule} element={<DoctorViewSchedule />} />
        <Route path={PathConstants.DoctorLogin} element={<DoctorLoginPage />} />
        <Route path={PathConstants.DoctorSignup} element={<DoctorSignupPage />} />
        <Route path={PathConstants.CounselorLOP} element={<CounselorLOP />} />
        <Route path={PathConstants.DoctorLOP} element={<DoctorLOP />} />
        <Route path={PathConstants.DoctorPatientDetails} element={<DoctorPatientDetails />} />
        <Route path={PathConstants.CounselorToDoctor} element={<ForwardToDoctor />} />
        <Route path={PathConstants.AdminLogin} element={ <AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

const WrappedApp = compose(AppStateHOC)(App);

export default WrappedApp;

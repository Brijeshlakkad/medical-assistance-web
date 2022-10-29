import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';

import "./App.css";
import AssessmentPage from "./containers/assessment-page";
import CounselorLOP from "./containers/counselor-list-of-patient";
import CounselorSignupLogin from './containers/counselor-signup-login';
import DoctorLOP from "./containers/doctor-list-of-patient";
import DoctorSignupLogin from './containers/doctor-signup-login';
import LandingPage from './containers/landing-page';
import Login from "./containers/patient-login";
import Signup from "./containers/patient-signup";
import AppStateHOC from './lib/app-state-hoc';
import { PathConstants } from "./lib/path-constants";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path={PathConstants.Home} element={<LandingPage />} />
        <Route path={PathConstants.PatientLogin} element={<Login />} />
        <Route path={PathConstants.PatientSignup} element={<Signup />} />
        <Route path={PathConstants.AssessmentPage} element={<AssessmentPage />} />
        <Route path={PathConstants.CounselorLogin} element={<CounselorSignupLogin />} />
        <Route path={PathConstants.DoctorLogin} element={<DoctorSignupLogin />} />
        <Route path={PathConstants.CounselorLOP} element={<CounselorLOP />} />
        <Route path={PathConstants.DoctorLOP} element={<DoctorLOP />} />
      </Routes>
    </BrowserRouter>
  );
}

const WrappedApp = compose(AppStateHOC)(App);

export default WrappedApp;

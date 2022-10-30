import { BrowserRouter, Route, Routes } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import AssessmentPage from "./containers/assessment-page";
import LandingPage from "./containers/landing-page";
import PatientDetails from "./containers/patient-details";
import Login from "./containers/patient-login";
import Signup from "./containers/patient-signup";
import AppStateHOC from "./lib/app-state-hoc";
import { PathConstants } from "./lib/path-constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathConstants.Home} element={<LandingPage />} />
        <Route path={PathConstants.PatientLogin} element={<Login />} />
        <Route path={PathConstants.PatientSignup} element={<Signup />} />
        <Route
          path={PathConstants.AssessmentPage}
          element={<AssessmentPage />}
        />
        <Route
          path={PathConstants.PatientDetails}
          element={<PatientDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

const WrappedApp = compose(AppStateHOC)(App);

export default WrappedApp;

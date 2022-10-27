import { BrowserRouter, Route, Routes } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import AssessmentPage from "./containers/assessment-page";
import Home from "./containers/home";
import Login from "./containers/patient-login";
import Signup from "./containers/patient-signup";
import AppStateHOC from "./lib/app-state-hoc";
import { PathConstants } from "./lib/path-constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathConstants.Home} element={<Home />} />
        <Route path={PathConstants.PatientLogin} element={<Login />} />
        <Route path={PathConstants.PatientSignup} element={<Signup />} />
        <Route
          path={PathConstants.AssessmentPage}
          element={<AssessmentPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

const WrappedApp = compose(AppStateHOC)(App);

export default WrappedApp;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';

import Home from './containers/home.jsx';
import AppStateHOC from './lib/app-state-hoc';
import DoctorSignupLogin from './containers/doctorSignupLogin';
import CounselorSignupLogin from './containers/counselorSignupLogin';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/counselor-signup-login" element={<CounselorSignupLogin/>} />
        <Route path="/doctor-signup-login" element={<DoctorSignupLogin/>} />

      </Routes>
    </BrowserRouter>
   );
}

const WrappedApp = compose(
  AppStateHOC
)(App);

export default WrappedApp;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';

import Home from './containers/home.jsx';
import Login from './containers/login.jsx';
import Signup from './containers/signup';
import AppStateHOC from './lib/app-state-hoc';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

const WrappedApp = compose(
  AppStateHOC
)(App);

export default WrappedApp;


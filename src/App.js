import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';

import Home from './containers/home.jsx';
import AppStateHOC from './lib/app-state-hoc';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

const WrappedApp = compose(
  AppStateHOC
)(App);

export default WrappedApp;


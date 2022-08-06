import React from 'react';
import './App.css';
import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import Notfound from './Notfound';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

const SidebarLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route element={<SidebarLayout/>}>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/dp" element={<DP />} />
              <Route path='*' element={<Notfound />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
            
          </Routes>
        </div>
      </Router>
  );
}

export default App;

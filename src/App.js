import React from 'react';
import './App.css';
import {AuthProvider} from "./account/Authentication";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./account/Login";
import {Signup} from "./account/Signup";
import {HomePage} from "./pages/HomePage";
import {Donation} from "./pages/donation";
import {Crisis} from "./pages/Crisis";
import {Volunteer} from "./pages/Volunteer";
import {Navbar} from "./component/Navbar";
import {Logout} from "./account/Logout";
import {Profile} from "./pages/Profile";

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/crisis" element={<Crisis />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;

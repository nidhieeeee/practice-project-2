import React, { useState } from "react";
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer";
import UserForm from "./components/UserForm";
import UserProfile from "./components/UserProfile";
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import './App.css'

function App() {
  const [userData , setUserData] = useState(null);
  return (
    <div className="main">
      <Navbar />
<Router>
  <Routes>
    <Route path="/" element={<LandingPage  />} />
    <Route path="/userform" element={<UserForm setUserData={setUserData} />} />
    <Route path="/userprofile" element={<UserProfile data={userData} />} />
  </Routes>
</Router>
<Footer />
</div>
  );
}

export default App

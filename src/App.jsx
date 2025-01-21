import React from "react";
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer";
import UserForm from "./components/UserForm";
import UserProfile from "./components/UserProfile";
import './App.css'

function App() {
  return (
    <>
      {/*Here's Something for you : https://nidhieeeee.vercel.app omgggggggggggggggggggggggggg/ */}
      <Navbar />
      {/* <LandingPage />

<UserForm /> */}
<UserProfile />
<Footer />
    </>
  )
}

export default App

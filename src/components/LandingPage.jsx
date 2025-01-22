import React from "react";
import "./LandingPage.css";
import Profiles from "./Profiles.jsx";
import { useNavigate } from "react-router-dom";
function LandingPage() {
    const nevigate = useNavigate();


    function hanldeGetStarted() {
        nevigate("/userform");
    }
    return (
        <div className="LpageContainer">
            <div className="hero-section">
                <h1>Buy Certification Course with Best Price</h1>
                <p>Through our website you can buy certification courses with fair price. Be the part of  Nidhi Academy</p>

                <button className="get-started " onClick={hanldeGetStarted}>Get Started</button>
            </div>
            <div className="about top">
                <h1>About Nidhi Academy</h1>
                <p>We offer affordable online learning opportunities for selected students, ensuring access to quality education at minimal cost. Upon course completion, participants will receive a certificate that adds value to their resume and enhances their career prospects.
                </p>
            </div>
            <div className="team">
                <h1>Our Team</h1>
                <div className="developer">

                    <Profiles />
                </div>
            </div>
            <div className="reviews">
                <h1 className="review">Reviews</h1>

                <div className="users top ">
                    <div className="user">
                        <p className="quotes bottom">"This Academy offers top-notch learning at an unbeatable price! The certificate is a great boost for my resume."</p>
                        <div className="image">
                            <p>Krisha Patel</p>
                            <img src="https://pngimg.com/d/student_PNG62520.png" alt="student-photo" />
                        </div>
                    </div>
                    <div className="user">

                        <div className="image">
                            <p>Pooja Batwa</p>
                            <img src="https://freepngimg.com/save/166578-student-free-transparent-image-hd/570x532" alt="student-photo" />
                        </div>
                        <p className="quotes top">"Affordable, accessible, and effective—this is the perfect platform for anyone eager to learn and grow professionally."</p>
                    </div>
                    <div className="user">
                        <p className="quotes bottom">"I gained valuable skills without spending a fortune. The certification made a real difference in my job applications."</p>
                        <div className="image">
                            <p>Tanisha Patel</p>
                            <img src="https://pngimg.com/d/student_PNG125.png" alt="student-photo" />
                        </div>
                    </div>
                    <div className="user">

                        <div className="image">
                            <p>Foram Ravaliya</p>
                            <img src="https://freepngimg.com/download/student/166576-student-download-free-image.png" alt="student-photo" />
                        </div>
                        <p className="quotes top">
                            "An amazing opportunity to learn online at a low cost. The certificate adds credibility to my achievements!"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;
import React from "react";
import { Mail } from 'lucide-react';
import "./Profiles.css";
function Profiles(){
    return(
        <div className="other-users"> 
        <div className="profile-card">
                <div className="profile-header">
                    <img src="https://thumbs.dreamstime.com/b/d-icon-avatar-cartoon-cute-freelancer-woman-working-online-learning-laptop-transparent-png-background-works-embodying-345422695.jpg" alt="Avatar" className="profile-avatar" />
                    <h2 className="profile-name">Nidhi Mehta</h2>
                    <p className="profile-artistName">Front-End Developer</p>
                </div>
                <div className="profile-body">
                    <div className="profile-info">
                        <h3>Contact Information</h3>
                        <p> <Mail height="20px"  /> <span>nidhimehta0303@gmail.com</span></p>
                        
                    </div>
                    <div className="your-song">
                        <h3>About Me</h3>
                        <p>I’m a passionate developer with expertise in Front-End. I specialize in creating user-friendly interfaces, scalable systems and innovative solutions that solve real-world problems.</p>
                    </div>
                </div>
            </div>
        </div>
    );


}
export default Profiles;
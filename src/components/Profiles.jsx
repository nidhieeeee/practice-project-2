import React from "react"
import "./Profiles.css"
function Profiles(){
    return(
        <div className="other-users"> 
        <div className="profile-card">
                <div className="profile-header">
                    <img src="https://thumbs.dreamstime.com/b/d-icon-avatar-cartoon-cute-freelancer-woman-working-online-learning-laptop-transparent-png-background-works-embodying-345422695.jpg" alt="Avatar" className="profile-avatar" />
                    <h2 className="profile-name">Nidhi Mehta</h2>
                    <p className="profile-artistName">Noah</p>
                </div>
                <div className="profile-body">
                    <div className="profile-info">
                        <h3>Contact Information</h3>
                        <p>Email: nidhimehta0303@gmail.com</p>
                    </div>
                    <div className="your-song">
                        <h3>My Thoughts</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic similique ex deserunt eum rerum quisquam, incidunt atque minus fuga sed officiis illo mollitia dolores architecto ipsam laboriosam numquam dolorum adipisci.</p>
                    </div>
                </div>
            </div>
        </div>
    );


}
export default Profiles;
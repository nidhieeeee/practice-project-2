import React, { useEffect } from "react";
import { Mail , Phone , MapPin , University ,  BookOpen , Calendar} from 'lucide-react';
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
function UserProfile({data}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!data) {
            navigate("/userform");
        }
    }, []);

    return (
        <div className="profileContainer">
            <div className="pfp">
                <img src={
                    data?.gender =="female" ? "https://www.pngall.com/wp-content/uploads/5/Cat-Anime-Girl-PNG-Free-Download.png" : "https://static.vecteezy.com/system/resources/previews/035/916/326/non_2x/ai-generated-male-anime-characters-transparent-background-free-png.png" 
                } alt="pfp" />
            </div>

<div className="name-bio">
<h3>Personal Information</h3>
                    <p>{data?.name}</p>
                    <p>{data?.bio}</p>
</div>

            <div className="contact-education">
                <div className="contact">
                    <h3>Contact Information</h3>
                    <div className="flex"><Mail />
                    <p> {data?.email}</p></div>
                    <div className="flex"> <Phone /><p>{data?.phone}</p></div>
                    
                    <div className="flex"><MapPin />
                    <p>{data?.location}</p></div>
                </div>
                <div className="education">
                    <h3>Education</h3>
                    <div className="flex"><University /><p>{data?.university}</p></div>
                    <div className="flex">< BookOpen /><p>{data?.course}</p>
                    </div>
                    <div className="flex"><Calendar /><p>{data?.year}</p></div>
                    
                    
                </div>
            </div>
        </div>
    );
}
export default UserProfile;
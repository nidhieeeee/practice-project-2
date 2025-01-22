import React, { useEffect } from "react";
import { Mail, Phone, MapPin, University, BookOpen, Calendar } from 'lucide-react';
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";

function UserProfile({ data }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!data) {
            navigate("/userform");
        }
    }, []);

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <img
                        src={
                            data?.gender === "female"
                                ? "https://png.pngtree.com/png-clipart/20231210/original/pngtree-business-woman-avatar-image-png-image_13810303.png"
                                : "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
                        }
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="profile-name-bio">
                        <h2>{data?.name || "User Name"}</h2>
                        <p>{data?.bio || "A short bio about the user."}</p>
                    </div>
                </div>

                <div className="profile-details">
                    <div className="details-section">
                        <h3>Contact Information</h3>
                        <div className="detail-item">
                            <Mail />
                            <p>{data?.email || "example@example.com"}</p>
                        </div>
                        <div className="detail-item">
                            <Phone />
                            <p>{data?.phone || "+123 456 7890"}</p>
                        </div>
                        <div className="detail-item">
                            <MapPin />
                            <p>{data?.location || "Location not provided"}</p>
                        </div>
                    </div>

                    <div className="details-section">
                        <h3>Education</h3>
                        <div className="detail-item">
                            <University />
                            <p>{data?.university || "University Name"}</p>
                        </div>
                        <div className="detail-item">
                            <BookOpen />
                            <p>{data?.course || "Course Name"}</p>
                        </div>
                        <div className="detail-item">
                            <Calendar />
                            <p>{data?.year } Year of Graduation </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;

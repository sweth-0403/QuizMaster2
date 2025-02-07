import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import Navbar from "../components/Navbar";

function ProfilePage({ userData }) {
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("profilePic") || ""
  );
  const [previousScores, setPreviousScores] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("quizScores")) || [];
    setPreviousScores(storedScores);
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        localStorage.setItem("profilePic", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-card">
        <div className="profile-pic-container">
          <label htmlFor="profile-pic-input">
            <img
              src={profilePic || "default-profile.png"}
              alt="Profile"
              className="profile-pic"
            />
          </label>
          <input
            id="profile-pic-input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        <h2>{userData.name}</h2>
        <p>{userData.email}</p>
        <h3>Previous Scores</h3>
        <ul className="score-list">
          {previousScores.length > 0 ? (
            previousScores.map((score, index) => (
              <li key={index}>
                Quiz {index + 1}: {score} points
              </li>
            ))
          ) : (
            <p className="no-scores">No previous scores available.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;

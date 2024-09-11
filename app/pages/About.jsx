import React from "react";
import "../assets/pages/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="profile-header">
        <div className="profile-info">
          <img src="/images/wire3.jpg" alt="Company Logo" className="logo" />
          <div>
            <h1>A1 BONSAI PARAISO online shop</h1>
            <span className="status">Active 32 minutes ago</span>
          </div>
        </div>
        <div className="action-buttons">
          <button className="follow-btn">+ FOLLOW</button>
          <button className="chat-btn">CHAT</button>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-label">Products:</span>
          <span className="stat-value">212</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Followers:</span>
          <span className="stat-value">7.7K</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Following:</span>
          <span className="stat-value">683</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Chat Performance:</span>
          <span className="stat-value">83% (Within Hours)</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Rating:</span>
          <span className="stat-value">4.9 (12.5K Rating)</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Joined:</span>
          <span className="stat-value">4 Years Ago</span>
        </div>
      </div>
    </div>
  );
}

export default About;

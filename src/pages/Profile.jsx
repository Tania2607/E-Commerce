import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const registerUser = JSON.parse(localStorage.getItem("RegisterUser"));

  if (!registerUser) {
    navigate('/login');
    return null;
  }

  const fullName = registerUser?.name || "No Name";
  const initials = fullName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  const email = registerUser?.email || "No Email";

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <div className="avatar-placeholder">
              {initials}
            </div>
          </div>
          <div className="profile-info-header">
            <h1>{fullName}</h1>
            <p className="profile-email">{email}</p>
          </div>
        </div>
        <div className="profile-content">
          <div className="profile-section">
            <h2>Personal Information</h2>
            <div className="profile-details">
              <div className="detail-item">
                <span className="detail-label">Full Name:</span>
                <span className="detail-value">{fullName}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{registerUser?.email || "No Email"}</span>
              </div>
              {registerUser?.phone && (
                <div className="detail-item">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{registerUser.phone}</span>
                </div>
              )}
              {registerUser?.address && (
                <div className="detail-item">
                  <span className="detail-label">Address:</span>
                  <span className="detail-value">{registerUser.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ profileData }) => {
  const { name, flavor, description, imageUrl } = profileData;

  return (
    <div className="profile-card">
      <img src={imageUrl} alt={`${name}`} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-flavor">{flavor}</p>
      <p className="profile-description">{description}</p>
    </div>
  );
};

export default ProfileCard;

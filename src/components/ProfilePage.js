
import React, { useEffect, useState } from 'react';
import { fetchData } from '../FetchData';
import { doc, updateDoc } from 'firebase/firestore';
import { storage, firestore } from '../firebase';
import './Profile.css'; // Import the CSS file
import profilepic from '../photos/profile.jpg';

function UserProfile() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [data, setData] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureChanged, setProfilePictureChanged] = useState(false);
  const [page, setPage] = useState('');
  const [userData, setUserData] = useState({
    userId: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    isEditing: false,
    docId: ''
  });

  useEffect(() => {
    const storedData = localStorage.getItem('user_id');
    setLoggedInUser(storedData);
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchData('Users');
      setData(usersData);
    };
    getUsers();
  }, []);

  useEffect(() => {
    const matchedUser = data.find(user => user['user_id'] === loggedInUser);
    if (matchedUser) {
      setUserData(prevUserData => ({
        ...prevUserData,
        userId: matchedUser['user_id'],
        username: matchedUser['u_name'],
        email: matchedUser['email'],
        password: matchedUser['password'],
        phoneNumber: matchedUser['phone_no'],
        gender: matchedUser['gender'],
        dateOfBirth: matchedUser['dob'],
        docId: matchedUser.id,
        profilePicture: matchedUser['profile_picture'] // Assuming 'profile_picture' is the field for storing profile picture in your data
      }));
    }
  }, [data]);

  const handleEditClick = () => {
    setUserData(prevUserData => ({
      ...prevUserData,
      isEditing: true
    }));
  };

  const handleSaveClick = async () => {
    try {
      const userRef = doc(firestore, 'Users', userData.docId);
      await updateDoc(userRef, {
        u_name: userData.username,
        email: userData.email,
        password: userData.password,
        phone_no: userData.phoneNumber,
        dateOfBirth: userData.dateOfBirth,
        gender: userData.gender,
        profile_picture: userData.profilePicture // Update the field for storing profile picture in your data
      });
      setUserData(prevUserData => ({
        ...prevUserData,
        isEditing: false
      }));

      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const handleBack = () => {
    setPage('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handlePageChange = () => {
    setPage('myavailability');
  };

  const handleLogoutClick = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      localStorage.removeItem('user_id');
      localStorage.removeItem('username');
      window.location.reload();
    }
  };

  const handleProfilePictureChange = e => {
    const file = e.target.files[0];
    setProfilePicture(file);
    setProfilePictureChanged(true);
  };

  const renderProfilePicture = () => {
    if (profilePictureChanged && profilePicture) {
      return <img src={URL.createObjectURL(profilePicture)} alt="Profile" />;
    } else if (userData.profilePicture) {
      return <img src={userData.profilePicture} alt="Profile" />;
    } else {
      return (
        <>
          {/* <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            id="profile-input"
            hidden
          /> */}
          <img src={profilepic} alt="Profile" />
          {/* <label htmlFor="profile-input" className="profile-upload-label">
            <span>+</span>
          </label> */}
        </>
      );
    }
  };

  return (
    <div className="profile-container">
        <div className="profile-details">
          <div className='profile_main'>
          <div className="profile-pic">{renderProfilePicture()}
          </div>
         <div className='profile_content'> <h1>Profile Details</h1>

          <p>User ID: {userData.userId}</p>
          <p>
            Username:
            {userData.isEditing ? (
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
              />
            ) : (
              userData.username
            )}
          </p>
          <p>
            Email:
            {userData.isEditing ? (
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            ) : (
              userData.email
            )}
          </p>
          <p>
            Password:
            {userData.isEditing ? (
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            ) : (
              userData.password
            )}
          </p>
          <p>
            Phone Number:
            {userData.isEditing ? (
              <input
                type="text"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
              />
            ) : (
              userData.phoneNumber
            )}
          </p>
          <p>
            Date of Birth:
            {userData.isEditing ? (
              <input
                type="text"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
              />
            ) : (
              userData.dateOfBirth
            )}
          </p>
          <p>
            Gender:
            {userData.isEditing ? (
              <input
                type="text"
                name="gender"
                value={userData.gender}
                onChange={handleChange}
              />
            ) : (
              userData.gender
            )}
          </p></div></div>
          {userData.isEditing ? (
            <button onClick={handleSaveClick}>Save</button>
          ) : (
            <button class="Btn" onClick={handleEditClick}>Edit
            <svg class="svg" viewBox="0 0 512 512">
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
          </button>
            
          )}
          <button class="Btn" onClick={handleLogoutClick}>Logout
  
          </button>
          
        </div>
    </div>
  );
}

export default UserProfile
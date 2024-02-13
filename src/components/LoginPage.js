import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import './Login.css';
import home from './home2.jpg';

const LoginPage = ({ onLogin }) => {
  const [usernamep, setUsername] = useState('');
  const [passwordp, setPassword] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (userDetails) {
      localStorage.setItem('user_id', usernamep);
      onLogin(userDetails);
    }
  }, [userDetails, onLogin, usernamep]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const usersRef = collection(firestore, 'Users');
      const q = query(usersRef, where('user_id', '==', usernamep));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError('User not found. Please check your user ID.');
        localStorage.setItem('user_id', usernamep);
        return;
      }

      const user = querySnapshot.docs[0].data();
      if (user.password !== passwordp) {
        setError('Invalid password. Please try again.');
        return;
      }

      setUserDetails(user);
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <div className="login-popup">
      <div style={styles.loginContainer} className="login_form">
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">User ID:</label>
          <input
            style={styles.input}
            type="text"
            id="username"
            value={usernamep}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your user ID"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            style={styles.input}
            type="password"
            id="password"
            value={passwordp}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <div style={styles.loginButtons}>
            <button style={styles.loginButton} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="img_login">
        <img src={home} alt="Login Image" height="340" width="340px" />
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    // borderRadius:'10px',
    width: '300px',
    // margin: '0 auto',
    marginTop: '100px',
  },
  input: {
    padding: '5px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  loginButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginButton: {
    padding: '8px 12px',
    marginTop: '40px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    height:'40px',
    width:'200px',
    cursor: 'pointer',
    marginLeft:'auto',
    marginRight:'auto',
    
  },
};

export default LoginPage;
import React, { useEffect , useState } from 'react';
import './componentsstyle.css';
import { firestore } from '../firebase';
import {addDoc, collection} from '@firebase/firestore';
import { fetchData } from '../FetchData';

const RegisterPage = ({ onRegister, onClose }) => {
  const [usernamep, setUsername] = useState('');
  const [passwordp, setPassword] = useState('');
  const [emailidp , setEmail] = useState('');
  const [confirmPasswordp, setConfirmPassword] = useState('');
  const [phonep, setPhone] = useState('');
  const [dobp, setDob] = useState('');
  const [genderp, setGender] = useState('');
  const [active, setActive] = useState(true);
  const ref = collection(firestore,'Users');
  const [data, setData] = useState([]);
  function generateRandomNumber(des,data) {
    var char;
    if(des == 'patient'){
      char = "P";
    }
    else if(des == 'nurse'){
      char = "N";
    }
    else if(des == 'doctor'){
      char = 'D';
    }
    var count = 0;
    for(let i=0;i<data.length;i++){
      
      if(data[i]['designation'] == des){
        count++;
      }
    }
    count++;
    console.log(count);
    return char + count;
    }
    useEffect(() => {
      const getUsers = async () => {
        const userData = await fetchData('Users');
        setData(userData);
      };
      getUsers();
    }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let userdata = {
      user_id:generateRandomNumber('patient',data),
      u_name:usernamep,
      email:emailidp,
      password:passwordp,
      phone_no:phonep,
      gender:genderp,
      dob:dobp,
      designation:'patient',
      access:"true"

  }
  try{
      addDoc(ref,userdata);
      alert("User Added sucessfully! User ID:"+userdata.user_id+" Password:"+passwordp);
  }catch(e){
    alert("User not added");
      console.log(e);
  }
  resetform();
    onRegister();
  };
  const resetform = () =>{
    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setPhone('');
    setDob('');
    setGender('');
  
  }
  const handleLoginLink = () => {
    // Implement the logic to handle the login link here
    // You can use a router or show/hide components to navigate to the login page
    onRegister();
  };

  return (
    <div className={`register-popup ${active ? 'active' : ''}`}>
      <div className="register-container" style={styles.registerContainer}>
        <h1>Register</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={usernamep}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
            style={styles.input}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={passwordp}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            style={styles.input}
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPasswordp}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
            style={styles.input}
          />
<label>
        Email :
        <input
          type="text"
          value={emailidp}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
<label>
        Phone Number:
        <input
          type="text"
          value={phonep}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />

      <label>
        Date of Birth:
        <input
          type="date"
          value={dobp}
          onChange={(e) => setDob(e.target.value)}
        />
      </label>
      <br />

      <label>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={genderp === 'male'}
            onChange={(e) => setGender(e.target.value)}
          />{' '}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={genderp === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />{' '}
          Female
        </label>
      </label>
      <br />

      {/* <label>
        Designation:
        <select value={designationp} onChange={(e) => setDesignation(e.target.value)}>
          <option value="">Select Designation</option>
          <option value="patient">Patient</option>
          <option value="nurse">Nurse</option>
          <option value="doctor">Doctor</option>
        </select> */}
      {/* </label> */}
      <br />
          <div className="register-buttons" style={styles.registerButtons}>
            <button type="submit" style={styles.registerButton}>Register</button>
          </div>
        </form>
        <p>
          Already have an account? <span onClick={handleLoginLink} style={styles.loginLink}>Login</span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  registerContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    width: '300px',
  },
  input: {
    padding: '5px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  registerButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
  registerButton: {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  loginLink: {
    color: '#007bff',
    cursor: 'pointer',
  },
};

export default RegisterPage;

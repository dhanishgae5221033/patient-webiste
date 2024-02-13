import React, { useState } from 'react';
import './ContactForm.css';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    query: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const helpCollectionRef = collection(firestore, 'Help');
      await addDoc(helpCollectionRef, formData);
      alert('Your Request has been submitted.Our receptist will contact you shortly!');

      // Reset the form after submitting
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        query: '',
      });
    } catch (error) {
      console.error('Error writing data to Firebase:', error);
    }
  };

  return (
    <div className="contact_us_2">
      <div className="responsive-container-block big-container">
        <div className="blueBG"></div>
        <div className="responsive-container-block container">
          <form className="form-box" onSubmit={handleSubmit}>
            <div className="container-block form-wrapper">
              <p className="text-blk contactus-head">Get in Touch</p>
              <div className="responsive-container-block">
                <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                  <p className="text-blk input-title">FIRST NAME</p>
                  <input className="input" id="ijowk" name="firstName" placeholder="Please enter first name..." value={formData.firstName} onChange={handleInputChange} />
                </div>
                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p className="text-blk input-title">LAST NAME</p>
                  <input className="input" id="indfi" name="lastName" placeholder="Please enter last name..." value={formData.lastName} onChange={handleInputChange} />
                </div>
                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p className="text-blk input-title">EMAIL</p>
                  <input className="input" id="ipmgh" name="email" placeholder="Please enter email..." value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p className="text-blk input-title">PHONE NUMBER</p>
                  <input className="input" id="imgis" name="phoneNumber" placeholder="Please enter phone number..." value={formData.phoneNumber} onChange={handleInputChange} />
                </div>
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                  <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND</p>
                  <textarea className="textinput" id="i5vyy" placeholder="Please enter query..." name="query" value={formData.query} onChange={handleInputChange}></textarea>
                </div>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
import React, { useState } from 'react';
import './Navbar.css';


const Navbar = ({
  onHomeClick,
  onCentresOfExcellenceClick,
  onPatientCareClick,
  onAppointmentClick,
  onBillsClick,
  onContactUsClick,
  onSubPageClick,
}) => {
  const [activeTab, setActiveTab] = useState('');

  const handleSetActiveTab = (tabName) => {
    setActiveTab(tabName);
    onSubPageClick(tabName);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button className="nav-btn" onClick={onHomeClick}>
              Home
            </button>
          </li>
          <li className="dropdown">
            <button className="dropbtn" onClick={onCentresOfExcellenceClick}>
              Specialties
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <a href="#" onClick={() => handleSetActiveTab('cardiology')}>
                    Cardiology
                  </a>
                  <a href="#" onClick={() => handleSetActiveTab('neurology')}>
                    Neurology
                  </a>
                  <a href="#" onClick={() => handleSetActiveTab('orthopaedic')}>Orthopaedic</a>
                  <a href="#" onClick={() => handleSetActiveTab('dentistry')}>Dentistry</a>
                  <a href="#" onClick={() => handleSetActiveTab('vascularsurgery')}>Vascular Surgery</a>
                </div>
                <div className="column">
                  <a href="#" onClick={() => handleSetActiveTab('oncology')}>
                    Oncology</a>
                  <a href="#" onClick={() => handleSetActiveTab('gynecology')}>Gynecology</a>
                  <a href="#"  onClick={() => handleSetActiveTab('dermatology')}>Dermatology</a>
                  <a href="#" onClick={() => handleSetActiveTab('psychiatry')}>Psychiatry</a>
                  <a href="#" onClick={() => handleSetActiveTab('ent')}>ENT</a>
                </div>
                <div className="column">
                  <a href="#" onClick={() => handleSetActiveTab('ophthalmology')}>Ophthalmology</a>
                  <a href="#" onClick={() => handleSetActiveTab('urology')}>Urology</a>
                  <a href="#" onClick={() => handleSetActiveTab('nephrology')}>Nephrology</a>
                  <a href="#" onClick={() => handleSetActiveTab('pediatrics')}>Pediatrics</a>
                </div>
                <div className="column">
                  <a href="#"  onClick={() => handleSetActiveTab('pulmonology')}>Pulmonology</a>
                  <a href="#"  onClick={() => handleSetActiveTab('rheumatology')}>Rheumatology</a>
                  <a href="#" onClick={() => handleSetActiveTab('neurosurgery')}>Neurosurgery</a>
                  <a href="#" onClick={() => handleSetActiveTab('gastroenterology')}>Gastroenterology</a>
                </div>
                <div className="column">
                  <a href="#"  onClick={() => handleSetActiveTab('radiology')}>Radiology</a>
                  <a href="#" onClick={() => handleSetActiveTab('plasticsurgery')}>Plastic surgery</a>
                  <a href="#" onClick={() => handleSetActiveTab('neonatology')}>Neonatology</a>
                  <a href="#" onClick={() => handleSetActiveTab('endocrinology')}>Endocrinology</a>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn" onClick={onPatientCareClick}>
              Patient Care
            </button>
          </li>
          <li className="dropdown">
            <button className="dropbtn" onClick={onAppointmentClick}>
              Appointment
            </button>
            {/* <div className="dropdown-content">
              <a href="#">Book Appointment</a>
              <a href="#">Appointment History</a>
            </div> */}
          </li>
          <li className="dropdown">
            <button className="dropbtn" onClick={onBillsClick}>
              Bills
            </button>
            <div className="dropdown-content">
              <a href="#">Pay Online</a>
              <a href="#">Receipt</a>
              <a href="#">Unpaid Bills</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn" onClick={onContactUsClick}>
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import AppoinmentImage from "./AppoinmentImage";
import './homestyles.css';
import { VscPulse } from "react-icons/vsc";
import { fetchData } from "../FetchData";
import { firestore } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

function NewAppointment() {
   const [step, setStep] = useState(1);
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [reason, setReason] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [appointmentList, setAppointmentList] = useState([]);
  const [appointmentId, setAppointmentID] = useState('');
  const [doctorAvailabilityData, setDoctorAvailabilityData] = useState([]);
  const [filteredDoctorAvailability, setFilteredDoctorAvailability] = useState([]);
  const appointmentStatus = 'Confirmed';
  const timeSlots1 = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '12:00', '12:30', '1:00', '1:30'];
  const timeSlots2 = ['4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '8:00', '8:30', '9:00', '9:30'];
  const [filteredAppointments,setFilteredAppointments] = useState([]);

  const [selectedField, setSelectedField] = useState(null);

  

  const handleFieldClick = (fieldName) => {
    setSelectedField(fieldName);
  };
  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchData('Users');
      setData(usersData);
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getDoctorAvailability = async () => {
      const usersData = await fetchData('DoctorsAvailability');
      setDoctorAvailabilityData(usersData);
    };
    getDoctorAvailability();
  }, []);

  useEffect(() => {
    const getAppointments = async () => {
      const usersData = await fetchData('Appointments');
      setAppointmentList(usersData);
    };
    getAppointments();
  }, []);

  useEffect(() => {
    const filteredAvailability = doctorAvailabilityData.filter(
      (availability) =>
        availability.username === selectedDoctor &&
        availability.selectedDate === selectedDate
    );
    setFilteredDoctorAvailability(filteredAvailability);
  }, [selectedDoctor, selectedDate, doctorAvailabilityData]);

  useEffect(() => {
    const filteredAppointments = appointmentList.filter(
      (appointment) => appointment.selectedDate === selectedDate && appointment.selectedDoctor === selectedDoctor
    );
    setFilteredAppointments(filteredAppointments);
  }, [selectedDate, appointmentList]);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleSave = async (e) => {
    e.preventDefault();
      const patientId = localStorage.getItem('user_id');

    try {
      // Prepare the data to be saved in Firestore
      const appointmentData = {
        fullName,
        contact,
        email,
        patientId,
        selectedDate,
        selectedTime,
        reason,
        selectedDoctor,
        speciality,
        appointmentStatus,
        appointmentId,
      };

      // Add the appointment data to the "Appointments" collection in Firestore
      const docRef = await addDoc(collection(firestore, 'Appointments'), appointmentData);
      console.log('Appointment added with ID:', docRef.id);

      // Clear the form after successful submission
      setFullName('');
      setContact('');
      setEmail('');
      setSelectedDate('');
      setSelectedTime('');
      setReason('');
      setSelectedDoctor('');
      setSpeciality('');
      setBookingStatus('Appointment submitted successfully!');
    } catch (error) {
      console.error('Error adding appointment:', error);
      setBookingStatus('Failed to submit appointment. Please try again.');
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Add 1 day to the current date

    const selectedDateTime = new Date(selectedDate).getTime();
    const tomorrowTime = tomorrow.getTime();

    if (selectedDateTime >= tomorrowTime) {
      setSelectedDate(selectedDate);
    } else {
      // Date is not valid, handle it as per your requirement (e.g., show an error message)
    }
  };

  const handleTimeSlotClick = (slot) => {
    console.log("Time slot clicked:", slot);
    setSelectedTime(slot);
  };

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);  
    setAppointmentID('A' + (appointmentList.length +1)); 
  };

  const filteredData = data.filter((item) => item.designation === 'doctor' && item.speciality === speciality);
  const doctorOptions = filteredData.map((doctor) => (
    <option key={doctor.u_name} value={doctor.u_name}>
      {doctor.u_name}
    </option>
  ));

  const specialities = [
    'Cardiology',
    'Neurology',
    'Orthopaedic',
    'Dentistry',
    'Vascular Surgery',
    'Oncology',
    'Gynecology',
    'Dermatology',
    'Psychiatry',
    'ENT',
    'Ophthalmology',
    'Urology',
    'Nephrology',
    'Pediatrics',
    'Pulmonology',
    'Rheumatology',
    'Neurosurgery',
    'Gastroenterology',
    'Radiology',
    'Plastic Surgery',
    'Neonatology',
    'Endocrinology'
  ];

  useEffect(() => {
    if (filteredDoctorAvailability.length > 0) {
      const selectedSlot = filteredDoctorAvailability[0]['selectedSlot'];
      if (selectedSlot === '8am to 2pm') {
        setAvailableTimeSlots(timeSlots1);
      } else if (selectedSlot === '4pm to 10pm') {
        setAvailableTimeSlots(timeSlots2);
      } else {
        setAvailableTimeSlots([]);
      }
    } else {
      setAvailableTimeSlots([]);
    }
  }, [filteredDoctorAvailability]);
  return (
    <div>
      <AppoinmentImage />
      <div className="box">
        <h1>Appointment</h1>
        {step === 1 && (
          <form onSubmit={handleNext}>
            <div className="form-group app">
              <label htmlFor="fullname">Patient Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onClick={(e) => handleFieldClick('fullname')}
          
              />
               {selectedField === 'fullname' &&  <button className="pulse-button">
        <VscPulse className="pulse-icon" size={30} color="red" />
      </button>}
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                onClick={(e) => handleFieldClick('contact')}
              />{selectedField === 'contact' &&  <button className="pulse-button">
              <VscPulse className="pulse-icon" size={30} color="red" />
            </button>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={(e) => handleFieldClick('email')}
              />
            </div>{selectedField === 'email' &&  <button className="pulse-button">
        <VscPulse className="pulse-icon" size={30} color="red" />
      </button>}
            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  onClick={(e) => handleFieldClick('age')}
                  min="0"
                />{selectedField === 'age' &&  <button className="pulse-button">
                <VscPulse className="pulse-icon" size={30} color="red" />
              </button>}
              </div>
              <div className="form-group">
                <label htmlFor="age">Gender</label>
              <div class="radio-button-container">
  <div class="radio-button">
  <input type="radio" class="radio-button__input" id="radio1" name="radio-group"/>
  <label class="radio-button__label" for="radio1">
    <span class="radio-button__custom"></span>
    Male
  </label>
</div>
<div class="radio-button">
  <input type="radio" class="radio-button__input" id="radio2" name="radio-group"/>
  <label class="radio-button__label" for="radio2">
    <span class="radio-button__custom"></span>
   Female
  </label>
</div>
</div>
</div>
            <div className="form-group">
              <label htmlFor="speciality">Speciality</label>
              <select
                id="speciality"
                name="speciality"
                required
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                onClick={(e) => handleFieldClick('speciality')}
              >
                <option value="">Select a speciality</option>
                {specialities.map((speciality) => (
                  <option key={speciality} value={speciality}>
                    {speciality}
                  </option>
                ))}
              </select>{selectedField === 'speciality' &&  <button className="pulse-button">
        <VscPulse className="pulse-icon" size={30} color="red" />
      </button>}
            </div>
            <div className="form-group">
              <label htmlFor="doctor">Select Doctor</label>
              <select id="doctor" name="doctor" required value={selectedDoctor}
               onChange={handleDoctorChange}
               onClick={(e) => handleFieldClick('doctor')}>
                <option value="">Select a doctor</option>
                {doctorOptions}
              </select>{selectedField === 'doctor' &&  <button className="pulse-button">
        <VscPulse className="pulse-icon" size={30} color="red" />
      </button>}
            </div>
            <div className="form-group">
            <button class="cssbuttons-io-button"> Next
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </div>
</button>
            </div>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleSave}>
           <div className="form-group">
            <label htmlFor="date">Appointment Date</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={selectedDate}
              onChange={handleDateChange}
              onClick={(e) => handleFieldClick('date')}
            />{selectedField === 'date' &&  <button className="pulse-button">
            <VscPulse className="pulse-icon" size={30} color="red" />
          </button>}
          </div>
          <div className="form-group">
            <label htmlFor="time">Appointment Time</label>
            <div className="time-slots">
              {availableTimeSlots.map((slot) => (
                <button
                  key={slot}
                  className={selectedTime === slot ? "selected" : ""}
                  onClick={() => handleTimeSlotClick(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="reason">Reason for Appointment</label>
              <textarea
                id="reason"
                name="reason"
                required
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                onClick={(e) => handleFieldClick('reason')}
              />{selectedField === 'reason' &&  <button className="pulse-button">
              <VscPulse className="pulse-icon" size={30} color="red" />
            </button>}
            </div>
            <div className="form-group">
            <button className="submitbtn">
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
  <span>Submit</span>
</button>
            </div>
          </form>
        )}
        
        <p id="successapp">{bookingStatus}</p>
      </div>
      <p></p>
    </div>
  );
}

export default NewAppointment;
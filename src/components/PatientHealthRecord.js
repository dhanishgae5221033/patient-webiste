import React, { useEffect, useState } from 'react';
import { fetchData } from '../FetchData';
import './Prescriptionhealth.css'; // Import the CSS file

// ...

function Prescription({ onPrescriptionClick }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const appointmentsData = await fetchData('Appointments');
      const filteredAppointments = appointmentsData.filter(
        (appointment) =>
          appointment.appointmentStatus === 'Prescription given' &&
          appointment.patientId === localStorage.getItem('user_id')
      );
      setAppointments(filteredAppointments);
    };

    fetchAppointments();
  }, []);

  const handleViewPrescription = (appointmentId) => {
    onPrescriptionClick(appointmentId);
    // Handle the action when the "View Prescription" button is clicked
    // You can navigate to a new page or show a modal with the prescription details
    // Here, let's log the appointmentId to the console
    console.log('View Prescription for Appointment ID:', appointmentId);
  };

  return (
    <div className="outer-box"> {/* Apply className for outer-box */}
      {appointments.length > 0 ? (
        <table className="box-container"> {/* Apply className for box-container */}
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Appointment Status</th>
              <th>Date of Appointment</th>
              <th>Doctor name</th>
              <th>Speciality</th>
              <th>Time</th>
              <th>Assigned Nurse ID</th>

              {/* <th>Contact</th> */}
              {/* <th>Date</th> */}
              {/* <th>Email</th> */}
              <th>Full Name</th>
              <th>Blood Pressure</th>
              <th>Height</th>
              <th>Pulse Rate</th>

              <th>Temperature</th>
              <th>Time</th>
              <th>Weight</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.appointmentId}</td>
                <td>{appointment.appointmentStatus}</td>
                <td>{appointment.selectedDate}</td>
                <td>{appointment.selectedDoctor}</td>
                <td>{appointment.speciality}</td>
                <td>{appointment.selectedTime}</td>
                <td>{appointment.assigned_nurse_id}</td>

                {/* <td>{appointment.contact}</td> */}
                {/* <td>{appointment.date_vitalsigns}</td> */}
                {/* <td>{appointment.email}</td> */}
                <td>{appointment.fullName}</td>
                <td>{appointment.bloodpressure_vitalsigns}</td>
                <td>{appointment.height_vital_signs}</td>
                <td>{appointment.pulserate_vitalsigns}</td>

                <td>{appointment.temperature_vital_signs}</td>
                <td>{appointment.time_vitalsigns}</td>
                <td>{appointment.weight_vitalsigns}</td>
                <td>{appointment.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
}

export default Prescription;
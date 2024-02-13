import React, { useEffect, useState } from "react";
import { fetchData } from "../FetchData";
import PrescriptionDetails from "./PrescriptionDetails";
import '../components/Prescription.css';

function PrescriptionTable() {
  const [appointmentData, setAppointmentData] = useState([]);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  useEffect(() => {
    const fetchAppointmentData = async () => {
      const data = await fetchData("Appointments");
      setAppointmentData(data);
    };

    fetchAppointmentData();
  }, []);

  const handleAppointmentClick = (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
  };

  const handleBack = () => {
    setSelectedAppointmentId(null);
  };

  const filteredAppointments = appointmentData.filter((appointment) => {
    return appointment.patientId === localStorage.getItem('user_id');
  });

  return (
    <div className="outer-box">
      {!selectedAppointmentId && (
        <div className="box-container">
          <h2>Appointments:</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Appointment ID</th>
                  <th>Selected Date</th>
                  <th>Selected Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr
                    key={appointment.appointmentId}
                    className="table-row"
                    onClick={() =>
                      handleAppointmentClick(appointment.appointmentId)
                    }
                  >
                    <td>{appointment.appointmentId}</td>
                    <td>{appointment.selectedDate}</td>
                    <td>{appointment.selectedTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {selectedAppointmentId && (
        <PrescriptionDetails
          appointmentId={selectedAppointmentId}
          onBackClick={handleBack}
        />
      )}
    </div>
  );
}

export default PrescriptionTable;
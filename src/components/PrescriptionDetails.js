import React, { useEffect, useState } from "react";
import { collection, getDocs, where } from "firebase/firestore";
import { firestore } from "../firebase";
import "../components/Prescription.css"; // Import the CSS file

function PrescriptionDetails({ onBackClick, appointmentid }) {
  const [prescriptionData, setPrescriptionData] = useState([]);

  useEffect(() => {
    const fetchPrescriptionData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestore, "Prescription"),
          where("appointmentId", "==", appointmentid)
        );
        const documents = querySnapshot.docs.map((doc) => doc.data());
        if (documents.length > 0) {
          const addedDrugs = documents[0].addedDrugs || [];
          setPrescriptionData(addedDrugs);
        } else {
          setPrescriptionData([]);
        }
      } catch (error) {
        console.error("Error fetching prescription data:", error);
        setPrescriptionData([]);
      }
    };

    fetchPrescriptionData();
  }, [appointmentid]);

  console.log("prescriptionData:", prescriptionData);

  return (
    <div>
 <button  onClick={onBackClick}>Back</button>
   
    <div className="outer-box"> {/* Apply className for outer-box */}
     
      {prescriptionData.length > 0 ? (
        <table className="box-container"> {/* Apply className for box-container */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Dosage</th>
              <th>Days</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {prescriptionData.map((prescription, index) => (
              <tr key={index}>
                <td>{prescription["Name"]}</td>
                <td>{prescription["Manufacturer"]}</td>
                <td>{prescription["dosage"]}</td>
                <td>{prescription["days"]}</td>
                <td>
                  {prescription["frequency"] && (
                    <>
                      {prescription["frequency"]["morning"] && (
                        <span className="status">Morning</span>
                      )}
                      {prescription["frequency"]["afternoon"] && (
                        <span className="status">Afternoon</span> 
                      )}
                      {prescription["frequency"]["night"] && (
                        <span className="status">Night</span> 
                      )}
                      
                      {!prescription["frequency"]["morning"] &&
                        !prescription["frequency"]["afternoon"] &&
                        !prescription["frequency"]["night"] && (
                          <span className="status">None</span> 
                        )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No prescription data available.</p>
      )}
    </div>
    </div>
  );
}

export default PrescriptionDetails;
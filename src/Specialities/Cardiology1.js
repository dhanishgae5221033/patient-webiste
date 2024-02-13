import React, { useEffect, useState } from 'react';
import { fetchData } from '../FetchData';
import doc1 from '../photos/dermatology1.jpg';
import doc2 from '../photos/dermatology3.jpg';
import doc3 from '../photos/dermatology2.jpg';
import './box.css';

const Cardiology1 = (props) => {
  const [doctorsData, setDoctorsData] = useState([]);
  const images = [doc1, doc2, doc3];

  useEffect(() => {
    const fetchDoctorsData = async () => {
      const data = await fetchData('Users');
      setDoctorsData(data);
    };

    fetchDoctorsData();
  }, [props.speciality]);

  const filteredDoctors = doctorsData.filter((doctor) => doctor.speciality === props.specialitychosen);

  return (
    <div>
      <h1>Doctors List</h1>
      <div className="doctors-container">
        {filteredDoctors.map((doctor, index) => (
          <div className="doctor-box" key={index}>
            <img src={images[index]} alt={`Doctor${index+1}`} />
            <h3>{doctor.u_name}</h3>
            <p>{doctor.speciality}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardiology1;
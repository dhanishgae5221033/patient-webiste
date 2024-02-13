import React, { useEffect, useState } from 'react';
// import ImageSlider from './ImageSlider';
import why from './home3.jpg';
import patientcare from './home2.jpg';
import specialists from './home1.jpg';
import online from './online.png';
import medicine from './medicine.png';
import book from './book.png';
import intro from './intro.png';
import './homepage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = ({
  onAppointmentClick,
}) => {
  const [activeTab, setActiveTab] = useState('');

  const handleSetActiveTab = (tabName,spi) => {
    setActiveTab(tabName);
  };
  
  useEffect(() => {
    AOS.init({
    duration: 2500,
    });
    }, []);

  return (
    <div>
     <div className="animation-container">
      <div className="image-container">
        <img
          src={intro}
          alt="Animated Image"
          className="animated-image"
        />
      </div>
      <div className="content-container">
        <h1 className="animated-contenth"><b>SYNCARE HOSPITAL</b></h1>
        <p className="animated-content">Your health is our priority, and we are 
        dedicated to providing you with the finest medical care, backed by expertise
         and compassion. Visit us today to experience healthcare that truly cares for
          you.</p>
      </div>
    </div>
    <div class="flex-containerh">
       <div class="flex-boxh"  >
        <img src={online} alt="no" className="box-image" /><br/>
        Consult Online
        </div>
        <div class="flex-boxh"  onClick={onAppointmentClick}>
        <img src={book} alt="no" className="box-image" /><br/>
        Book Appointment
        </div>
        <div class="flex-boxh" >
        <img src={medicine} alt="no" className="box-image" /><br/>
        Buy Medicine
        </div>
        </div>
      
      
    <div className="boxxh"  data-aos='fade-right'>
          <div className='small_infoh'>
              <p>Centers of Excellence in medicine represent collaborative hubs
                 where experts converge to drive innovation, research, and 
                 advanced patient care. These centers foster multidisciplinary
                  approaches, enabling breakthroughs in diagnostics, treatment,
                   and surgical techniques. By pooling resources and knowledge,
                    they enhance medical education, patient outcomes, and shape 
                    future healthcare practices. These centers serve as beacons 
                    of excellence, pushing the boundaries of medical advancements
                     and revolutionizing the field.
              <br/><br/></p>
      {/* <button className='learnmore' onClick={() => handleSetActiveTab('oncology')}> Learn more</button></p> */}
      <img src={specialists} alt="no" className="def-image" />
      </div>
      </div>
      <div className="boxxh" data-aos='fade-left'>
          <div className='small_infoh'>
          <img src={patientcare} alt="no" className="def-image" />
              <p>Patient care in a hospital is paramount. It involves compassion,
                 competence, and communication. Healthcare professionals prioritize
                  patients' physical and emotional well-being, providing timely interventions, 
                  administering medications, and monitoring vital signs. Effective
                   communication ensures patients are informed and involved in decision-making.
                    Compassionate care fosters trust, comfort, and healing.
              <br/><br/></p>
      {/* <button className='learnmore' onClick={() => handleSetActiveTab('oncology')}> Learn more</button></p> */}
     </div>
      </div>
             

    </div>
  );
};

export default HomePage;

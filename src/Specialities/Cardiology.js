import React, { useState, useEffect } from "react";
import "./cardiology.css"; // Import the CSS file
// import logo from '../Appointment/hosp.jpeg';
import '../Appointment/homestyles.css';
import video from '../photos/cardiology-video.mp4';
import { fetchData } from "../FetchData";
import cardiology1 from '../photos/cardiology1.jpg';
import cardiology2 from '../photos/cardiology2.jpg';
import cardiology3 from '../photos/cardiology3.jpg';
import cardiology4 from '../photos/cardiology3.jpg';
import cardiology5 from '../photos/cardiology4.jpg';
import cardiology6 from '../photos/cardiology5.jpg';
import cardiology7 from '../photos/cardiology6.jpg';
import neurology1 from '../photos/nurology5.jpg';
import neurology2 from '../photos/nurology2.jpg';
import neurology3 from '../photos/nurology3.jpg';
import neurology4 from '../photos/nurology4.jpg';
import neurology5 from '../photos/nurology1.jpeg';
import neurology6 from '../photos/nurology6.jpg';
import neurology7 from '../photos/nurology4.jpg';
import oncology1 from '../photos/oncology1.jpg';
import oncology2 from '../photos/oncology2.jpg';
import oncology3 from '../photos/oncology3.jpg';
import oncology4 from '../photos/oncology4.jpg';
import oncology5 from '../photos/oncology5.jpg';
import oncology6 from '../photos/oncology6.jpg';
import oncology7 from '../photos/oncology7.jpg';
import gynecology1 from '../photos/Gynecology1.jpg';
import gynecology2 from '../photos/Gynecology2.jpg';
import gynecology3 from '../photos/Gynecology3.jpg';
import gynecology4 from '../photos/Gynecology4.jpg';
import gynecology5 from '../photos/Gynecology5.jpg';
import gynecology6 from '../photos/Gynecology6.jpg';
import gynecology7 from '../photos/Gynecology7.jpg';
import ophthalmology1 from '../photos/Ophthalmology1.jpg';
import ophthalmology2 from '../photos/Ophthalmology2.jpg';
import ophthalmology3 from '../photos/Ophthalmology3.jpg';
import ophthalmology4 from '../photos/Ophthalmology4.jpg';
import ophthalmology5 from '../photos/Ophthalmology5.jpg';
import ophthalmology6 from '../photos/Ophthalmology6.jpg';
import ophthalmology7 from '../photos/Ophthalmology7.jpg';
import urology1 from '../photos/urology1.jpeg';
import urology2 from '../photos/urology2.jpg';
import urology3 from '../photos/urology3.jpg';
import urology4 from '../photos/urology4.jpg';
import urology5 from '../photos/urology5.jpg';
import urology6 from '../photos/urology6.jpg';
import urology7 from '../photos/urology7.jpg';
import pulmonology1 from '../photos/pulmonology1.jpg';
import pulmonology2 from '../photos/pulmonology2.jpg';
import pulmonology3 from '../photos/pulmonology3.jpg';
import pulmonology4 from '../photos/pulmonology4.jpeg';
import pulmonology5 from '../photos/pulmonology2.jpg';
import pulmonology6 from '../photos/pulmonology3.jpg';
import pulmonology7 from '../photos/pulmonology4.jpeg';
import rheumatology1 from '../photos/Rheumatology1.jpg';
import rheumatology2 from '../photos/Rheumatology2.jpg';
import rheumatology3 from '../photos/Rheumatology3.jpg';
import rheumatology4 from '../photos/Rheumatology4.jpg';
import rheumatology5 from '../photos/Rheumatology5.jpg';
import rheumatology6 from '../photos/Rheumatology6.jpg';
import rheumatology7 from '../photos/Rheumatology7.jpeg';
import radiology1 from '../photos/radiology1.jpeg';
import radiology2 from '../photos/radiology2.jpg';
import radiology3 from '../photos/radiology3.jpg';
import radiology4 from '../photos/radiology4.jpg';
import radiology5 from '../photos/radiology5.jpg';
import radiology6 from '../photos/radiology6.jpg';
import radiology7 from '../photos/radiology7.jpg';
import dermatology1 from '../photos/dermatology1.jpg';
import dermatology2 from '../photos/dermatology2.jpg';
import dermatology3 from '../photos/dermatology3.jpg';
import dermatology4 from '../photos/dermatology4.jpg';
import dermatology5 from '../photos/dermatology5.jpg';
import dermatology6 from '../photos/dermatology6.jpg';
import dermatology7 from '../photos/dermatology7.jpg';
import nephrology1 from '../photos/nephralogy 1.jpg';
import nephrology2 from '../photos/nephralogy 2.jpg';
import nephrology3 from '../photos/nephralogy 3.jpg';
import nephrology4 from '../photos/nephralogy 4.jpg';
import nephrology5 from '../photos/nephralogy 5.jpg';
import nephrology6 from '../photos/nephralogy 6.jpg';
import nephrology7 from '../photos/nephralogy 7.jpg';
import neurosurgery1 from '../photos/nuro surgery (6).jpg'
import neurosurgery2 from '../photos/nuro surgery (2).jpg';
import neurosurgery3 from '../photos/nuro surgery (3).jpg';
import neurosurgery4 from '../photos/nuro surgery (4).jpg';
import neurosurgery5 from '../photos/nuro surgery (5).jpg';
import neurosurgery6 from '../photos/nuro surgery (6).jpg';
import neurosurgery7 from '../photos/nuro surgery (7).jpg';
import gastroenterology1 from '../photos/gastroenterology  (1).jpeg';
import gastroenterology2 from '../photos/gastroenterology  (2).jpg';
import gastroenterology3 from '../photos/gastroenterology  (3).jpg';
import gastroenterology4 from '../photos/gastroenterology  (4).jpg';
import gastroenterology5 from '../photos/gastroenterology  (5).jpg';
import gastroenterology6 from '../photos/gastroenterology  (1).jpeg';
import gastroenterology7 from '../photos/gastroenterology  (2).jpg';
import plastic1 from '../photos/plastic surgery (1).jpeg';
import plastic2 from '../photos/plastic surgery (2).jpg';
import plastic3 from '../photos/plastic surgery (3).jpg';
import plastic4 from '../photos/plastic surgery (4).jpg';
import plastic5 from '../photos/plastic surgery (5).jpg';
import plastic6 from '../photos/plastic surgery (6).jpg';
import plastic7 from '../photos/plastic surgery (7).jpg';
import neonatology1 from '../photos/Neonatology (1).jpeg';
import neonatology2 from '../photos/Neonatology (2).jpg';
import neonatology3 from '../photos/Neonatology (3).jpg';
import neonatology4 from '../photos/Neonatology (4).jpg';
import neonatology5 from '../photos/Neonatology (5).jpg';
import neonatology6 from '../photos/Neonatology (6).jpg';
import neonatology7 from '../photos/Neonatology (7).jpg';
import dentistry1 from '../photos/Dentistry 1.jpg';
import dentistry2 from '../photos/Dentistry  2.jpg';
import dentistry3 from '../photos/Dentistry 3.jpg';
import dentistry4 from '../photos/Dentistry 4.jpg';
import dentistry5 from '../photos/Dentistry 5.jpg';
import dentistry6 from '../photos/Dentistry 6.jpg';
import dentistry7 from '../photos/Dentistry 7.jpg';
import endocrinology1 from '../photos/endocrine (1).jpeg';
import endocrinology2 from '../photos/endocrine (2).jpg';
import endocrinology3 from '../photos/endocrine (3).jpg';
import endocrinology4 from '../photos/endocrine (4).jpg';
import endocrinology5 from '../photos/endocrine (5).jpg';
import endocrinology6 from '../photos/endocrine (6).jpg';
import endocrinology7 from '../photos/endocrine (7).jpg';
import vascularsurgery1 from '../photos/Vascular Surgery 1.jpg';
import vascularsurgery2 from '../photos/Vascular Surgery 2.jpg';
import vascularsurgery3 from '../photos/Vascular Surgery 3.jpg';
import vascularsurgery4 from '../photos/Vascular Surgery 4.jpg';
import vascularsurgery5 from '../photos/Vascular Surgery 5.jpg';
import vascularsurgery6 from '../photos/Vascular Surgery 6.jpg';
import vascularsurgery7 from '../photos/Vascular Surgery 7.jpg';
import ent1 from '../photos/ent 1.jpg';
import ent2 from '../photos/ent 2.jpg';
import ent3 from '../photos/ent 3.jpg';
import ent4 from '../photos/ent 4.jpg';
import ent5 from '../photos/ent 5.jpg';
import ent6 from '../photos/ent 6.jpg';
import ent7 from '../photos/ent 7.jpg';
import paediatrics1 from '../photos/pediatrics 1.jpg';
import paediatrics2 from '../photos/pediatrics 2.jpg';
import paediatrics3 from '../photos/pediatrics 3.jpg';
import paediatrics4 from '../photos/pediatrics 4.jpg';
import paediatrics5 from '../photos/pediatrics 5.jpg';
import paediatrics6 from '../photos/pediatrics 6.jpg';
import paediatrics7 from '../photos/pediatrics 7.jpg';

function Cardiology(props) {
  const [data, setData] = useState([]);
  const [pics, setPics] = useState({
    cardiology: [
      cardiology1,
      cardiology2,
      cardiology3,
      cardiology4,
      cardiology5,
      cardiology6,
      cardiology7,
      video
    ],
    ent:[
      ent1,
      ent2,
      ent3,
      ent4,
      ent5,
      ent6,
      ent7
    ],
    paediatrics:[
      paediatrics1,
      paediatrics2,
      paediatrics3,
      paediatrics4,
      paediatrics5,
      paediatrics6,
      paediatrics7
    ],
    VascularSurgery:[
      vascularsurgery1,
      vascularsurgery2,
      vascularsurgery3,
      vascularsurgery4,
      vascularsurgery5,
      vascularsurgery6,
      vascularsurgery7
    ],
    endocrinology:[
      endocrinology1,
      endocrinology2,
      endocrinology3,
      endocrinology4,
      endocrinology5,
      endocrinology6,
      endocrinology7
    ],
    dentistry:[
      dentistry1,
      dentistry2,
      dentistry3,
      dentistry4,
      dentistry5,
      dentistry6,
      dentistry7
    ],
    neonatology:[
      neonatology1,
      neonatology2,
      neonatology3,
      neonatology4,
      neonatology5,
      neonatology6,
      neonatology7
    ],
    gastroenterology:[
      gastroenterology1,
      gastroenterology2,
      gastroenterology3,
      gastroenterology4,
      gastroenterology5,
      gastroenterology6,
      gastroenterology7
    ],
    neurology: [
      neurology1,
      neurology2,
      neurology3,
      neurology4,
      neurology5,
      neurology6,
      neurology7,
      video
    ],
    plasticsurgery:[
      plastic1,
      plastic2,
      plastic3,
      plastic4,
      plastic5,
      plastic6,
      plastic7
    ],
    oncology: [
      oncology1,
      oncology2,
      oncology3,
      oncology4,
      oncology5,
      oncology6,
      oncology7,
      video
    ],

    gynecology: [
      gynecology1,
      gynecology2,
      gynecology3,
      gynecology4,
      gynecology5,
      gynecology6,
      gynecology7,
      video
    ],
    neurosurgery:[
      neurosurgery1,
      neurosurgery2,
      neurosurgery3,
      neurosurgery4,
      neurosurgery5,
      neurosurgery6,
      neurosurgery7
    ],
    ophthalmology: [
      ophthalmology1,
      ophthalmology2,
      ophthalmology3,
      ophthalmology4,
      ophthalmology5,
      ophthalmology6,
      ophthalmology7,
      video
    ],

    urology: [
      urology1,
      urology2,
      urology3,
      urology4,
      urology5,
      urology6,
      urology7,
      video
    ],

    pulmonology: [
      pulmonology1,
      pulmonology2,
      pulmonology3,
      pulmonology4,
      pulmonology5,
      pulmonology6,
      pulmonology7,
      video
    ],

    rheumatology: [
      rheumatology1,
      rheumatology2,
      rheumatology3,
      rheumatology4,
      rheumatology5,
      rheumatology6,
      rheumatology7,
      video
    ],

    radiology: [
      radiology1,
      radiology2,
      radiology3,
      radiology4,
      radiology5,
      radiology6,
      radiology7,
      video
    ],

    dermatology: [
      dermatology1,
      dermatology2,
      dermatology3,
      dermatology4,
      dermatology5,
      dermatology6,
      dermatology7,
      video
    ],
    nephrology: [
      nephrology1,
      nephrology2,
      nephrology3,
      nephrology4,
      nephrology5,
      nephrology6,
      nephrology7
    ],
    neurosurgery:[
      neurosurgery1,
      neurosurgery2,
      neurosurgery3,
      neurosurgery4,
      neurosurgery5,
      neurosurgery6,
      neurosurgery7
    ]

  });
  

  useEffect(() => {
    const getData = async () => {
      try {
        const usersData = await fetchData('SpecialitiesData');
        setData(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    getData();
    console.log(data);
  }, []);

  const filteredData = data.filter(item => item.title === props.speciality);
  const images = pics[props.speciality] || [];
  

  return (
    <div>
        
      {filteredData.map((item, index) => (
        <div className="bgcolor" key={index}>
          <div className="cardiology-container">
            <h1 className="cardiology-heading">{item.one}</h1>
            <p className="cardiology-paragraph">
              {item.two}
            </p>
            <div className='rndimg'>
              <img className="roundimg" src={images[0]} alt='summa' />
              <img className="roundimg" src={images[1]} alt='summa' />
              <img className="roundimg" src={images[2]} alt='summa' />
            </div>
            <p className="cardiology-paragraph">
              {item.three}
            </p>
            <div className="boxx">
              <div className='small_info'>
                <img src={images[3]} alt="no" className="def-image" />
                <p>
                  {item.four}
                  <br /><br />
                </p>
              </div>
            </div>
            <br />
            <p className="cardiology-paragraph">
              {item.five}
            </p>
            <div className='appimg'>
              <img id="ghst" src={images[4]} alt='summa' />
              <img id="ghst" src={images[5]} alt='summa' />
              <img id="ghst" src={images[6]} alt='summa' />
            </div>
            <br />
            <div class="threedabba">
              <div class="one">
                <p>
                  {item.six}
                </p>
              </div>
              <div class="two">
                <p>
                  {item.seven}&quot;
                </p>
              </div>
              <div class="three">
                <p>
                  {item.eight}
                </p>
              </div>
            </div>
            <br />
            <div className="video-container">
              <video controls className="video">
                <source src={images[7]} type="video/mp4" />
              </video>
            </div>
            <p>
              {item.nine}
            </p>
          </div>

          <h1 className="quotes">&quot;{item.ten}.&quot;</h1>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Cardiology;

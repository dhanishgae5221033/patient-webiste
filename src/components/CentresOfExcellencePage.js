import React, { useEffect, useState } from 'react';
import './specialities.css'; 
import cardiology from '../photos/cardiology.png';
import neurology from '../photos/neurology.png';
import nephro from '../photos/nephro.png';
import oncology from '../photos/oncologyy.png';
import ophthalmology from '../photos/ophthalmology.png';
import radiology from '../photos/radiology.png';
import cardio from '../photos/cardio.jpg';
import onco from '../photos/onco.jpeg';
import ophtha from '../photos/ophtha.jpeg';
import dent from '../photos/Dent.jpeg';
import vascularsurgery from '../photos/vascularsugery.png';
import nephrology from '../photos/nephrology.png';
// import neuro from '../photos/neuro.jpg';
import gynecology from '../photos/Gynecology.png';
import Orthopaedic from '../photos/Orthopaedic.png';
import Gastroenterology from '../photos/Gastroenterology.png';
import Dermatology from '../photos/Dermatology.png';
import Endocrinology from '../photos/Endocrinology.png';
import Urology from '../photos/Urology.png';
import PlasticSurgery from '../photos/Plastic Surgery.png';
import Dentistry from '../photos/Dentistry.png';
import Pediatrics from '../photos/Pediatrics.png';
import ent from '../photos/ent.png';
import Psychiatry from '../photos/Psychiatry.png';
import Pulmonology from '../photos/Pulmonology.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CentresOfExcellencePage = ({
  onSubPageClick,
  onSpeciality,
}) => {
  const [activeTab, setActiveTab] = useState('');
 
  const handleSetActiveTab = (tabName,spi) => {
    setActiveTab(tabName);
    onSubPageClick(tabName);
    onSpeciality(spi);
  };
  useEffect(() => {
    AOS.init({
    duration: 1500,
    });
    }, []);
  return (
    <div>
    <div class="flex-container">
       <div class="flex-box" onClick={() => handleSetActiveTab('cardiology1', 'Cardiology')}>
        <img src={cardiology} alt="no" className="box-image" />
        Cardiology
        </div>
        <div class="flex-box" onClick={() => handleSetActiveTab('cardiology1' , 'Neurology')}>
        <img src={neurology} alt="no" className="box-image" />
        Neurology
        </div>
        <div class="flex-box" onClick={() => handleSetActiveTab('cardiology1')}>
        <img src={Orthopaedic} alt="no" className="box-image" />
        Orthopaedic
        </div>
        <div class="flex-box">
        <img src={Dentistry} alt="no" className="box-image" />
        Dentistry
        </div>
        <div class="flex-box">
        <img src={PlasticSurgery} alt="no" className="box-image" /><br/>
        Plastic Surgery
        </div>
        <div class="flex-box">
        <img src={oncology} alt="no" className="box-image" />
        Oncology
        </div>
        <div class="flex-box">
        <img src={gynecology} alt="no" className="box-image" />
        Gynecology
        </div>
        <div class="flex-box">
        <img src={Dermatology} alt="no" className="box-image" />
        Dermatology
        </div>
        <div class="flex-box">
        <img src={Psychiatry} alt="no" className="box-image" />
        Psychiatry
        </div>
        <div class="flex-box">
        <img src={ent} alt="no" className="box-image" />
        <br/>ENT
        </div>
        <div class="flex-box">
        <img src={ophthalmology} alt="no" className="box-image" />
        Ophthalmology
        </div>
        <div class="flex-box">
        <img src={Urology} alt="no" className="box-image" />
        Urology
        </div>
        <div class="flex-box">
        <img src={Endocrinology} alt="no" className="box-image" />
        Endocrinology
        </div>
        <div class="flex-box">
        <img src={Pediatrics} alt="no" className="box-image" />
        Pediatrics
        </div>
        <div class="flex-box">
        <img src={Pulmonology} alt="no" className="box-image" />
        Pulmonology
        </div>
        <div class="flex-box">
        <img src={Orthopaedic} alt="no" className="box-image" />
        Rheumatology
        </div>
        <div class="flex-box">
        <img src={neurology} alt="no" className="box-image" />
        Neurosurgery
        </div>
        
        <div class="flex-box">
        <img src={Gastroenterology} alt="no" className="box-image" />
        Gastroenterology
        </div>
        <div class="flex-box">
        <img src={radiology} alt="no" className="box-image" />
        Radiology
        </div>
        <div class="flex-box">
        <img src={vascularsurgery} alt="no" className="box-image" />
        Vascular Surgery
        </div>
        <div class="flex-box">
        <img src={nephro} alt="no" className="box-image" />
        Nephrology
        </div>
        <div class="flex-box">
        <img src={Pediatrics} alt="no" className="box-image" />
        Neonatology
        </div>
    
        </div>
      
        <div className="boxx" >
          <div className='small_info' data-aos='zoom-in'>
        <img src={cardio} alt="no" className="def-image" />
        
          <p><b>Cardiology</b><br/> <br/>
          Cardiology is the branch of medicine that deals with the
diagnosis and treatment of diseases and conditions related to
the heart and blood vessels. Cardiologists are specialized
physicians who are trained to diagnose, prevent, and treat
cardiovascular diseases. 
<br/><br/>
<button className='learnmore' onClick={() => handleSetActiveTab('cardiology')}> Learn more</button></p>
</div>
</div>
<div className="boxx">
          <div className='small_info' data-aos='zoom-in'>
              <p><b>Oncology</b><br/> <br/>
              Oncology is the branch of medicine that deals with the
              prevention, diagnosis, and treatment of cancer.
              Oncologists are specialized physicians who focus on
              managing and providing care for individuals with
              cancer.
              <br/><br/>
      <button className='learnmore' onClick={() => handleSetActiveTab('oncology')}> Learn more</button></p>
      <img src={onco} alt="no" className="def-image" /></div>
              </div>

  <div className="boxx">
        <div className='small_info' data-aos='zoom-in'>
        <img src={ophtha} alt="no" className="def-image" />
        
          <p><b>Ophthalmology</b><br/> <br/>
          Ophthalmology is the branch of medicine that deals with the
          diagnosis, treatment, and prevention of diseases and
          disorders related to the eyes and visual system.

          Ophthalmologists are specialized physicians who are trained
          in eye care and can perform eye examinations, diagnose eye
          conditions, prescribe corrective lenses, and perform eye
          surgeries.
          <br/><br/>
          <button className='learnmore' onClick={() => handleSetActiveTab('ophthalmology')}> Learn more</button></p>
          </div>
          </div>          
    <div className="boxx">
          <div className='small_info' data-aos='zoom-in'>
              <p><b>Orthopedic</b><br/> <br/>
              Orthopedics, also known as orthopedic surgery, is the branch
              of medicine that focuses on the diagnosis, treatment, and
              prevention of disorders and injuries of the musculoskeletal
              system. Orthopedic surgeons specialize in managing
              conditions affecting the bones, joints, muscles, ligaments,
              tendons, and related structures.
              <br/><br/>
      <button className='learnmore' onClick={() => handleSetActiveTab('orthopaedic')}> Learn more</button></p>
      <img src={cardio} alt="no" className="def-image" /></div>
              </div>
<div className="boxx">
        <div className='small_info' data-aos='zoom-in'>
        <img src={dent} alt="no" className="def-image" />
        
          <p><b>Dentistry</b><br/> <br/>
          Dentistry is the branch of medicine that focuses on the
          prevention, diagnosis, and treatment of conditions and
          diseases affecting the oral cavity and surrounding structures,
          including teeth, gums, jaws, and related tissues. Dentists are
          healthcare professionals who specialize in oral health and
          provide a range of services, including dental examinations,
          cleanings, fillings, extractions, and other dental procedures.
          <br/><br/>
          <button className='learnmore' onClick={() => handleSetActiveTab('dentistry')}> Learn more</button></p>
          </div>
          </div> 
          <div className="boxx">
          <div className='small_info' data-aos='zoom-in'>
              <p><b>Vascular Surgery</b><br/> <br/>
              Vascular surgery is a surgical specialty that focuses on the
            diagnosis, treatment, and management of conditions
            affecting the blood vessels, including arteries and veins.
            Vascular surgeons are specialized physicians who address a
            wide range of vascular disorders, such as aneurysms,
            peripheral artery disease, venous insufficiency, and vascular
            trauma
              <br/><br/>
      <button className='learnmore' onClick={() => handleSetActiveTab('vascularsurgery')}> Learn more</button></p>
      <img src={cardio} alt="no" className="def-image" /></div>
              </div>
<div className="boxx">
        <div className='small_info' data-aos='zoom-in'> 
        <img src={cardio} alt="no" className="def-image" />
        
          <p><b>Gynecology</b><br/> <br/>
          Gynecology is the branch of medicine that deals with the
        health and well-being of the female reproductive system,
        including the uterus, ovaries, fallopian tubes, cervix, and
        vagina. Gynecologists are specialized physicians who provide
        medical care for women, addressing a range of reproductive

        health issues, performing screenings, diagnosing conditions,
        and providing treatments.
          <br/><br/>
          <button className='learnmore' onClick={() => handleSetActiveTab('gynecology')}> Learn more</button></p>
          </div>
          </div> 
          <div className="boxx">
          <div className='small_info' data-aos='zoom-in'>
              <p><b>Dermatology</b><br/> <br/>
              Dermatology is the branch of medicine that focuses on the
              diagnosis, treatment, and management of conditions and
              diseases related to the skin, hair, nails, and mucous
              membranes. Dermatologists are specialized physicians who
              address a wide range of dermatological issues, including skin
              infections, allergic reactions, autoimmune diseases, and skin
              cancers.
              <br/><br/>
      <button className='learnmore' onClick={() => handleSetActiveTab('dermatology')}> Learn more</button></p>
      <img src={cardio} alt="no" className="def-image" /></div>
              </div>
<div className="boxx">
        <div className='small_info' data-aos='zoom-in'>
        <img src={cardio} alt="no" className="def-image" />
        
          <p><b>Psychiatry</b><br/> <br/>
          Psychiatry is the branch of medicine that focuses on the
        diagnosis, treatment, and management of mental disorders
        and conditions. Psychiatrists are specialized physicians who
        assess, diagnose, and provide treatment options for
        individuals experiencing mental health issues, including
        mood disorders, anxiety disorders, psychotic disorders,
        substance use disorders, and more.
          <br/><br/>
          <button className='learnmore' onClick={() => handleSetActiveTab('psychiatry')}> Learn more</button></p>
          </div>
          </div> 
          <div className="boxx">
          <div className='small_info' data-aos='zoom-in'>
              <p><b>ENT</b><br/> <br/>
              ENT (Ear, Nose, and Throat) or Otolaryngology is a medical
            specialty that focuses on the diagnosis, treatment, and
            management of conditions related to the ear, nose, throat,
            head, and neck. ENT specialists, also known as
            otolaryngologists, are trained to address a wide range of

            issues, including hearing loss, sinusitis, tonsillitis, voice
            disorders, and more.
              <br/><br/>
      <button className='learnmore' onClick={() => handleSetActiveTab('ent')}> Learn more</button></p>
      <img src={cardio} alt="no" className="def-image" /></div>
              </div>
<div className="boxx">
        <div className='small_info' data-aos='zoom-in'>
        <img src={cardio} alt="no" className="def-image" />
          <p><b>Nephrology</b><br/> <br/>
          Nephrology is the branch of medicine that deals with the
        study, diagnosis, and treatment of kidney diseases and
        disorders. Nephrologists are specialized physicians who focus
        on managing conditions related to the kidneys, such as
        chronic kidney disease, kidney stones, kidney infections, and
        kidney failure.
          <br/><br/>
          <button className='learnmore' onClick={() => handleSetActiveTab('nephrology')}> Learn more</button></p>
          </div>
          </div> 
          <div className="boxx">
          <div className='small_info' data-aos='zoom-in'>
              <p><b>Pediatrics</b><br/> <br/>
              Pediatrics is the branch of medicine that focuses on the
            medical care of infants, children, and adolescents.
            Pediatricians are specialized physicians who provide
            healthcare for young individuals, addressing a range of
            medical conditions, growth and development concerns, and
            preventive care.
              <br/><br/>
      <button className='learnmore' onClick={() => handleSetActiveTab('pediatrics')}> Learn more</button></p>
      <img src={cardio} alt="no" className="def-image" /></div>
              </div>
<div className="boxx">
        <div className='small_info' data-aos='zoom-in'>
        <img src={cardio} alt="no" className="def-image" />
          <p><b>Pulmonology</b><br/> <br/>
          Pulmonology is a medical specialty that focuses on the
diagnosis, treatment, and management of diseases and
conditions related to the respiratory system. Pulmonologists
are specialized physicians who deal with issues such as
asthma, chronic obstructive pulmonary disease (COPD),
pneumonia, lung cancer, and other respiratory disorders.
          <br/><br/>
          <button className='learnmore' onClick={() => handleSetActiveTab('pulmonology')}> Learn more</button></p>
          </div>
          </div> 
          <div className="boxx">
          <div className='small_info' data-aos='zoom-in'>
              <p><b>Rheumatology</b><br/> <br/>
              Rheumatology is a medical specialty that focuses on the
              diagnosis, treatment, and management of disorders affecting
              the musculoskeletal system, including joints, muscles, bones,
              and connective tissues. Rheumatologists are specialized
              physicians who address conditions such as arthritis,
              autoimmune diseases, fibromyalgia, and other rheumatic
              disorders.
              <br/><br/>
      <button className='learnmore' onClick={() => handleSetActiveTab('rheumatology')}> Learn more</button></p>
      <img src={cardio} alt="no" className="def-image" /></div>
              </div>
<div className="boxx">
        <div className='small_info' data-aos='zoom-in'>
        <img src={cardio} alt="no" className="def-image" />
          <p><b>Gastroenterology</b><br/> <br/>
              Gastroenterology is a medical specialty that focuses on the
              diagnosis, treatment, and management of diseases and
              disorders of the gastrointestinal (GI) tract, which includes the
              digestive system and associated organs such as the stomach,
              intestines, liver, gallbladder, and pancreas.
              Gastroenterologists are specialized physicians who address
              conditions such as gastroesophageal reflux disease (GERD),
              gastritis, irritable bowel syndrome (IBS), inflammatory bowel
              disease (IBD), and liver diseases.
          <br/><br/>
          <button className='learnmore' onClick={() => handleSetActiveTab('gastroenterology')}> Learn more</button></p>
          </div>
          </div> 
          <div className="boxx">
          <div className='small_info' data-aos='zoom-in'>
              <p><b>Radiology</b><br/> <br/>
              Radiology is a medical specialty that involves the use of
              medical imaging technologies to diagnose and treat diseases
              and conditions. Radiologists are specialized physicians who
              interpret and analyze various imaging techniques, such as X-
              rays, CT scans, MRI scans, ultrasound, and nuclear medicine
              scans.
              <br/><br/>
      <button className='learnmore' onClick={() => handleSetActiveTab('radiology')}> Learn more</button></p>
      <img src={cardio} alt="no" className="def-image" /></div>
              </div>
<div className="boxx">
        <div className='small_info' data-aos='zoom-in'>
        <img src={cardio} alt="no" className="def-image" />
          <p><b>Plastic surgery</b><br/> <br/>
          Plastic surgery is a surgical specialty that focuses on the
          restoration, reconstruction, or alteration of the human body.
          It involves both cosmetic procedures aimed at enhancing
          aesthetic appearance and reconstructive procedures aimed
          at restoring function and correcting deformities caused by
          birth defects, trauma, or medical conditions.
          <br/><br/>
          <button className='learnmore' onClick={() => handleSetActiveTab('plasticsurgery')}> Learn more</button></p>
          </div>
          </div> 
          <div className="boxx">
          <div className='small_info' data-aos='zoom-in'>
              <p><b>Neonatology</b><br/> <br/>
              Neonatology is a subspecialty of pediatrics that focuses on
              the care of newborn infants, especially those who are
              premature, critically ill, or have medical conditions that
              require specialized attention. Neonatologists are specialized
              physicians who provide medical care to newborns in neonatal
              intensive care units (NICUs) or special care nurseries.
              <br/><br/>
      <button className='learnmore' onClick={() => handleSetActiveTab('neonatology')}> Learn more</button></p>
      <img src={cardio} alt="no" className="def-image" /></div>
              </div>
<div className="boxx">
        <div className='small_info' data-aos='zoom-in'>
        <img src={cardio} alt="no" className="def-image" />
          <p><b>Endocrinology</b><br/> <br/>
          Endocrinology is a medical specialty that focuses on the diagnosis,
           treatment, and management of disorders related to the endocrine system. 
           The endocrine system consists of various glands that produce hormones
            responsible for regulating bodily functions, metabolism, growth, and
             reproduction.
          <br/><br/>
          <button className='learnmore' onClick={() => handleSetActiveTab('endocrinology')}> Learn more</button></p>
          </div>
          </div> 
          <div className="boxx">
          <div className='small_info' data-aos='zoom-in'>
              <p><b>Urology</b><br/> <br/>
              Urology is a medical specialty that focuses on the diagnosis,
               treatment, and management of disorders related to the urinary 
               system in both males and females, as well as the male reproductive
                system. Urologists are specialized physicians who address 
                conditions such as urinary tract infections, kidney stones, 
                bladder issues, prostate problems, and male infertility.
              <br/><br/>
      <button className='learnmore' onClick={() => handleSetActiveTab('urology')}> Learn more</button></p>
      <img src={cardio} alt="no" className="def-image" /></div>
              </div>
    </div>

  );
};

export default CentresOfExcellencePage;

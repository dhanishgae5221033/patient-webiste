import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="left-section">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div><div>
        <ul>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="right-section">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </footer>
  );
}

export default Footer;
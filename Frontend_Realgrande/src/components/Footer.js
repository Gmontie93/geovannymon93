//import React from 'react';
//import './Footer.css'; // Import the CSS file for footer styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer-container">
      <div className="text-center">
        
          <div className="">
            <p>Follow us on social media:</p>

            
            
            <div className="social-links">
              <a href="#" className="social-link"><FontAwesomeIcon icon={faFacebookF} size="2x"/></a>
              <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
              <a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
            </div>
            <p>Thank you for visiting!</p>
          </div>
          <div className="text-md-right">
            <p>&copy; {currentYear} Real Grande</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
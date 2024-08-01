import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="dark-mode p-4 border-t border-borderGray">
      <div className="text-center text-secondary mb-4">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
      </div>
      <div className="text-center">
      <a href="https://www.linkedin.com/in/arnab-majumder-923ab41bb/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 px-2">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Arnab514" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 px-2">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:arnabmajumdar399@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300 px-2">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://arnab-majumder-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 px-2">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
      </div>
    </footer>
  );
};

export default Footer;

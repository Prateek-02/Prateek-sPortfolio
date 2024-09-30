import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiCodingninjas } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Prateek's Portfolio</h3>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <FaLinkedin className="mr-2 text-3xl hover:text-blue-500 transition-colors duration-300" />
              <a href="https://www.linkedin.com/in/prateekrajofficial/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-500 transition-colors duration-300">LinkedIn</a>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-3xl hover:text-yellow-500 transition-colors duration-300">📧</span>
              <a href="mailto:your.email@example.com" className="text-lg hover:text-yellow-500 transition-colors duration-300">Prateekrajgrd74@gmail.com</a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <div className="flex space-x-4">
              <a href="https://github.com/Prateek-02" target="_blank" rel="noopener noreferrer"><FaGithub className="text-3xl hover:text-gray-400 transition-colors duration-300" /></a>
              <a href="https://www.instagram.com/prateek_sinha_02" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-3xl hover:text-pink-500 transition-colors duration-300" /></a>
              <a href="https://www.naukri.com/code360/profile/3950dc56-f145-4c01-83ab-37ba15684469" target="_blank" rel="noopener noreferrer"><SiCodingninjas className="text-3xl hover:text-orange-500 transition-colors duration-300" /></a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <ul className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-gray-300 text-lg transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-300 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
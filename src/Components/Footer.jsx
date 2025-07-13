import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <hr className="mt-12 border-gray-300" />
      <footer className="py-5 text-center text-gray-700">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/share/176v4rUwCm/"  target="_blank" className="text-gray-600 hover:text-blue-600 transition duration-200">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/login" target="_blank" className="text-gray-600 hover:text-blue-400 transition duration-200">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/tushar_8644/" target="_blank" className="text-gray-600 hover:text-pink-500 transition duration-200">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com/in/tushar-nikam-8b4266240" target="_blank" className="text-gray-600 hover:text-blue-700 transition duration-200">
                <FaLinkedin size={24} />
              </a>
            </div>
            <hr />
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              &copy; 2025 Developed by <span className="font-semibold text-green-600">Tushar</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

{/* <div className="max-w-screen-2xl container mx-auto px-4 md:px-15"> */}
